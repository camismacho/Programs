/*
 * hw2rdp.c
 *
 *  Created on: Sep 3, 2019
 *      Author: jterrazas
 */
#include <stdio.h>
#include <stdlib.h>

//global variable
char lookahead;
//fucntion prototypes
void match(char terminal);
void nontermS();
int nontermA(int count);
void nontermB();

int main (int argc, char **argv) {
	lookahead = getchar();

	do {
		nontermS();
	} while (lookahead != EOF);
}//end main

void match(char terminal) {
	//get next char if terminal is a match to lookahead
	if (lookahead == terminal) {
		lookahead = getchar();
	}
	//print a syntax error if no match
	else {
		printf ("Syntax error! (%c)\n", lookahead);
		exit(0);
	}
}//end match

void nontermS() {
	//counters for # of A's, B's, and postiion for syntax error
	int countA = 0;
	int countB = 0;
	int position = 0;
	//begin searching for grammer
	countA = nontermA(countA);
	nontermB();
	match('\n');
	printf("Matched! # of A's: %d \n", countA);
}//end nontermS

int nontermA(int count) {
	switch(lookahead) {
	//match a, increment countA and keep searching
	case 'a':
		match('a');
		count++;
		nontermA(count);
		nontermB();
		break;
	//default case for empty
	default:
		break;
	}
	return count;
}//end nontermA

void nontermB() {
	switch(lookahead) {
	// match b, inrement countB and keep searching
	case 'b':
		match('b');
		nontermA();
		nontermB();
		break;
	//default case for empty
	default:
		break;
	}
}//end nontermB
