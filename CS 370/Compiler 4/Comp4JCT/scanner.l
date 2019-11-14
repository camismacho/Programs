/* scanner.l for compiler 4
* Joseph Camacho-Terrazas
*/

/****** Header definitions ******/
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#ifndef LEXONLY
// definitions auto-created by yacc (when using yacc)
#include "y.tab.h"
#else
// explicit definitions for standalone mode
typedef union { int ival; char* str; } yystype;
#define YYSTYPE yystype
yystype yylval;

//Tokens
#define KWINT 1
#define KWCHAR 2
#define ID 3
#define STRING 4
#define LPAREN 5
#define RPAREN 6
#define LBRACE 7
#define RBRACE 8
#define SEMICOLON 9
#define NUMBER 10
#define COMMA 11
#define PLUS 12
#define EQUALS 13
#endif
%}

/****** Token Patterns ******/
%%
[ \t\n\r]* { /* skipping white space */ }

int         {
            //printf("KWINT: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(KWINT);
            }
            
char\*     {
            //printf("KWCHAR: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(KWCHAR);
            }
            
[a-zA-Z]+ 	{
			//printf("ID: (%s)\n", yytext);
            yylval.str = strdup(yytext);
            return(ID);
          	}
          
\"[^\"]*\"	{
            //printf("STRING: (%s)\n", yytext);
            yylval.str = strdup(yytext);
            return(STRING);
          	}
          
\(        	{
            //printf("LPAREN: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(LPAREN);
          	}
          
\)			{
			//printf("RPAREN: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(RPAREN);
			}

\{			{
			//printf("LBRACE: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(LBRACE);
			}
          
\}			{
			//printf("RBRACE: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(RBRACE);
			}
          
\;			{
			//printf("SEMICOLON: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(SEMICOLON);
			}

[0-9]+		{
			//printf("NUMBER: (%s)\n", yytext);
			//use strtol to convert string to integer
			yylval.ival = strtol(yytext, 0, 10);
			return(NUMBER);
			}

\,			{
			//printf("COMMA: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(COMMA);
			}

\+			{
			////printff("PLUS: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(PLUS);
			}
			
\=          {
            ////printff("EQUALS: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(EQUALS);
            }
%%
/****** Functions (not used when used with parser) *******/

#ifdef LEXONLY
// this can be a main for standalone testing (uses just stdin)
int main(int argc, char **argv) 
{
   do {
      yylex();
   } while (1);
   // while (!feof(stdin)); doesn't work if redirecting a file
   // in because the file is read in and buffered, and eof is
   // true too early, causing lex to stop; rather, use while(1)
   // and then do a hard exit in yywrap(); ugly, but works!
   return 0;
}

int yywrap()
{
   exit(0); // hard exit!
   //return(1);
}

#endif

