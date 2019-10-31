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

ASTNode* tree;

stringArray stringStore = {0,0};

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
%type <astnode> prog functions function statements statement funcall assignment arguments argument expression declarations vardecl parameters

/* Token types - either int or string*/
%token <ival> NUMBER COMMA SEMICOLON LPAREN RPAREN LBRACE RBRACE PLUS EQUALS KWINT KWCHAR
%token <str> ID STRING

%%
/******* Rules *******/

prog: declarations functions
     {
        //if (debug) fprintf(stderr, "Program\n");
        tree = newASTNode(AST_PROGRAM);
		tree -> child[0] = $1;
		tree -> child[1] = $2;
     }

functions: function functions
	{
		//if (debug) fprintf(stderr, "--Functions--\n");
		$1 -> next = $2;
		$$ = $1;
	}
	//empty
|	{$$ = 0;}

function: ID LPAREN parameters RPAREN LBRACE statements RBRACE
	{
		//if (debug) fprintf(stderr, "Function def (%s)\n", $1);
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
        $$ -> child[0] = $1;
        $$ -> ival = $2;
        $$ -> child[1] = $3;
	}
|	NUMBER
	{
		$$ = newASTNode(AST_CONSTANT);
		$$ -> ival = $1;
		$$ -> valtype = T_INT;
	}
|   ID
    {
        $$ = newASTNode(AST_VARREF);
        $$ -> strval = $1;
        //we don't need ival atm
        $$ -> valtype = T_STRING;
    }
|   STRING
	{
        //stringStore.sid = addString($1);
        $$ = newASTNode(AST_CONSTANT);
        //$$ -> ival = stringStore.sid;
        $$ -> strval = $1;
        $$ -> valtype = T_STRING;
	}
    
declarations: vardecl SEMICOLON declarations
    {
        $1 -> next = $3;
        $$ = $1;
    }
    //empty string
|       {$$ = 0;}

vardecl: KWINT ID
    {
        $$ = newASTNode(AST_VARDECL);
        $$ -> strval = $2;
        $$ -> valtype = T_INT;
    }
        
| KWCHAR ID
    {
        $$ = newASTNode(AST_VARDECL);
        $$ -> strval = $2;
        $$ -> valtype = T_STRING;
    }

parameters: vardecl COMMA parameters
        {
        $1 -> next = $3;
        $$ = $1;
        }
| vardecl
        {$$ = $1;}
//empty
|       {$$ = 0;}
%%

/******* Functions *******/
extern FILE *yyin; // from lex

int main(int argc, char **argv)
{ 
  if (argc==2) {
      yyin = fopen(argv[1],"r");
      if (!yyin) {
         printf("Error: unable to open file (%s)\n",argv[1]);
         return(1);
      }
   }
   FILE* output = fopen("test.s", "w");
   yyparse();
   printASTree(tree, 0, output);
   //genCodeFromASTree(tree, 0, output);
   return(0);
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





