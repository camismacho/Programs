%%
/******* Assembly Code Reference for ASTree!!! *******/

prog: declarations functions
     {
        //use symbol table to print .data section
        iter.index = -1;
        printf("\t.data\n");
        while (1) {
            tempSym = iterSymbolTable(symTable, 0, &iter);
            if (tempSym == NULL) {break;}
            printf("%s:\t.word 0\n", tempSym -> name);
        }
        
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
