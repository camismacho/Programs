/* parser.y
* Joseph Camacho-Terrazas
*/

/****** Header definitions ******/
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "symtable.h"
#include "astree.h"
// function prototypes from lex
int yyerror(char *s);
int yylex(void);
int addString(char* input);
int addNum(int input);
int argNum = 0;
char *argRegStr[] = {"%rdi","%rsi","%rdx","%rcx","%r8","%r9"};

//declare struct for addString
typedef struct {
	int sid;
	int arrayIndex;
	char* strings[100];
} stringArray;

//initialize stringStore
stringArray stringStore = {0,0};

//global variables needed for symbol table
Symbol** symTable;
SymbolTableIter iter;
Symbol* tempSym;
Symbol* findSym;
%}  

/* token value data types */
%union { 
    int ival;
    char* str; 
    struct astnode_s * astnode;
    }

/* Starting non-terminal */
%start prog
// nonterminals return ASTnode pointer
%type <astnode> functions function statements statement funcall assignment arguments argument expression declarations vardecl parameters

/* Token types - either int or string*/
%token <ival> NUMBER COMMA SEMICOLON LPAREN RPAREN LBRACE RBRACE PLUS EQUALS KWINT KWCHAR
%token <str> ID STRING

%%
/******* Rules *******/

prog: declarations functions
     {
        if (debug) fprintf(stderr, "Program\n");
		$$ = newASTNode(AST_PROGRAM);
		$$ -> child[0] = $1;
		$4 -> child[1] = $2;
     }

functions: function functions
	{
		if (debug) fprintf(stderr, "--Functions--\n");
		$1 -> next = $2;
		$$ = $1;
	}
	//empty
|	{$$ = 0;}

function: ID LPAREN parameters RPAREN LBRACE statements RBRACE
	{
		if (debug) fprintf(stderr, "Function def (%s)\n", $1);
		$$ = newASTNode(AST_FUNCTION);
		$$ -> valtype = T_STRING;
		$$ -> strval = $1;
		$$ -> child[0] = $3;
		$$ -> child[1] = $6;
	}
	
statements: statement SEMICOLON statements
	{
        $1 -> next = $3;
		$$ = $1;
	}
	//empty string
|	{$$ = 0;}
	
statement: funcall
	{
		$$ = $1;
	}
	
|   assignment
    {
        $$ = $1;
    }
	
funcall: ID LPAREN arguments RPAREN
	{
        $$ = newASTNode(AST_FUNCALL);
        $$ -> strval = $1;
        $$ -> child[0] = $3;
     }

assignment: ID EQUALS expression
    {
        $$ = newASTNode(AST_ASSIGNMENT);
        $$ -> strval = $1;
        $$ -> child[0] = $3;
    }
    
arguments: argument COMMA arguments
	{
        //may need to create new node here instead, ask..
		$1 -> next = $3;
		$$ = $1;
	}
|	argument
	{
		$$ = $1;
	} 
	//empty
|	{$$ = 0;}

argument: expression
	{
        $$ = newASTNode(AST_ARGUMENT);
		$$ -> child[0] = $1;
	}

expression: expression PLUS expression
	{
        $$ = newASTNode(AST_EXPRESSION);
	
		char *code = (char*) malloc(1000);
		sprintf(code, "%s\tpushq\t%%rdx\n%s\tpopq\t%%rcx\n\taddl\t%%ecx, %%edx\n", $1, $3);
		$$ = code;
	}
|	NUMBER
	{
		char *code = (char*) malloc(1000);
		sprintf(code, "\tmovl\t$%d, %%edx\n", $1);
		$$ = code;
	}
|   ID
    {
        char* code = (char*) malloc(1000);
        sprintf(code, "\tmovl\t%s, %%edx\n", $1);
        $$ = code;
    }
|   STRING
	{
        stringStore.sid = addString($1);
        char *code = (char*) malloc(1000);
        sprintf(code, "\tmovq\t$.LC%d, %s\n", stringStore.sid, argRegStr[argNum]);
        argNum++;
        
		$$ = code;
	}
    
declarations: vardecl SEMICOLON declarations
    {
         $$ = 0;
    }
    //empty string
|       {$$ = 0;}

vardecl: KWINT ID
    {
        $$ = newASTNode(AST_VARDECL);
    
        addSymbol(symTable, $2, 0, T_INT);
        $$ = 0;
    }
        
| KWCHAR ID
    {
        addSymbol(symTable, $2, 0, T_STRING);
        $$ = 0;
    }

parameters: vardecl COMMA parameters
        {$$ = 0;}
| vardecl
        {$$ = 0;}

|       {$$ = 0;}
%%

/******* Functions *******/
extern FILE *yyin; // from lex

int main(int argc, char **argv)
{
    symTable = newSymbolTable();
   if (argc==2) {
      yyin = fopen(argv[1],"r");
      if (!yyin) {
         printf("Error: unable to open file (%s)\n",argv[1]);
         return(1);
      }
   }
   return(yyparse());
}

int yyerror(char *s)
{
   fprintf(stderr, "%s\n",s);
   return 0;
}

int yywrap()
{
   return(1);
}

int addString(char* input) {
	stringStore.strings[stringStore.arrayIndex] = input;
	stringStore.arrayIndex++;
	
	return stringStore.arrayIndex - 1;
}



