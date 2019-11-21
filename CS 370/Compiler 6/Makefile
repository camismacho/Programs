#
# Make file for simple scanner and parser example
#

# flags and defs for built-in compiler rules
CFLAGS = -I. -Wall -Wno-unused-function
CC = gcc

# default rule build and run the parser
# run "make finalOut" to only build the parser
all: finalOut

symtable.o: symtable.c symtable.h
	gcc -c symtable.c

astree.o: astree.c astree.h symtable.h
	gcc -c astree.c
# yacc "-d" flag creates y.tab.h header
y.tab.c: parser.y
	yacc -d -v parser.y

# lex "-d" flag turns on debugging output
lex.yy.c: scanner.l y.tab.c
	lex scanner.l

# compiler executable needs scanner and parser object files
compiler: lex.yy.o y.tab.o symtable.o astree.o
	gcc -o compiler y.tab.o lex.yy.o symtable.o astree.o

# create a test.s file from executable
testComp4.s: compiler testComp4.c
	./compiler testComp4.c

# compile assembly file into final executable finalOut
finalOut: testComp4.s
	gcc testComp4.s -o finalOut
	./finalOut

# run final executable
rundebug: finalOut
	@echo "";
	@echo "	**********>Running ./finalOut<**********"
	@echo "";
	./finalOut
	@echo "";
	@echo "	(Deleting generated .s files)"
	rm -f *.s
	@echo "";
	@echo "	**********>Running with filename argument<**********"
	@echo "";
	./compiler testComp4.c
	ls
	@echo "";
	@echo "	(Deleting generated .s files)"
	rm -f *.s
	@echo "";
	@echo "	**********>Running with -t flag<**********"
	@echo "";
	./compiler testComp4.c -t
	@echo "";
	@echo "	(Deleting generated .s files)"
	rm -f *.s
	@echo "";
	@echo "	**********>Running with -d flag<**********"
	@echo "";
	./compiler testComp4.c -d
	@echo "";
	@echo "	**********>Running with stdin input<**********"
	@echo "";
	./compiler

# ltest is a standalone lexer (scanner)
# build this by doing "make ltest"
# -ll for compiling lexer as standalone
ltest: scanner.l
	lex scanner.l
	gcc -DLEXONLY lex.yy.c -o ltest -lfl

# clean the directory for a pure rebuild (do "make clean")
clean: 
	rm -f lex.yy.c a.out y.tab.c y.tab.h *.o compiler finalOut ltest y.output *.s
	clear
	
cleanandtest:
	make clean
	make
	
assembly:
	make clean
	make
	cat testComp4.s

