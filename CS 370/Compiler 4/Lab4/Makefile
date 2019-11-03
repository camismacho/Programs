#
# Makefile
#

# flags and defs for built-in compiler rules

CFLAGS = -I. -Wall -Wno-unused-function
CC = gcc

# default rule to build the parser
all: test.s
#all: run

y.tab.c: parser.y
	yacc -d parser.y

# lex "-d" flag turns on debugging output

lex.yy.c: scanner.l y.tab.c
	lex scanner.l
	
	
# yacc "-d" flag creates y.tab.h header

symtable.o: symtable.c symtable.h
	gcc -c symtable.c

astree.o: astree.h astree.c
	gcc -c astree.c

# ltest is a standalone lexer (scanner)
# build this by doing "make ltest"
# -ll for compiling lexer as standalone

ltest: scanner.l
	lex scanner.l
	gcc -DLEXONLY lex.yy.c -o ltest -ll
# ptest executable needs scanner and parser object files

ptest: lex.yy.o y.tab.o symtable.o astree.o
	gcc -o ptest y.tab.o lex.yy.o symtable.o astree.o

test.s: ptest helloworld.c
	./ptest helloworld.c > test.s
	cat test.s

#finale: test.s
#	gcc test.s -o finale
	
#run: finale
#	./finale
# clean the directory for a pure rebuild (do "make clean")
clean: 
	rm -f lex.yy.c a.out y.tab.c y.tab.h *.o ptest ltest

