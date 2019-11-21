//
// Abstract Syntax Tree Implementation
//
#include <stdlib.h>
#include <stdio.h>
#include "astree.h"
#include "symtable.h"

/***** ARGUMENT REGISTER THINGS *****/
int argNum = 0;
char *argRegStr[] = {"%rdi","%rsi","%rdx","%rcx","%r8","%r9"};
extern stringArray stringStore;
extern Symbol** symTable;
int ind = 0;
int count = 100;
Symbol* findSym;
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
       fprintf(out,"Variable declaration (%s)",node->strval);
       if (node->valtype == T_INT)
          fprintf(out," type int\n");
       else if (node->valtype == T_STRING)
          fprintf(out," type string\n");
       else
          fprintf(out," type unknown\n");
       break;
    case AST_FUNCTION:
       fprintf(out,"Function def (%s)\n",node->strval);
       printASTree(node->child[0],level+1,out); // child 0 is arg list
       fprintf(out,"%s--body--\n",levelPrefix(level+1));
       printASTree(node->child[1],level+1,out); // child 1 is body (stmt list)
       break;
    case AST_SBLOCK:
       fprintf(out,"Statement block\n");
       printASTree(node->child[0],level+1,out);  // child 0 is statement list
       break;
    case AST_FUNCALL:
       fprintf(out,"Function call (%s)\n",node->strval);
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
    case AST_EXPRESSION:
       fprintf(out,"Expression (op %d)\n",node->ival);
       printASTree(node->child[0],level+1,out);  // child 0 is left side
       printASTree(node->child[1],level+1,out);  // child 1 is right side
       break;
    case AST_VARREF:
       fprintf(out,"Variable ref (%s)\n",node->strval);
       break;
    case AST_CONSTANT:
       if (node->valtype == T_INT)
          fprintf(out,"Int Constant = %d\n",node->ival);
       else if (node->valtype == T_STRING)
          fprintf(out,"String Constant = (%s)\n",node->strval);
       else 
          fprintf(out,"Unknown Constant\n");
       break;
    case AST_RELEXPR:
        printASTree(node -> child[0], 0, out); //child 0 is left side
        fprintf(out, "Left Side\n");
        printASTree(node -> child[1], 0, out); //child 1 is right side
        fprintf(out, "Right Side\n");
        
        switch (node -> ival) {
            case '<': fprintf(out, "Relop <\n"); break;
            case '>': fprintf(out, "Relop >\n"); break;
            case '!': fprintf(out, "Relop !\n"); break;
            case '=': fprintf(out, "Relop =\n"); break;
            default: ;
        }//end switch
        
        break;
    
    default:
       fprintf(out,"Unknown AST node!\n");
   }
   printASTree(node->next,level,out); // IMPORTANT: walks down sibling list
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
    char* instr = "";
    
   if (!node)
      return;
   
   switch (node->type) {
   
    case AST_PROGRAM:
        fprintf(out,"#GLOBAL VARIABLES\n");
     	fprintf(out, "\t.data\n");
        genCodeFromASTree(node->child[0], 0, out);  // child 0 is global var decls
        fprintf(out,"#STRING DATA SECTION\n");
        fprintf(out, "\t.section\t.rodata\n");

        while (ind < stringStore.arrayIndex) {
     		fprintf(out, ".LC%d:\n\t.string\t%s\n", ind, stringStore.strings[ind]);
     		ind++;
     	}
     	fprintf(out, "\t.text\n");
        
        genCodeFromASTree(node->child[1], 0, out);  // child 1 is function defs
        break;
    
    case AST_VARDECL:
       if (node->valtype == T_INT && node -> ival == 0){
          fprintf(out, "#GLOBAL VARDECL INT\n");
          fprintf(out, ".comm %s, 4, 4\n", node -> strval);
       }
       /*else if (node -> valtype == T_INT && node -> ival > 0){
            //fprintf(out, "#PARAMETER VARDECL ival = %d\n", node -> ival);
            findSym = findSymbol(symTable, node -> strval);
            if (findSym -> scopeLevel = 0) {
                fprintf(out, "#GLOBAL ARRAY VARDECL ival = %d\n", node -> ival);
                fprintf(out, ".comm %s, %d, 32\n", node -> strval, 4*node -> ival);
            }
            else{
                fprintf(out, "#PARAMETER VARDECL ival = %d\n", node -> ival);
                fprintf(out, ".comm %s, 4, 4\n", node -> strval);
            }
       }*/
       else if (node -> valtype == T_INT && node -> ival > 0){
            fprintf(out, "#PARAMETER VARDECL ival = %d\n", node -> ival);
            findSym = findSymbol(symTable, node -> strval);
            fprintf(out, ".comm %s, 4, 4\n", node -> strval);
       }
       else if (node -> valtype == T_INTARR && node -> ival > 0){
            fprintf(out, "#GLOBAL ARRAY VARDECL ival = %d\n", node -> ival);
            fprintf(out, ".comm %s, %d, 32\n", node -> strval, 4 * node -> ival);
       }
       else if (node -> valtype == T_INT && node -> ival < 0){
            fprintf(out, "#LOCAL VARDECL ival = %d\n", node -> ival);
            fprintf(out, ".comm %s, 4, 4\n", node -> strval);
       }
       else if (node->valtype == T_STRING){
           fprintf(out, "#VARDECL STRING ival = %d\n", node -> ival);
           fprintf(out, "%s:\t.word 0\n", node -> strval);
       }
       else
          fprintf(out," type unknown\n");
       break;
    
    case AST_FUNCTION:
        fprintf(out,"\n\t\t#*****-----FUNCTION %s-----*****\n", node -> strval);
        fprintf(out, "#--FUNCTION ARG LIST\n");
        genCodeFromASTree(node->child[0], 0, out); // child 0 is arg list
        fprintf(out, "#--LOCAL DECLARATIONS\n");
        genCodeFromASTree(node->child[2], 0, out); // child 2 is localdecls
        fprintf(out,"#--FUNCTION BODY\n");
        fprintf(out,"\t.globl\t%s\n\t.type\t%s, @function\n%s:\n\tpushq\t%%rbp\n\tmovq\t%%rsp, %%rbp\n\tsubq\t$64, %rsp\n", node -> strval, node -> strval, node -> strval);
        genCodeFromASTree(node->child[1], 0, out); // child 1 is body (stmt list)
        fprintf(out,"\n\tleave\n\tmovl\t$0, %%eax\n\tret\n");
        fprintf(out,"\t\t#*****-----ENDFUNCTION %s-----*****\n\n", node -> strval);
        break;
    
    case AST_SBLOCK:
        fprintf(out,"Statement block\n");
        genCodeFromASTree(node->child[0], 0, out);  // child 0 is statement list
        break;
    
    case AST_FUNCALL:
        argNum = 0;
        fprintf(out, "\n\t#~~~~~FUNCALL %s~~~~~\n", node -> strval);
        genCodeFromASTree(node->child[0], 0, out);  // child 0 is argument list
        fprintf(out, "\tmovl\t$0, %%eax\n\tcall\t%s\n", node -> strval);
        fprintf(out,"\t#~~~~~ENDFUNCALL %s~~~~~\n\n", node -> strval);
        break;
    
    case AST_ARGUMENT:
        fprintf(out, "#ARGUMENT\n");
        genCodeFromASTree(node->child[0], 0, out);  // child 0 is argument expr
        fprintf(out, "\tmovq\t%%rdx, %s\n", argRegStr[argNum]);
        argNum++;
        break;
    
    case AST_ASSIGNMENT:
        fprintf(out,"#ASSIGNMENT\n");
        fprintf(out,"#--ASSIGNMENT LHS \n");
        genCodeFromASTree(node->child[0], 0, out);  // child 1 is right hand side
        fprintf(out,"#--ASSIGNMENT TO %s \n", node -> strval);
        fprintf(out, "\tmovq\t%%rdx, %s\n\tmovq\t%%rdx, %%rdi\n", node -> strval);
        break;
    
    case AST_WHILE:
        fprintf(out, "#WHILE LOOP\n");
        count++;
        fprintf(out, "\tjmp\tLL%d\n", count);
        count++;
        fprintf(out, "#--LOOPBODY\n");
        fprintf(out, "LL%d:\n", count);
        genCodeFromASTree(node->child[1], 0, out);  // child 1 is loop body
        count--;
        fprintf(out, "#--LOOPCONDITION\n");
        fprintf(out, "LL%d:\n", count);
        genCodeFromASTree(node->child[0], 0, out);  // child 0 is condition expr
        break;
   
    case AST_IFTHEN:
        fprintf(out, "#IFTHEN\n");
        genCodeFromASTree(node->child[0], 0, out);  // child 0 is condition expr
        fprintf(out, "#--IFBODY\n");
        genCodeFromASTree(node->child[2], 0, out);  // child 1 is if body
        count++;
        fprintf(out, "\tjmp\tLL%d\n", count);
        count--; 
        fprintf(out, "#--ELSEBODY\n");
        fprintf(out, "LL%d:\n", count);
        genCodeFromASTree(node->child[1], 0, out);  // child 2 is else body
        fprintf(out, "#--CONTINUE PROGRAM\n");
        count++;
        
        fprintf(out, "LL%d:\n", count);
       break;
   
    case AST_EXPRESSION:
        fprintf(out, "#EXPRESSION\n");
        fprintf(out, "#--EXPRESSION LHS\n");
        genCodeFromASTree(node->child[0], 0, out);  // child 0 is left side
        fprintf(out, "\tpushq\t%%rdx\n");
        fprintf(out, "#--EXPRESSION RHS\n");
        genCodeFromASTree(node->child[1], 0, out);  // child 1 is right side
        fprintf(out, "\tpopq\t%%rcx\n");
        fprintf(out, "#EXPR ADD LHS + RHS\n");
        fprintf(out, "\taddq\t%%rcx, %%rdx\n");
        break;
   
    case AST_VARREF:
        fprintf(out, "#VARREF (%s) ival = %d\n",node -> strval, node -> ival);
        if (node -> ival == 0)
            fprintf(out, "\tmovq\t%s, %%rdx\n", node->strval);
        else if (node -> ival < 0)
            fprintf(out, "\tmovq\t%d(%%rbp), %%rdx\n", node -> ival);
        else if (node -> ival > 0)
            fprintf(out, "\tmovq\t%s, %%rdx\n", argRegStr[node -> ival]);
       //if else based on ival. if 0, genereate the global reference, neg generate offset code, positive generate argument register
       break;
   
    case AST_CONSTANT:
        //use ival to create string id's
        if (node->valtype == T_INT){
            fprintf(out, "#CONSTANT INT %d\n", node ->ival);
            fprintf(out, "\tmovq\t$%d, %%rdx\n", node -> ival);
        }
        else if (node->valtype == T_STRING){
            fprintf(out, "#CONSTANT STRING $.LC%d\n", node -> ival);
            fprintf(out, "\tmovq\t$.LC%d, %%rdx\n", node -> ival);
        }
        else 
            fprintf(out,"Unknown Constant\n");
        break;
        
    case AST_RELEXPR:
        fprintf(out, "#RELEXPR\n");
        genCodeFromASTree(node -> child[0], 0, out); //child 0 is left side
        fprintf(out, "#--RELEXPR LHS\n");
        fprintf(out, "\tpushq\t%%rdx\n");
        genCodeFromASTree(node -> child[1], 0, out); //child 1 is right side
        fprintf(out, "#--RELEXPR RHS\n");
        fprintf(out, "\tpopq\t%%rcx\n");
        fprintf(out, "#COMPARE LHS AND RHS\n");
        fprintf(out, "\tcmp\t%%rdx, %%rcx\n");
        
        switch (node -> ival) {
            case '<': instr = "jl"; break;
            case '>': instr = "jg"; break;
            case '!': instr = "jne"; break;
            case '=': instr = "je"; break;
            default: instr = "unknown relop";
        }//end switch
        
        count++;
        fprintf(out, "#--RELATIONAL JUMP INSTR\n");
        fprintf(out, "\t%s\tLL%d\n", instr, count);
        break;
    
    default:
       fprintf(out,"Unknown AST node!\n");
   }
   genCodeFromASTree(node->next,level,out); // IMPORTANT: walks down sibling list*/
}



