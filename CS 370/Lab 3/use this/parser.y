/*****
* Yacc parser for simple example
*
* The grammar in this example is:
* all -> phrases
* phrases -> <empty>
* phrases -> phrases NUMBER PLUS NUMBER
* phrases -> phrases NUMBER
* phrases -> phrases OTHER
* 
* The tokens that come from the scanner are: NUMBER, PLUS, and OTHER. 
* The scanner skips all whitespace (space, tab, newline, and carriage return).
* The lexemes of the token NUMBER are strings of digits ('0'-'9'). 
* The lexeme of PLUS is only a string consisting of the plus symbol ('+').
* The lexemes of the token OTHER are strings of characters that do not 
* include whitespace, digits, or the plus symbol.
* 
* Given the input "acb 42 +34 52this is", the scanner would produce 
* the tokens(/lexemes) of:
* <OTHER,"abc">, <NUMBER,"42">, <PLUS,"+">, <NUMBER,"34">, <NUMBER,"52">,
* <OTHER,"this">, <OTHER,"is">
* 
* and this would match the grammar.
*****/

/****** Header definitions ******/
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// function prototypes from lex
int yyerror(char *s);
int yylex(void);
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
		sprintf(code,"\t.globl\t%s\n\t.type\t%s,@function\nmain:\n\tpushq\t\rbp\n\tmovq\trsp, rbp\n\t%s\n\t%s\n\tmovl\t0, eax\n\tpopq\trbp\n\tret\n", $1, $1, $5, $5);
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
		printf("function call!\n");
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



