/* parser.y
* Joseph Camacho-Terrazas
*/

/****** Header definitions ******/
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "symtable.h"
// function prototypes from lex
int yyerror(char *s);
int yylex(void);
int addString(char* input);
int addNum(int input);
int argNum = 0;
char *argRegStr[] = {"%rdi","%rsi","%rdx","%rcx","%r8","%r9"};

//declare struct for addString
typedef struct {
	int sid;
	int arrayIndex;
	char* strings[100];
} stringArray;

//initialize stringStore
stringArray stringStore = {0,0};

//global variables needed for symbol table
Symbol** symTable;
SymbolTableIter iter;
Symbol* tempSym;
Symbol* findSym;
%}  

/* token value data types */
%union { int ival; char* str; }

/* Starting non-terminal */
%start prog
%type <str> functions function statements statement funcall assignment arguments argument expression declarations vardecl parameters

/* Token types */
%token <ival> NUMBER COMMA SEMICOLON LPAREN RPAREN LBRACE RBRACE PLUS EQUALS KWINT KWCHAR
%token <str> ID STRING

%%
/******* Rules *******/

prog: declarations functions
     {
        //use symbol table to print .data section
        printf("\t.data\n");
        while (1) {
            tempSym = iterSymbolTable(symTable, 0, &iter);
            if (tempSym == NULL) {break;}
            printf("%s:\t.word 0\n", tempSym -> name);
        }
        /*while (tempSym != NULL) {
            tempSym = iterSymbolTable(symTable, 0, &iter);
            printf("%s:\t.word 0\n", tempSym -> name);
        }*/
        
        //iterate through stringStore to print .rodata section
     	int index = 0;
     	printf("\t.section\t.rodata\n");
     	while (index < stringStore.arrayIndex) {
     		printf(".LC%d:\n\t.string\t%s\n", index, stringStore.strings[index]);
     		index++;
     	}
     	printf("\t.text\n%s", $2);
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

function: ID LPAREN parameters RPAREN LBRACE statements RBRACE
	{
		char *code = (char*) malloc(1000);
		sprintf(code,"\t.globl\t%s\n\t.type\t%s, @function\n%s:\n\tpushq\t%%rbp\n\tmovq\t%%rsp, %%rbp\n%s\n\tpopq\t%%rbp\n\tmovl\t$0, %%eax\n\tret\n" , $1, $1, $1, $6);
		$$ = code;
	}
	
statements: statement SEMICOLON statements
	{
		char *code = (char*) malloc(1000);
		strcat(code, $1);
		strcat(code, $3);
		$$ = code;
	}
	//empty string
|	{$$ = "";}
	
statement: funcall
	{
		$$ = $1;
	}
	
|   assignment
    {
        $$ = $1;
    }
	
funcall: ID LPAREN arguments RPAREN
	{
		char *code = (char*) malloc(1000);
		sprintf(code,"%s\tmovl\t$0, %%eax\n\tcall\t%s\n", $3, $1);
		argNum = 0;
		$$ = code;
     }

assignment: ID EQUALS expression
    {
        findSym = findSymbol(symTable, $1);
        char* code = (char*) malloc(1000);
        sprintf(code, "%s\tmovl\t%%eax, %s\n\tmovl\t%s, %%eax\n\tmovl\t%%eax, %%esi\t\n", $3, findSym -> name, findSym -> name);
        $$ = code;
    }
    
arguments: argument COMMA arguments
	{
		char *code = (char*) malloc(1000);
		strcat(code, $1);
		strcat(code, $3);
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
        stringStore.sid = addString($1);
        char *code = (char*) malloc(1000);
        sprintf(code, "\tmovq\t$.LC%d, %s\n", stringStore.sid, argRegStr[argNum]);
        argNum++;
        
		$$ = code;
	}
|   expression
	{
		$$ = $1;
	}

expression: expression PLUS expression
	{
		char *code = (char*) malloc(1000);
		sprintf(code, "%s\tpushq\t%%rdx\n%s\tpopq\t%%rcx\n\taddl\t%%ecx, %%edx\n", $1, $3);
		$$ = code;
	}
|	NUMBER
	{
		char *code = (char*) malloc(1000);
		sprintf(code, "\tmovl\t$%d, %%edx\n", $1);
		$$ = code;
	}
|   ID
    {
        char* code = (char*) malloc(1000);
        sprintf(code, "\tmovl\t%s, %%edx\n", $1);
        $$ = code;
    }
    
declarations: vardecl SEMICOLON declarations
    {
         $$ = "";
    }
    //empty string
|       {$$ = "";}

vardecl: KWINT ID
    {
        addSymbol(symTable, $2, 0, T_INT);
        $$ = "";
    }
        
| KWCHAR ID
    {
        addSymbol(symTable, $2, 0, T_STRING);
        $$ = "";
    }

parameters: vardecl COMMA parameters
        {$$ = "";}
| vardecl
        {$$ = "";}

|       {$$ = "";}
%%

/******* Functions *******/
extern FILE *yyin; // from lex

int main(int argc, char **argv)
{
    //probably a good place to initialize a newSymbolTable
    symTable = newSymbolTable();
    iter.index = -1;
   if (argc==2) {
      yyin = fopen(argv[1],"r");
      if (!yyin) {
         printf("Error: unable to open file (%s)\n",argv[1]);
         return(1);
      }
      //Add symboltable before grammar starts parsing
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



