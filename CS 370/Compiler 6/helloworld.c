int x;
int y;
int A[5];

func(int a, char* b, char* s)
{

   
   puts("hello world!\n");
   x = 42+12;
   printf("x=%d\n",x);

  if(6<10){ printf("if wins!");}
    else {printf("else wins!");}
  if(6>10){printf("if wins!");}
  else {printf("else wins!");}
	
}

main(int argc, char** argv)
{
   func(42, "goodbye","third arg");
   printf("goodbye %s %d\n","second",42+4+x+2);
   puts("Hello World!\n");
	x = 0;
	while( x != 5){
		puts("Spinny to winny\n");
		x = x + 1;
	}
		
   
}


