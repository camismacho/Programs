/****** Header definitions ******/
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// function prototypes from lex
int yyerror(char *s);
int yylex(void);
int addString();
%}

/* token value data types */
%union { int ival; char* str; }

/* Starting non-terminal */
%start prog
%type <str> function statements statement funcall

/* Token types */
%token <ival> NUMBER COMMA SEMICOLON LPAREN RPAREN LBRACE RBRACE
%token <str> ID STRING

%%
/******* Rules *******/

prog: function
     {
         printf("\t.section\t\t.rodata\n.LC0\n.string \"Hello World!\\n\"\n/t.text\n%s", $1);
     }

function: ID LPAREN RPAREN LBRACE statements RBRACE
	{
		char *code = (char*) malloc(128);
		sprintf(code,"\t.globl\t%s\n\t.type\t%s,@function\nmain:\n\tpushq\t\%%rbp\n\tmovq\t%%rsp, %%rbp\n\t%s\n\t%s\n\tmovl\t0, %%eax\n\tpopq\t%%rbp\n\tret\n", $1, $1, $5, $5);
		$$ = code;
	}
	
statements: statement statements
	{
		char *code = (char*) malloc(128);
		strcat(code, $1);
		$$ = code;
	}
	
	| {}
	
statement: funcall
	{
		$$ = $1;
	}
	
funcall: ID LPAREN STRING RPAREN SEMICOLON
	{
		int sid = addString($3);
		char *code = (char*) malloc(128);
		sprintf(code,"\tmovel\t$.LC%d, %%edi\n\tcall\t%s\n", sid, $1);
		$$ = code;
     }
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

int addString() {
	return(0);
}



