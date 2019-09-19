/********* HEADER DEFINITIONS **********/

%{

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#ifndef LEXONLY
#include "y.tab.h"
#else
typedef union { int ival; char* str; } yystype;
#define YYSTYPE yystype
yystype yylval;
#define ID        1 /* token ID */
#define STRING    2
#define LPAREN    3
#define RPAREN    4
#define LBRACE    5
#define RBRACE    6
#define SEMICOLON 7
#endif
%}

/*********** RULES ******************/
%%

[ \t\n\r]* {}

 /* token ID */
[a-zA-Z]+ { 
            printf("ID: (%s)\n", yytext);
            yylval.str = strdup(yytext);
            return(ID);
          }
          
\".*\"  {
            printf("STRING: (%s)\n", yytext);
            yylval.str = strdup(yytext);
            return(STRING);
          }
          
\(        {
            printf("LPAREN: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(LPAREN);
          }
          
\)        {
           printf("RPAREN: (%s)\n", yytext);
           yylval.ival = yytext[0];
           return(RPAREN);
          }

\{        {
           printf("LBRACE: (%s)\n", yytext);
           yylval.ival = yytext[0];
           return(LBRACE);
          }
          
\}        {
           printf("RBRACE: (%s)\n", yytext);
           yylval.ival = yytext[0];
           return(RBRACE);
          }
          
\;        {
           printf("SEMICOLON: (%s)\n", yytext);
           yylval.ival = yytext[0];
           return(SEMICOLON);
          }
          
          






%%
#ifdef LEXONLY
// this can be a main for standalone testing (uses just stdin)
int main(int argc, char **argv) 
{
   do {
      yylex();
   } while (1);

   return 0;
}

int yywrap()
{
   exit(0); // hard exit!
   //return(1);
}
#endif
