/*****
* Gabriella Garcia
* CS 370 - Lab 5
*****/

%{

#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include "symtable.h"
#include "astree.h"
/***** Function Prototypes from Lex *****/
int yyerror(char *s);
int yylex(void);
int addString(char* stringy);
// int argNum = 0;
// char *argRegStr[] = {"%rdi","%rsi","%rdx","%rcx","r8","r9"};	
int arrSize;
int arrInd = 0;
char* strings[100];
ASTNode* program;
%} 	
/**** Token Val Data Types *****/
%union {
	int ival; 
	char* str;
	struct astnode_s * astnode;
}

/***** Declare our starting non terminal *****/
%start Prog
%type <astnode> functions function statements statement funcall arguments 
%type <astnode> argument expression parameters declarations assignment 
%type <astnode> varDecl Prog

/***** Token Types *****/
%token<str> ID STRING
%token<ival> LPAREN RPAREN LBRACE RBRACE SEMICOLON NUMBER COMMA
%token<ival> PLUS EQUALS KWINT KWCHAR

%%

/***** Compiler Rules *****/
	// !!!!!!!!!!!!!!!!!!!!!!
	Prog: declarations functions
		{
		$$ = newASTNode(AST_PROGRAM);
		$$->child[0] = $1;
		$$->child[1] = $2;
		program = $$;

		}
	functions:/**empty: Return empty**/
		{
			$$ = 0;
		}
		| function functions
		{
			$1->next = $2;
			$$ = $1;
		}
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!
	function: ID LPAREN parameters RPAREN RBRACE statements LBRACE
		  {
			$$ = newASTNode(AST_FUNCTION);
			$$->valtype = T_STRING;
			$$->strval = $1;
			$$->child[0] = $3;
			$$->child[1] = $6;
		  }

	statements: /**empty: Return an empty string **/
		{ 
			$$ = 0;
		}
			
		| statement SEMICOLON statements
		{
			$1->next = $3;
			$$ = $1;
		}


		/***** Statement is just passing along the statement from Function Call *****/
	statement: funcall
		{
			
			$$ = $1;
		}
		| assignment
		{	
			$$ = $1;	
		}

	funcall: ID LPAREN arguments RPAREN
		{
		$$ = newASTNode(AST_FUNCALL);
		$$->strval = $1;
		$$->child[0] = $3;
		}
	
	assignment: ID EQUALS expression
		{	
		$$ = newASTNode(AST_ASSIGNMENT);
		$$->strval = $1;
		$$->child[0] = $3;
		
		}
	
	arguments: argument COMMA arguments
		{
		$1->next = $3;
		$$ = $1;
		}

		| argument
		
		{	 
		$$ = $1;
		}

		| /**empty**/
		{
		$$ = 0;
		}

	argument: expression
		{
			$$= newASTNode(AST_ARGUMENT);
			$$->child[0] = $1;
		}

	expression: expression PLUS expression
		{
			$$ = newASTNode(AST_EXPRESSION);
			$$->child[0] = $1;
			$$->child[1] = $3;
		}

	| NUMBER
		{
			$$=newASTNode(AST_CONSTANT);
			$$->ival = $1;
			$$->valtype = T_INT;
			
		}
	| ID // This is where the x's or whatever go from the equation. Another move?
		{	
			$$=newASTNode(AST_VARREF);
			$$->strval = $1;
		}
	| STRING
		{
			
			$$=newASTNode(AST_CONSTANT);
			$$->strval = $1;
			$$->valtype = T_STRING;
			arrSize = addString($1);
			
		}
	declarations: /** empty **/
		{	
			$$ = 0;
		}
		| varDecl SEMICOLON declarations
		{	
			$1->next = $3;
			$$ = $1;	
		}
	varDecl: KWINT ID
		{
			$$ = newASTNode(AST_VARDECL);
			$$->strval = $2;
			
		}
		| KWCHAR ID
		{		
			$$ = newASTNode(AST_VARDECL);
			$$->strval = $2;
			
		}
	parameters:
		{
			$$ = 0;
		}
		| varDecl
		{
			$$ = 0;
		}
		| varDecl COMMA parameters
		{
			$$ = 0;
		}
		;
%%
/** AddString will insert the strings from the string ID into an array and return its index **/
int addString(char* stringy){
	strings[arrInd] = stringy;
	arrInd++;
	return arrInd-1;
}
/** DLines helps out fill out the top of our assembly function by ensuring that
   * that if we have multiple puts functions, we will print multiple string lines
   * and the number after LC will be correct.
**/

	
/***** Functions *****/
extern FILE *yyin; // From Lex
int main(int argc, char **argv){
   if (argc==2) {
     	 yyin = fopen(argv[1],"r");
      	if (!yyin) {
           printf("Error: unable to open file (%s)\n",argv[1]);
           return(1);
      	}
	yyparse();
	genCodeFromASTree(program, 0, stdout);
   }
   return(0);
} // End main	
int yyerror(char *s)
	{
   		fprintf(stderr, "%s\n",s);
   		return 0;
	}
	int yywrap()
	{
   	return(1);
	}
