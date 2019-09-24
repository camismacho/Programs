/* parser.y
* Joseph Camacho-Terrazas
*/

/****** Header definitions ******/
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// function prototypes from lex
int yyerror(char *s);
int yylex(void);
int addString(char* input);

//declare struct for addString
typedef struct {
	int sid;
	int arrayIndex;
	char* strings[100];
} stringArray;

//initialize stringStore
stringArray stringStore = {0,0};
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
     	int index = 0;
     	printf("\t.section\t.rodata\n");
     	
     	while (index < stringStore.arrayIndex) {
     		printf(".LC%d:\n\t.string\t%s\n", index, stringStore.strings[index]);
     		index++;
     	}
     	
     	printf("\t.text\n%s", $1);
     }

function: ID LPAREN RPAREN LBRACE statements RBRACE
	{
		char *code = (char*) malloc(128);
		sprintf(code,"\t.globl\t%s\n\t.type\t%s, @function\n%s:\n\tpushq\t%%rbp\n\tmovq\t%%rsp, %%rbp\n%s\n\tmovl\t$%d, %%eax\n\tpopq\t%%rbp\n\tret\n" , $1, $1, $1, $5, stringStore.sid );
		
		$$ = code;
	}
	
statements: statement statements
	{
		char *code = (char*) malloc(128);
		strcat(code, $1);
		strcat(code, $2);
		$$ = code;
	}
	//empty string
	| {$$ = "";}
	
statement: funcall
	{
		$$ = $1;
	}
	
funcall: ID LPAREN STRING RPAREN SEMICOLON
	{
		stringStore.sid = addString($3);
		char *code = (char*) malloc(128);
		sprintf(code,"\tmovl\t$.LC%d, %%edi\n\tcall\t%s", stringStore.sid, $1);
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

int addString(char* input) {
	stringStore.strings[stringStore.arrayIndex] = input;
	stringStore.arrayIndex++;
	
	return stringStore.arrayIndex - 1;
}



