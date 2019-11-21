/* parser.y
* Joseph Camacho-Terrazas
*/

/****** Header definitions ******/
%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "symtable.h"
#include "astree.h"
// function prototypes from lex
int yyerror(char *s);
int yylex(void);
//global variables for stack offset and param position
int localOffset = -4;
int paramPosition = 1;
//debug switch
int debug = 0;
//astree
ASTNode* tree;
//string struct
stringArray stringStore = {0,0};

//global variables for SymbolTable
Symbol** symTable;
SymbolTableIter iter;
Symbol* tempSym;
Symbol* findSym;

%}  

/* token value data types */
%union { 
    int ival;
    char* str; 
    struct astnode_s * astnode;
}

/* Starting non-terminal */
%start prog
// nonterminals return ASTnode pointer
%type <astnode> prog functions function statements statement funcall assignment arguments argument expression declarations vardecl parameters whileloop ifthen ifthenelse relexpr localdecls

/* Token types - either int or string*/
%token <ival> NUMBER COMMA SEMICOLON LPAREN RPAREN LBRACE RBRACE LBRACKET RBRACKET EQUALS KWINT KWCHAR KWIF KWELSE KWWHILE ADDOP RELOP
%token <str> ID STRING

%%
/******* Rules *******/

prog: declarations functions
     {
        if (debug) fprintf(stderr, "***Program***\n");
        tree = newASTNode(AST_PROGRAM);
		tree -> child[0] = $1;
		tree -> child[1] = $2;
     }
     
declarations: vardecl SEMICOLON declarations
    {
        addSymbol(symTable, $1 -> strval, 0, $1 -> valtype, $1 -> ival, localOffset);   //comp 6
        $1 -> next = $3;
        $$ = $1;
    }
    //empty string
|       {$$ = 0;}

vardecl: KWINT ID
    {
        if (debug) fprintf(stderr, "+++Declaration Int (%s)+++\n", $2);
        $$ = newASTNode(AST_VARDECL);
        $$ -> strval = $2;
        $$ -> valtype = T_INT;
        //$$ -> ival = 0;     //comp 6
    }
        
| KWCHAR ID
    {
        if (debug) fprintf(stderr, "+++Declaration String (%s)+++\n", $2);
        $$ = newASTNode(AST_VARDECL);
        $$ -> strval = $2;
        $$ -> valtype = T_STRING;
        $$ -> ival = 0;     //comp 6
    }
    
| KWINT ID LBRACKET NUMBER RBRACKET     //comp 6
    {
        $$ = newASTNode(AST_VARDECL);
        $$ -> strval = $2;
        $$ -> valtype = T_INTARR;
        $$ -> ival = $4;
    }

localdecls: vardecl SEMICOLON localdecls //comp 6
    {
        addSymbol(symTable, $1 -> strval, 1, $1 -> valtype, 0, localOffset);
        $1 -> ival = localOffset;
        localOffset += -4;
        $1 -> next = $3;
    }
    //empty
|       {$$ = 0;}

functions: function functions
	{
		//if (debug) fprintf(stderr, "Functions\n");
		$1 -> next = $2;
		$$ = $1;
	}
	//empty
|	{$$ = 0;}

function: ID LPAREN parameters RPAREN LBRACE localdecls statements RBRACE
	{
		if (debug) fprintf(stderr, "~~~Function Def (%s)~~~\n\n", $1);
		$$ = newASTNode(AST_FUNCTION);
		$$ -> valtype = T_STRING;
		$$ -> strval = $1;
		$$ -> child[0] = $3;
		$$ -> child[1] = $7;
		$$ -> child[2] = $6;      //comp 6
		localOffset = -4;         //comp 6
		paramPosition = 1;        //comp 6
		delScopeLevel(symTable, 1); //remove local and param decls - comp 6
	}
	
statements: statement statements
	{
        //if (debug) fprintf(stderr, "\t---Statements---\n");
        $1 -> next = $2;
		$$ = $1;
	}
	//empty string
|	{$$ = 0;}
	
statement: funcall SEMICOLON
	{
		$$ = $1;
	}
	
|   assignment SEMICOLON
    {
        $$ = $1;
    }
    
|   whileloop
    {
        $$ = $1;
    }
    
|   ifthen
    {
        $$ = $1;
    }

| ifthenelse
    {
        $$ = $1;
    }

assignment: ID EQUALS expression
    {
        if (debug) fprintf(stderr, "\t^Assignment (%s)^\n", $1);
        $$ = newASTNode(AST_ASSIGNMENT);
        $$ -> strval = $1;
        $$ -> child[0] = $3;
        Symbol* sym = findSymbol(symTable, $1);                         //comp 6
        if (!sym) fprintf(stderr, "Symbol (%s) not defined!\n", $1);    //comp 6
        $$ -> ival = sym  -> offset;
        //$$ -> ival = localOffset;
    }
    
| ID LBRACKET expression RBRACKET EQUALS expression     //comp 6
    {
        $$ = newASTNode(AST_ASSIGNMENT);
        $$ -> strval = $1;
        $$ -> child[0] = $6;
        $$ -> child[1] = $3; 
    }
    
funcall: ID LPAREN arguments RPAREN
	{
        if (debug) fprintf(stderr, "^Funcall (%s)^\n", $1);
        $$ = newASTNode(AST_FUNCALL);
        $$ -> strval = $1;
        $$ -> child[0] = $3;
    }
    
whileloop: KWWHILE LPAREN relexpr RPAREN LBRACE statements RBRACE
    {
        $$ = newASTNode(AST_WHILE);
        $$ -> child[0] = $3;
        $$ -> child[1] = $6;
    }
    
ifthen: KWIF LPAREN relexpr RPAREN LBRACE statements RBRACE
    {
        $$ = newASTNode(AST_IFTHEN);
        $$ -> child[0] = $3;
        $$ -> child[1] = $6;
        $$ -> child[2] = 0;
    }
    
ifthenelse: KWIF LPAREN relexpr RPAREN LBRACE statements RBRACE KWELSE LBRACE statements RBRACE
    {
        $$ = newASTNode(AST_IFTHEN);
        $$ -> child[0] = $3;
        $$ -> child[1] = $6;
        $$ -> child[2] = $10;
    }
    
arguments: argument COMMA arguments
	{
        //if (debug) fprintf(stderr, "\tArguments\n");
		$1 -> next = $3;
		$$ = $1;
	}
|	argument
	{
		$$ = $1;
	} 
	//empty
|	{$$ = 0;}

argument: expression
	{
        if (debug) fprintf(stderr, "\t^Argument^\n");
        $$ = newASTNode(AST_ARGUMENT);
		$$ -> child[0] = $1;
	}

expression: expression ADDOP expression
	{
        //if (debug) fprintf(stderr, "\t^Expression plus Expression^\n");
        $$ = newASTNode(AST_EXPRESSION);
        $$ -> child[0] = $1;
        $$ -> ival = $2;
        $$ -> child[1] = $3;
	}
| ID LBRACKET expression RBRACKET   //comp 6
    {
        $$ = newASTNode(AST_VARREF);
        $$ -> child[0] = $3;
        $$ -> strval = $1;
        $$ -> valtype = T_INT;
    }
|	NUMBER
	{
        if (debug) fprintf(stderr, "\t---Number (%d)---\n", $1);
		$$ = newASTNode(AST_CONSTANT);
		$$ -> ival = $1;
		$$ -> valtype = T_INT;
	}
|   ID
    {
        if (debug) fprintf(stderr, "\t---ID (%s)---\n", $1);
        Symbol* sym = findSymbol(symTable, $1);                         //comp 6
        if (!sym) fprintf(stderr, "Symbol (%s) not defined!\n", $1);    //comp 6
        $$ = newASTNode(AST_VARREF);
        $$ -> strval = $1;
        $$ -> ival = sym  -> offset; //need to ask about this              -comp 6
        $$ -> valtype = T_STRING;
    }
|   STRING
	{
        if (debug) fprintf(stderr, "\t---String (%s)---\n", $1);
        $$ = newASTNode(AST_CONSTANT);
        $$ -> strval = $1;
        $$ -> valtype = T_STRING;
        stringStore.sid = addString($1);
        $$ -> ival = stringStore.sid;
        //use ival to keep track of the strings so they print in correct order
	}
	
relexpr: expression RELOP expression
    {
        $$ = newASTNode(AST_RELEXPR);
        $$ -> ival = $2;
        $$ -> child[0] = $1;
        $$ -> child[1] = $3;
    }
    
parameters: vardecl COMMA parameters //comp 6
    {
        addSymbol(symTable, $1 -> strval, 1, $1 -> valtype, 0, paramPosition);
        $1 -> ival = paramPosition;
        paramPosition++;
        $1 -> next = $3;
        $$ = $1;
    }
| vardecl       //comp 6
    {
        addSymbol(symTable, $1 -> strval, 1, $1 -> valtype, 0, paramPosition);
        $1 -> ival = paramPosition;
        paramPosition++;
        $$ = $1;
    }
//empty
|       {$$ = 0;}
%%

/******* Functions *******/
extern FILE *yyin; // from lex

int main(int argc, char **argv)
{ 
    symTable = newSymbolTable();
    if (argc == 1) {
        fprintf(stderr, "Please enter the .c file name: ");
        char fileName[100];
        char *newLine;
        
        fgets(fileName, sizeof(fileName), stdin);
        //check for newline and replace it with null terminator
        newLine = strchr(fileName, '\n');
        if (newLine)
            *newLine = '\0';
            
        //check for valid .c file
        if(isCFile(fileName) == 0) {
            //check if file opens
            yyin = fopen(fileName, "r");
            if (!yyin) {
                fprintf(stderr, "Error: unable to open file (%s)\n", fileName);
                return (-1);
            }
        
            //parse and print normally to stdout
            yyparse();
            genCodeFromASTree(tree, 0, stdout);
            return(0);
        }
        //if it's not a .c file, error
        else {
            fprintf(stderr, "%s is not a valid .c file!\n", fileName);
            return(-1);
        }
    }

    if (argc==2) {
        //if the file is a .c then parse it
        if (isCFile(argv[1]) == 0) {
            //try to open, if not, error
            yyin = fopen(argv[1],"r");
        
            if (!yyin) {
                fprintf(stderr, "Error: unable to open file (%s)\n",argv[1]);
                return(1);
            }
            //output into a .s file with the same name as input
            char fileName[100];
            char* suffix = ".s";
            //use strncpy to omit the ".c"
            strncpy(fileName, argv[1], strlen(argv[1]) - 2);
            strcat(fileName, suffix);
            //open file and parse
            FILE* output = fopen(fileName, "w");
            if (!output) {
                fprintf(stderr, "Error: unable to open file (%s)\n", fileName);
                return(-1);
            }
            yyparse();      
            genCodeFromASTree(tree, 0, output);
            return(0);
        }
        //if it's not a .c file, error
        else {
            fprintf(stderr, "%s is not a valid .c file!\n", argv[1]);
            return(-1);
        }
    }
   
    if (argc == 3) {
        //if the file is a .c then parse it
        if (isCFile(argv[1]) == 0) {
            //try to open, if not, error
            yyin = fopen(argv[1],"r");
            if (!yyin) {
                fprintf(stderr, "Error: unable to open file (%s)\n",argv[1]);
                return(1);
            }
            
            //-d flag prints the tree only with no .s file
            if (strcmp(argv[2], "-d") == 0){
                yyparse();
                printASTree(tree, 0, stdout);
                return(0);
            }
            
            //-t flag still outputs to .s, but also prints debug info from parser
            if (strcmp(argv[2], "-t") == 0) {
                //enable debug output
                debug = 1;
                
                //output into a test file with the same name as input
                char fileName[100];
                char* suffix = ".s";
                //create string minus ".c"
                strncpy(fileName, argv[1], strlen(argv[1]) - 2);
                //add ".s" to the filename
                strcat(fileName, suffix);
                //create the new file and parse
                FILE* output = fopen(fileName, "w");
                if (!output) {
                    fprintf(stderr, "Error: unable to open file (%s)\n", fileName);
                    return(-1);
                }
                
                //parse and output
                yyparse();
                genCodeFromASTree(tree, 0, output);
                return(0);
            }
            //error if any other flag is entered besides -d or -t
            else {
                fprintf(stderr, "Invalid flag! argv[2]: %s\n", argv[2]);
                return(-1);
                }
        }
        //if it's not a .c file, error
        else {
            fprintf(stderr, "%s is not a valid .c file!\n", argv[1]);
            return(-1);
        }
    return(0);
    }
    
    //return an error if there is more than one flag (3 args)
    if (argc >= 4) {
        fprintf(stderr, "Too many flags in command!\nThis program can only handle one flag!\n");
        int i = 0;
        //print out all the flags
        while (i < argc) {
            fprintf(stderr, "arg[%d]: %s\n", i, argv[i]);
            i++;
        }    
        return (-1);
    }
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

//this function will check if the file has .c as a suffix
int isCFile(char* file) {
    //if the filename or suffix is invalid
    char* suffix = ".c";
    if (!file || !suffix) {
        fprintf(stderr, "%s Invalid file or suffix %s!\n", file, suffix);
        return(-1);
    }
    //create length variables of the file and suffix
    size_t fileLength = strlen(file);
    size_t suffixLength = strlen(suffix);
    //if the suffix length is invalid return -1
    if (suffixLength > fileLength) 
        return (-1);
    //return the value strncmp returns after it checks if the suffixes match
    return strncmp(file + fileLength - suffixLength, suffix, suffixLength);
}

