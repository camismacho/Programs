/*****
* Yacc parser for simple example
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
%type <str> function statement function funcall

/* Token types */
%token <ival> NUMBER COMMA SEMICOLON LPAREN RPAREN LBRACE RBRACE
%token <str> ID STRING

%%
/******* Rules *******/

all: phrases 
     {
         printf("all : (%s)\n",$1);
     }

phrases: /*empty*/
       { $$ = "empty"; }
     | phrases NUMBER PLUS NUMBER 
       { 
          printf("ADD %d %d is %d\n",$2,$4,$2+$4);
          $$ = "add";
       }
     | phrases NUMBER 
       {
          printf("NUMBER %d\n",$2);
          $$ = "num";
       }
     | phrases OTHER 
       {
          printf("OTHER [%s]\n",$2);
          $$ = "oth";
       }
     ;
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

