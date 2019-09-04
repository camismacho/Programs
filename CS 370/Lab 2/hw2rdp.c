/*
 * hw2rdp.c
 *
 *  Created on: Sep 3, 2019
 *      Author: jterrazas
 */
#include <stdio.h>
#include <stdlib.h>

char lookahead;
void match(char terminal);
void nontermS();
void nontermA();
void nontermB();

int main (int argc, char **argv) {
	lookahead = getchar();

	do {
		nontermS();
	} while (lookahead != EOF);
}

void match(char terminal) {
	if (lookahead == terminal) {
		lookahead = getchar();
	}
	else {
		printf ("Syntax error! (%c)\n", lookahead);
		exit(0);
	}
}

void nontermS() {
	nontermA();
	nontermB();
	match('\n');
	printf("Matched!\n");
}

void nontermA() {
	switch(lookahead) {
	case 'a':
		match('a');
		nontermA();
		nontermB();
		break;
	default:
		break;
	}
}

void nontermB() {
	switch(lookahead) {
	case 'b':
		match('b');
		nontermA();
		nontermB();
		break;
	default:
		break;
	}
}
