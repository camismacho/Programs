//
// Abstract Syntax Tree Implementation
//
#include <stdlib.h>
#include <stdio.h>
#include "astree.h"
int argNum = 0;
char *argRegStr[] = {"%rdi","%rsi","%rdx","%rcx","r8","r9"};	
extern int arrSize;
extern int arrInd;
extern char* strings[100];
int newInd = 0;
int toomanyindexes = 0;
// Create a new AST node 
// - allocates space and initializes node type, zeros other stuff out
// - returns pointer to node
ASTNode* newASTNode(ASTNodeType type)
{
   int i;
   ASTNode* node = (ASTNode*) malloc(sizeof(ASTNode));
   node->type = type;
   node->valtype = T_INT;
   node->strval = 0;
   node->next = 0;
   for (i=0; i < ASTNUMCHILDREN; i++)
      node->child[i] = 0;
   return node;
}

// int newind = 0;
		//while(strungout.strings[newind] != NULL){
		//printf(".LC%d:\n\t.string \t%s\n", newind, strungout.strings[newind]);
		//newind++;

// Generate an indentation string prefix, for use
// in printing the abstract syntax tree with indentation 
// used to indicate tree depth.
// -- NOT thread safe! (uses a static char array to hold prefix)
#define INDENTAMT 3
static char* levelPrefix(int level)
{
   static char prefix[128]; // static so that it can be returned safely
   int i;
   for (i=0; i < level*INDENTAMT && i < 126; i++)
      prefix[i] = ' ';
   prefix[i] = '\0';
   return prefix;
}

// Print the abstract syntax tree starting at the given node
// - this is a recursive function, your initial call should 
//   pass 0 in for the level parameter
// - comments in code indicate types of nodes and where they
//   are expected; this helps you understand what the AST looks like
// - out is the file to output to, can be "stdout" or other
void printASTree(ASTNode* node, int level, FILE *out)
{
   if (!node)
      return;
   fprintf(out,"%s",levelPrefix(level)); // note: no newline printed here!
   switch (node->type) {
    case AST_PROGRAM:
       fprintf(out,"Program\n");
       printASTree(node->child[0],level+1,out);  // child 0 is gobal var decls
       fprintf(out,"%s--functions--\n",levelPrefix(level+1));
       printASTree(node->child[1],level+1,out);  // child 1 is function defs
       break;
    case AST_VARDECL:
       fprintf(out,"Variable declaration (%s)",node->strval); // var name
       if (node->valtype == T_INT)
          fprintf(out," type int\n");
       else if (node->valtype == T_STRING)
          fprintf(out," type string\n");
       else
          fprintf(out," type unknown\n");
       break;
    case AST_FUNCTION:
       fprintf(out,"Function def (%s)\n",node->strval); // function name
       printASTree(node->child[0],level+1,out); // child 0 is param list
       fprintf(out,"%s--body--\n",levelPrefix(level+1));
       printASTree(node->child[1],level+1,out); // child 1 is body (stmt list)
       break;
    case AST_SBLOCK:
       fprintf(out,"Statement block\n");
       printASTree(node->child[0],level+1,out);  // child 0 is statement list
       break;
    case AST_FUNCALL:
       fprintf(out,"Function call (%s)\n",node->strval); // func name
       printASTree(node->child[0],level+1,out);  // child 0 is argument list
       break;
    case AST_ARGUMENT:
       fprintf(out,"Funcall argument\n");
       printASTree(node->child[0],level+1,out);  // child 0 is argument expr
       break;
    case AST_ASSIGNMENT:
       fprintf(out,"Assignment to (%s)\n", node->strval);
       printASTree(node->child[0],level+1,out);  // child 1 is right hand side
       break;
    case AST_WHILE:
       fprintf(out,"While loop\n");
       printASTree(node->child[0],level+1,out);  // child 0 is condition expr
       fprintf(out,"%s--body--\n",levelPrefix(level+1));
       printASTree(node->child[1],level+1,out);  // child 1 is loop body
       break;
    case AST_IFTHEN:
       fprintf(out,"If then\n");
       printASTree(node->child[0],level+1,out);  // child 0 is condition expr
       fprintf(out,"%s--ifpart--\n",levelPrefix(level+1));
       printASTree(node->child[1],level+1,out);  // child 1 is if body
       fprintf(out,"%s--elsepart--\n",levelPrefix(level+1));
       printASTree(node->child[2],level+1,out);  // child 2 is else body
       break;
    case AST_EXPRESSION: // only for binary op expression
       fprintf(out,"Expression (op %d)\n",node->ival);
       printASTree(node->child[0],level+1,out);  // child 0 is left side
       printASTree(node->child[1],level+1,out);  // child 1 is right side
       break;
    case AST_VARREF:
       fprintf(out,"Variable ref (%s)\n",node->strval); // var name
       break;
    case AST_CONSTANT: // for both int and string constants
       if (node->valtype == T_INT)
          fprintf(out,"Int Constant = %d\n",node->ival);
       else if (node->valtype == T_STRING)
          fprintf(out,"String Constant = (%s)\n",node->strval);
       else 
          fprintf(out,"Unknown Constant\n");
       break;
    default:
       fprintf(out,"Unknown AST node!\n");
   }
   // IMPORTANT: walks down sibling list (for nodes that form lists, like
   // declarations, functions, parameters, arguments, and statements)
   printASTree(node->next,level,out);
}

//
// Below here is code for generating our output assembly code from
// an AST. You will probably want to move some things from the
// grammar file (.y file) over here, since you will no longer be 
// generating code in the grammar file. You may have some global 
// stuff that needs accessed from both, in which case declare it in
// one and then use "extern" to reference it in the other.

// In my code, I moved over this stuff:
//void outputConstSec();
//int argnum=0;
//char *argregs[] = {"di", "si", "dx", "cx", "r8", "r9"};

// Generate assembly code from AST
// - this function should look _alot_ like the print function;
//   indeed, the best way to start would be to copy over the 
//   code from printASTree() and change all the recursive calls
//   to this function; then, instead of printing info, we are 
//   going to print assembly code. Easy!
// - param node is the current node being processed
// - param count is a counting parameter (similar to level in
//   the printASTree() function) that can be used to keep track
//   of a position in a list -- I use it only in one place, to keep
//   track of arguments and then to use the correct argument register
//   (count is my index into my argregstr[] array); otherwise this
//   can just be 0
// - param out is the output file handle. Use "fprintf(out,..." 
//   instead of printf(...); call it with "stdout" for terminal output
void genCodeFromASTree(ASTNode* node, int level, FILE *out)
{
  if (!node)
      return;
  
   switch (node->type) {
    case AST_PROGRAM:
	fprintf(out,"\033[A\033[2K");
	rewind(out);
       fprintf(out,"\t.data\n");
       genCodeFromASTree(node->child[0],level+1,out);  // child 0 is gobal var decls
       fprintf(out,"\t.section\t.rodata\n");
		while(strings[newInd] != NULL){
		printf(".LC%d:\n\t.string \t%s\n", newInd, strings[newInd]);
		newInd++;
		}
       fprintf(out,"\t.text\n");
       genCodeFromASTree(node->child[1],level+1,out);  // child 1 is function defs
      
       break;
    case AST_VARDECL:
       fprintf(out, "%s: \t.word 0\n", node->strval);
       break;
    case AST_FUNCTION:

       genCodeFromASTree(node->child[0],level+1,out); // child 0 is param list
        fprintf(out, "\t.globl\t%s\n\t.type\t%s,@function\n%s:\n\tpushq\t%%rbp\n\tmovq\t%%rsp, %%rbp\n", node->strval, node->strval, node->strval);
       genCodeFromASTree(node->child[1],level+1,out); // child 1 is body (stmt list)
        fprintf(out, "\n\tpopq\t%%rbp\n\tmovl\t$0, %%eax\n\tret\n");
       break;
    case AST_SBLOCK:

       genCodeFromASTree(node->child[0],level+1,out);  // child 0 is statement list
       break;
    case AST_FUNCALL:
	argNum = 0;
       genCodeFromASTree(node->child[0],level+1,out);// child 0 is argument list
       fprintf(out,"\tmovl\t$0, %%eax\n\tcall\t%s\n", node->strval);
       break;
    case AST_ARGUMENT:
       genCodeFromASTree(node->child[0],level+1,out);  // child 0 is argument expr
       break;
    case AST_ASSIGNMENT:

       genCodeFromASTree(node->child[0],level+1,out); 
        fprintf(out, "\tmovl\t%%eax, %s\n\tmovl\t%s, %%eax\n\tmovl\t%%eax, %%esi\t\n", node->strval, node->strval);// child 1 is right hand side
       break;
    case AST_WHILE:

       genCodeFromASTree(node->child[0],level+1,out);  // child 0 is condition expr

       genCodeFromASTree(node->child[1],level+1,out);  // child 1 is loop body
       break;
    case AST_IFTHEN:

       genCodeFromASTree(node->child[0],level+1,out);  // child 0 is condition expr

       genCodeFromASTree(node->child[1],level+1,out);  // child 1 is if body

       genCodeFromASTree(node->child[2],level+1,out);  // child 2 is else body
       break;
    case AST_EXPRESSION: // only for binary op expression
	
       genCodeFromASTree(node->child[0],level+1,out);  // child 0 is left side
	fprintf(out,"\tpushq\t%%rdx\n");
       genCodeFromASTree(node->child[1],level+1,out);  // child 1 is right side
	fprintf(out,"\tpopq\t%%rcx\n\taddl\t%%ecx, %%edx\n");
       break;
    case AST_VARREF:
        fprintf(out, "\tmovl\t%s, %%edx\n",node->strval);
       break;
    case AST_CONSTANT: // for both int and string constants
       if (node->valtype == T_INT) {
        fprintf(out, "\tmovl\t$%d, %%edx\n", node->ival);
       }
       else if (node->valtype == T_STRING) {
        fprintf(out, "\tmovq\t$.LC%d, %s\n",toomanyindexes, argRegStr[argNum]);
	toomanyindexes++;
	argNum++;
	
       }
       else {
        
    } 

       break;
    default:
	fprintf(stdout,"Unknown AST node!\n");
   }
   // IMPORTANT: walks down sibling list (for nodes that form lists, like
   // declarations, functions, parameters, arguments, and statements)
   genCodeFromASTree(node->next,level,out);
}


