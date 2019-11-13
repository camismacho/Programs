int x;
int y;

func(int a, char* b, char* s)
{
   puts("hello world!\n");
   x = 42+12;
   printf("x=%d\n",x);
   if (20>10) { puts("if works!\n"); }
   else { puts("else works!\n"); }
   if (20<10) { puts("if works!\n"); }
   else { puts("else works!\n"); }
}

main(int argc, char* argv)
{
   func(42, "goodbye","third arg");
   printf("goodbye %s %d\n","second",42+4+x+2);
   puts("Hello World!\n");
   x = 0;
   while(x < 10) {
       puts("loopy loop\n");
       x = x + 1;
    }

}
