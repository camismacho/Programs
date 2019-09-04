/*
 * hw2rdp.c
 *
 *  Created on: Sep 3, 2019
 *      Author: jterrazas
 */
#include <stdio.h>
#include <stdlib.h>

int lookahead;
void match(int terminal);
void nontermS();
void nontermBNum();

int main (int argc, char **argv) {
	lookahead = getchar();

	do {
		nontermS();
	} while (lookahead != EOF);
}

void match(int terminal) {
	if (lookahead == terminal) {
		lookahead = getchar();
	}
	else {
		printf("Syntax Error! (%c)\n", lookahead);
		exit(0);
	}
}

void nontermS() {
	nontermBNum();
	match('\n');
	printf("Matched!\n");
}

void nontermBNum() {
	switch(lookahead) {
	case 0:
		match(0);
		nontermBNum();
		break;
	case 1:
		match(1);
		nontermBNum();
		break;
	default:
		break;
	}
}


