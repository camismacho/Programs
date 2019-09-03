/*
 * hw2rdp.c
 *
 *  Created on: Sep 3, 2019
 *      Author: jterrazas
 */

char lookahead;
void match();
void nontermS();
void nontermA();
void nontermB();

int main (int argc, char **argv) {
	lookahead = getchar();

	do {
		nontermS();
	} while (lookahead != EOF);
}

void match(char c) {
	if (lookahead == c) {
		lookahead == getchar();
	}
	else {
		printf ("Error");
	}

}

void nontermS() {
	nontermA();
	nontermB();
}

void nontermA() {
	if (lookahead  == 'a') {
		match('a');
		nontermB();
	}
}

void nontermB() {
	if (lookahead == 'b') {
		match('b');
	}

}
