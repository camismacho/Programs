/*
*hw0wc.c
*Joseph Camacho-Terrazas
*CS 370
*/

#include <stdio.h>
#include <stdlib.h>

	int main(int argc, char *argv[]){

		int i;
		FILE *fp;

		char line[300], *s;

		//if first arg is the filename, open it
		fp = fopen(argv[1], "r");
		if (fp){

			printf("fgets %p\n", fgets(line, sizeof(line), fp));

			printf("line  = (%s) size = %lu length = %lu\n", line, sizeof(line), strlen(line));

			fclose(fp);
		}

		//if there is no command line arg, then use stdin
		fp = stdin;

		printf("fgets %p\n", fgets(line, sizeof(line), fp));

		printf("line  = (%s) size = %lu length = %lu\n", line, sizeof(line), strlen(line));


		return 0;


	}

	int processLine(char inputLine){


	}
}
