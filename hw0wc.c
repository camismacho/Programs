/*
*hw0wc.c
*Joseph Camacho-Terrazas
*CS 370
*/

#include <stdio.h>
#include <stdlib.h>

	int main(int argc, char *argv[]){

		FILE *fp;

		//char line[300];

		//if first arg is the filename, open it
		fp = fopen(argv[1], "r");
		if (fp){

			int words = 0;
					int lines = 0;
					char letters[300];

					fgets(letters, sizeof(letters), fp);

					char* token = strtok(letters, " \n\t\r");

					while (token != NULL){
						printf("\n%s\n", token);
						words++;
						char* token = strtok(NULL, " \n\t\r");
					}


					printf("line  = (%s) size = %lu length = %lu\n", letters, sizeof(letters), strlen(letters));

			fclose(fp);
		}

		//if there is no command line arg, then use stdin
		fp = stdin;

		//processLine(fp);


	return 0;

	}

	/*int processLine(FILE fileName){

		int words = 0;
		int lines = 0;
		char letters[300];

		fgets(letters, sizeof(letters), fileName);

		char* token = strtok(letters, " \n\t\r");

		while (token != NULL){
			printf("\n%s\n", token);
			words++;
			char* token = strtok(NULL, " \n\t\r");
		}


		printf("line  = (%s) size = %lu length = %lu\n", letters, sizeof(letters), strlen(letters));

		return 0;
	}*/

