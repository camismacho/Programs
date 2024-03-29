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

int debug = 0;

//Tokens
#define KWINT 1
#define KWCHAR 2
#define KWWHILE 3
#define KWIF 4
#define KWELSE 5
#define ID 6
#define STRING 7
#define LPAREN 8
#define RPAREN 9
#define LBRACE 10
#define RBRACE 11
#define SEMICOLON 12
#define NUMBER 13
#define COMMA 14
#define ADDOP 15
#define EQUALS 16
#define RELOP 17
#endif
%}

/****** Token Patterns ******/
%%
[ \t\n\r]* { /* skipping white space */ }

int         {
            //if (debug) printf("KWINT: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(KWINT);
            }
            
char\*     {
            //if (debug) printf("KWCHAR: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(KWCHAR);
            }

if         {
            //if (debug) printf("KWIF: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(KWIF);
            }
            
else         {
            //if (debug) printf("KWELSE: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(KWELSE);
            }
            
while         {
            //if (debug) printf("KWWHILE: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(KWWHILE);
            }
            
[a-zA-Z]+ 	{
			//if (debug) printf("ID: (%s)\n", yytext);
            yylval.str = strdup(yytext);
            return(ID);
          	}
          
\"[^\"]*\"	{
            //if (debug) printf("STRING: (%s)\n", yytext);
            yylval.str = strdup(yytext);
            return(STRING);
          	}
          
\(        	{
            //if (debug) printf("LPAREN: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(LPAREN);
          	}
          
\)			{
			//if (debug) printf("RPAREN: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(RPAREN);
			}

\{			{
			//if (debug) printf("LBRACE: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(LBRACE);
			}
          
\}			{
			//if (debug) printf("RBRACE: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(RBRACE);
			}
          
\;			{
			//if (debug) printf("SEMICOLON: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(SEMICOLON);
			}

[0-9]+		{
			//if (debug) printf("NUMBER: (%s)\n", yytext);
			//use strtol to convert string to integer
			yylval.ival = strtol(yytext, 0, 10);
			return(NUMBER);
			}

\,			{
			//if (debug) printf("COMMA: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(COMMA);
			}

\+			{
			//if (debug) printf("ADDOP: PLUS: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(ADDOP);
			}

\-			{
			//if (debug) printf("ADDOP: MINUS: (%s)\n", yytext);
			yylval.ival = yytext[0];
			return(ADDOP);
			}
			
\=          {
            //if (debug) printf("EQUALS: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(EQUALS);
            }
            
[=!]=       {
            //if (debug) printf("RELOP: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(RELOP);
            }

[><]        {
            //if (debug) printf("RELOP: (%s)\n", yytext);
            yylval.ival = yytext[0];
            return(RELOP);
            }

%%
/****** Functions (not used when used with parser) *******/

#ifdef LEXONLY
// this can be a main for standalone testing (uses just stdin)
int main(int argc, char **argv) 
{
    if (strcmp(argv[1], "-l") == 0){
        debug = 1;
    }
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

