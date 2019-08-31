//
// Example program that accesses command line arguments and 
// demonstrates various size issues of variables and data
// - copyright (c) 2019 Jonathan Cook
//
#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
   int i;
   FILE *fp;
   char line[512],*s;
   // # of cmd args, including program name as first arg
   printf("argc = %d\n", argc);
   // size of parameters; note that argv is just a pointer!
   printf("sizeof(argc)=%lu  sizeof(argv)=%lu\n", sizeof(argc), sizeof(argv));
   // size of variables, esp. difference between char array and char pointer
   printf("sizeof(line)=%lu  sizeof(s)=%lu\n", sizeof(line), sizeof(s));  
   // loop to print out all command line arguments
   for (i=0; i < argc; i++) {
      printf("argv[%d] = (%s)\n", i, argv[i]);
      // print size and string length of arg; notice the difference!
      printf("size = %lu len = %lu\n", sizeof(argv[i]), strlen(argv[i]));
   }
   // assume first arg is filename; try to open it
   fp = fopen(argv[1], "r");
   if (fp) {
      // successful open! So read first line
      printf("fgets: %p\n", fgets(line,sizeof(line),fp));
      // print line, size of variable, and length of string data
      printf("line = (%s) size = %lu len = %lu\n", line, sizeof(line),
             strlen(line));
      // close file
      fclose(fp);
   }
   // now use standard input as a file handle
   fp = stdin;
   // get one line of stdin
   printf("fgets: %p\n", fgets(line,sizeof(line),fp));
   // print stuff about it
   printf("line = (%s) size = %lu len = %lu\n", line, sizeof(line),
          strlen(line));
   // a successful main() should always return 0
   return 0;
}

