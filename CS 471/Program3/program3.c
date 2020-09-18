/*
*Joseph Camacho-Terrazas
*09/14/2020


* Program to demonstrate how to over write the
* return address inside of function
* we will use a global variable to store
* the address we want to go to on return
* and we will use an array in the function to
* seek the location and replace with the new value
*/

#include <stdio.h>

//dummy function which makes one important change

void f() {

    unsigned int *A;
    int i;

    //adding variables will break the program
    //this is because we're allocating a 64 bit word, but we're going over the limit

    int a;
    //need to allocate another word to fit these 2 variables (A[8])
    int b;
    int c;
    //need to allocate another word to fit these 2 variables (A[10])
    int d;
    int e;
    //need to allocate another word to fit these 2 variables (A[12])
    unsigned int f;
    unsigned int g;

    a = 51;
    b = 52;
    c = 53;
    d = 54;
    e = 55;
    f = 101;
    g = 102;


    A =(unsigned int *) &A;

    for (i=0;i<=10; i++)
       printf("%d %u\n",i,A[i]);

    //A will allocate the space for variables
    //Adding a number in multiples of 10 to A[n] will change the return address and skip instructions
    //+20 will skip both prints, but +0 will not skip anything. A negative number will call previous instructions
    //to offset this, we can allocate extra words (A[12]) and this will set the return address correctly and the program will no longer skip the print
    
    //A[10]=A[10]+0; //this will print "I called f"

    //A[10]=A[10]+20; //this will skip both print statements

    //A[14]=A[14]+10; //this will print "I called f"

    //this will skip the print statement after f is called
    A[12]=A[12]+10;
    printf("A after offset is %u \n",A);

    for (i=-4;i<=10; i++)
    printf("%d %u\n",i,A[i]);
}

int main() {

    int A[100];
    unsigned int L[4];
    L[0]=100;
    L[1]=200;
    L[2]=300;
    L[3]=400;

    for (int i=0; i < 100; i++) A[i]=i;

    printf("main is at %lu \n",main);

    printf("f is at %lu \n",f);
    printf("I am about to call f\n");
    f();
    printf("I called f\n");

out: printf(" I am here\n");

}