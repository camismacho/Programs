/*
 * hw2rdp.c
 * Created on: Sep 3, 2019
 * Author: Joseph Camacho-Terrazas
 */
#include <stdio.h>
#include <stdlib.h>

//global variable
char lookahead;

//define struct type to count A's and B's and monitor position
struct countAB {
	int countA, countB, position;
};

typedef struct countAB Struct;

//fucntion prototypes
void match(char terminal, Struct counter);
void nontermS();
Struct nontermA(Struct counter);
Struct nontermB(Struct counter);

int main (int argc, char **argv) {
	lookahead = getchar();
	//begin grammer matching
	do {
		nontermS();
	} while (lookahead != EOF);
}//end main

void match(char terminal, Struct counter) {
	//get next char if terminal is a match to lookahead
	if (lookahead == terminal) {
		lookahead = getchar();
	}
	//print a syntax error with position if no match and exit
	else {
		printf ("Syntax error! (%c) at position %d\n", lookahead, counter.position);
		exit(0);
	}
}//end match

void nontermS() {
	//counters for # of A's, B's, and postiion for syntax error
	Struct count;
	//initialize counters and position
	count.countA = 0;
	count.countB = 0;
	count.position = 1;
	//begin searching for grammar
	count = nontermA(count);
	count = nontermB(count);
	match('\n', count);
	//print out message upon successful match
	printf("Matched! # of A's: %d  # of B's: %d \n", count.countA, count.countB);
	//reset A and B counters for next line
	count.countA = 0;
	count.countB = 0;
}//end nontermS

Struct nontermA(Struct counter) {
	switch(lookahead) {
	//match a, increment countA and position and keep searching
	case 'a':
		match('a', counter);
		counter.countA++;
		counter.position++;
		counter = nontermA(counter);
		counter = nontermB(counter);
		break;
	//default case for empty
	default:
		break;
	}
	return counter;
}//end nontermA

Struct nontermB(Struct counter) {
	switch(lookahead) {
	//match b, inrement countB and position and keep searching
	case 'b':
		match('b', counter);
		counter.countB++;
		counter.position++;
		counter = nontermA(counter);
		counter = nontermB(counter);
		break;
	//default case for empty
	default:
		break;
	}
	return counter;
}//end nontermB
