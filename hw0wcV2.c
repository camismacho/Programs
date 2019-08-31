/*
 * Joseph Camacho-Terrazas
 * Lab 1
 * CS 370
 */

#include <string.h>
#include <stdio.h>

//Function prototypes
int processLine(FILE *file);
int processFile(char *argument[]);

int main(int argc, char *argv[]) {
	//call processFile function to carry out task
	processFile(argv);

return(0);
}//end main

//This function opens the file (if it exists)
int processFile(char *argument[]){
	FILE *fp;//file pointer
	char filename[100];//char array to store filename from stdin

	//try to open file from command line argument
	fp = fopen(argument[1], "r");
	//if successful, print message and proceed with processLine function
	if (fp) {
		printf("File opened successfully!\n");
		//process the lines of file
    	processLine(fp);
    	//close file
    	fclose(fp);
	}

	//if command line arg fails, then get filename from stdin and proceed with processLine
	else {
		printf("File not found in command line argument, please enter file name: ");
		scanf("%s", &filename);
		//use stdin as filename
		fp = fopen(filename, "r");
		//if successful, print message and proceed with processLine function
		if (fp) {
				printf("File opened successfully!\n");
				//process the lines of file
		    	processLine(fp);
		    	//close file
		    	fclose(fp);
		}
		//if all file open attempts fail, print error message and exit
		else {
			printf("File not found or failed to open.\n");
			return -1;
		}
	}
	return 0;
}//end processFile

//This function takes the file and counts the words and number of lines and prints them
int processLine(FILE *file) {
	char line[400];//char array for each line
	char ch;//char for loop
	int lineCount = 0;//num of lines
	int wordCount = 0;//num of words
	char* word;//token for strtok function

	//loop to read through file until EOF
	while ((ch = getc(file)) != EOF) {
		//read each line of file into line array
		fgets(line, sizeof(line), file);
		//increment lineCount
		lineCount++;
		if (ch == '\n') { lineCount++;}		//delimiters used to count words
	    word = strtok(line, " \t\n\r");
	    //loop through the array and count the tokens
	    while (word != NULL) {
	    	wordCount++;
	    	word = strtok(NULL, " \t\n\r");
	    }
	}
	//print number of words and lines
	printf("%d\t%d\n", wordCount, lineCount);
	return 0;
}//end processLine
