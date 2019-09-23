/****
* Lex scanner for simple example
****/

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
#define NUMBER 1
#define PLUS   2
#define OTHER  3
#endif
%}

/****** Token Patterns ******/
%%
[ \t\n\r]* { /* skipping white space */ }
[0-9]+   {
            printf("number: (%s)\n", yytext);
            yylval.ival = strtol(yytext,0,10);
            return(NUMBER);
         }
\+       {
            printf("plus\n");
            yylval.ival = yytext[0];
            return(PLUS);
         }
[^0-9+ \t\n\r]+  {
            printf("other: (%s)\n", yytext);
            // creating a copy of the string is important, but
            // in this small program we are leaking this memory,
            // we don't clean it up; needs fixed in bigger program!
            yylval.str = strdup(yytext);
            return(OTHER);
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

