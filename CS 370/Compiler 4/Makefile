#
# Make file for simple scanner and parser example
#

# flags and defs for built-in compiler rules
CFLAGS = -I. -Wall -Wno-unused-function
CC = gcc

# default rule build the parser
all: run

symtable.o: symtable.c symtable.h
	gcc -c symtable.c

# yacc "-d" flag creates y.tab.h header
y.tab.c: parser.y
	yacc -d -v parser.y

# lex "-d" flag turns on debugging output
lex.yy.c: scanner.l y.tab.c
	lex scanner.l

# compiler executable needs scanner and parser object files
compiler: lex.yy.o y.tab.o symtable.o
	gcc -o compiler y.tab.o lex.yy.o symtable.o

# create a test.s file from executable
test.s: compiler testComp3.c
	./compiler testComp3.c > test.s

# compile assembly file into final executable finalOut
finalOut: test.s
	gcc test.s -o finalOut

# run final executable
run: finalOut
	./finalOut

# ltest is a standalone lexer (scanner)
# build this by doing "make ltest"
# -ll for compiling lexer as standalone
ltest: scanner.l
	lex scanner.l
	gcc -DLEXONLY lex.yy.c -o ltest -lfl

# clean the directory for a pure rebuild (do "make clean")
clean: 
	rm -f lex.yy.c a.out y.tab.c y.tab.h *.o compiler finalOut ltest y.output test.s

