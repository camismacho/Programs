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

int numStore[100];
%}  

/* token value data types */
%union { int ival; char* str; }

/* Starting non-terminal */
%start prog
%type <str> functions function statements statement funcall arguments argument expression

/* Token types */
%token <ival> NUMBER COMMA SEMICOLON LPAREN RPAREN LBRACE RBRACE PLUS
%token <str> ID STRING

%%
/******* Rules *******/

prog: functions
     {
     	int index = 0;
     	printf("\t.section\t.rodata\n");
     	
     	while (index < stringStore.arrayIndex) {
     		printf(".LC%d:\n\t.string\t%s\n", index, stringStore.strings[index]);
     		index++;
     	}
     	
     	printf("\t.text\n%s", $1);
     }

functions: function functions
	{
		char *code = (char*) malloc(1000);
		strcat(code, $1);
		strcat(code, $2);
		$$ = code;
	}
	//empty
|	{$$ = "";}

function: ID LPAREN RPAREN LBRACE statements RBRACE
	{
		char *code = (char*) malloc(1000);
		sprintf(code,"\nPrint at function\n\t.globl\t%s\n\t.type\t%s, @function\n%s:\n\tpushq\t%%rbp\n\tmovq\t%%rsp, %%rbp\n%s\n\tmovl\t$%d, %%eax\n\tpopq\t%%rbp\n\tret\n" , $1, $1, $1, $5, stringStore.sid );
		
		$$ = code;
	}
	
statements: statement statements
	{
		char *code = (char*) malloc(1000);
		strcat(code, $1);
		strcat(code, $2);
		$$ = code;
	}
	//empty string
|	{$$ = "";}
	
statement: funcall
	{
		$$ = $1;
	}
	
funcall: ID LPAREN arguments RPAREN SEMICOLON
	{
		char* check = (char*) malloc(1000);
		check = "";
		if (strcmp(check, $3) != 0) {
			stringStore.sid = addString($3);
		}
		char *code = (char*) malloc(1000);
		sprintf(code,"\nPrint at funcall\n\n\tmovl\t$.LC%d, %%edi\n\tcall\t%s\n", stringStore.sid, $1);
		$$ = code;
     }

arguments: argument COMMA arguments
	{
		char* check = (char*) malloc(1000);
		check = "";
		if (strcmp(check, $1) != 0) {
			stringStore.sid = addString($1);
		}
		char *code = (char*) malloc(1000);
		
		$$ = code;
	}
|	argument
	{
		$$ = $1;
	} 
	//empty
|	{$$ = "";}

argument: STRING
	{
		char *code = (char*) malloc(1000);
		sprintf(code, $1);
		$$ = $1;
	}
| expression
	{
		$$ = $1;
	}

expression: NUMBER
	{
		//printf("\nprint at call expression: NUMBER %d\n", $1);
		$$ = $1;		
	}
| expression PLUS expression
	{
		char *code = (char*) malloc(1000);
		//sprintf(code, "\nprint at call | expression PLUS expression\n");
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



