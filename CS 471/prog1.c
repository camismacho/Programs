/*
* Joseph Camacho-Terrazas
* 8/28/2020
* Input: An array of 4-byte integers
* Output: Name printed in text
* Preconditions:
* Postconditions:
*/

#include <stdio.h>

int main() {

    //Declare array A to store integer values
    int A[100];
    //Declare pointer char S for casting later
    char *S;

    //ASCII values for J o s e
    A[0] = 74 + (111 * 256) + (115 * 256 * 256) + (101 * 256 * 256 * 256);
    //ASCII values for p h   C
    A[1] = 112 + (104 * 256) + (32 * 256 * 256) + (67 * 256 * 256 * 256);
    //ASCII values for a m a c
    A[2] = 97 + (109 * 256) + (97 * 256 * 256) + (99 * 256 * 256 * 256);
    //ASCII values for h o - T
    A[3] = 104 + (111 * 256) + (45 * 256 * 256) + (84 * 256 * 256 * 256);
    //ASCII values for e r r a
    A[4] = 101 + (114 * 256) + (114 * 256 * 256) + (97 * 256 * 256 * 256);
    //ASCII values for z a s
    A[5] = 122 + (97 * 256) + (115 * 256 * 256);
    //ASCII values for newline
    A[6] = 0;

    //Cast the integer array into char*
    S = (char*) A;

    //Final name print
    printf("My name is %s\n", S);

    //Question tests

    //Test array for question 3
    //Declaring a static array will move it to another memory segment
    static int B[100];

    printf("(3a) Array A is located at: %10u \n", A);
    printf("(3b) The pointer to Array A is located at: %10u \n", &A);
    printf("(3c) Making the array static will move it to another segment; now located at: %10u \n", B);
    printf("(3d) The computer I ran this problem on is: ");
    endianTest(1);
    printf("(3e) The difference between little and big endian is.....\n");
    


    return (0);
}

void endianTest(int num) {
    if ((char*)&num == 1) {printf("Little endian.\n");}
    else {printf("Big endian.\n");}
}