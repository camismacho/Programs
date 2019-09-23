/*///////// HEADER DEFS /////////*/ 
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*prototypes*/
int addString ( char* );
int yyerror( char* );
int yywrap();
/*global variables*/
int strID = 0;
char* strArr[128];
int strPos = 0;
%} 

%union { int ival; char* str }

%start prog /* starting symbol */
%type <str> function statements statement funcall

%token <ival> LPAREN RPAREN LBRACE RBRACE SEMICOLON
%token <str> ID STRING

%%
/********* RULES **********/
prog: function
   {
      printf("\t.section\t.rodata\n.LC%d:\n\t.string\t%s\n\t.text\n%s", strID, strArr[strPos - 1] ,$1);
   }
   
function: ID LPAREN RPAREN LBRACE statements RBRACE
   {
      char* code = (char*) malloc(128);
      sprintf(code, "\t.globl  %s\n\t.type   %s, @function\n%s:\n\tpushq   %%rbp\n\tmovq    %%rsp, %%rbp%s\tmovl    $%d, %%eax\n\tpopq    %%rbp\n\tret\n" , $1, $1, $1, $5, strID );
      $$ = code;
   }
   
statements: statement statements 
   { 
      char* code = (char*) malloc(128);
      strcat(code, $1);
      $$ = code; 
   }
   | {} /*empty*/

statement: funcall
   {  
      $$ = $1; 
   }
   
funcall: ID LPAREN STRING RPAREN SEMICOLON
   {
		strID = addString($3);
		char* code = (char*) malloc(128);
		sprintf(code,"\n\tmovl\t$.LC%d, %%edi\n\tcall\t%s\n", strID, $1);
		$$ = code;
   }
   
%% /* end of RULES */ 

/************ FUNCTIONS ****************/
extern FILE *yyin;

int main(int argc, char **argv) {
   if (argc == 2) {
      yyin = fopen(argv[1],"r");
      if (!yyin) {
         printf("Error: unable to open file (%s)\n",argv[1]);
         return(1);
      } // end if
   } // end if
   return(yyparse());
} // end main

int yyerror(char *s) {
   fprintf(stderr, "%s\n",s);
   return 0;
} // end yyerror function

int yywrap() {
   return(1);
} // end yywrap function

// Storing the parameter in the struct's array.
// "storage" is a struct of the type StrArray
// "dollar" is the string passed to the function

int addString ( char* dollar ) {   

  strArr[strPos] = dollar;
  strPos++;
  return strPos - 1;

} //end addString
