int x;
int y;
int arr[5];

func(int a, char* b, char* s)
{
   int localtest;
   int localtwo;

   arr[1] = 10;
   arr[2] = 11;
   arr[3] = 12;
   
   printf("arr[1]=%d\n",arr[1]);
   printf("arr[2]=%d\n",arr[2]);
   printf("arr[3]=%d\n",arr[3]);
   
   a = 10;
   
   printf("a = %d\n",a);
   
   localtest = 42+12;
   printf("localtest=%d\n",localtest);
   
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
   
   int t;
   t = 0;
   do {puts("do while"\n);
       t = t + 1;} while(t < 10);

}

test (int one, int two, int three, int four)
{
    int this;
    int is;
    int going;
    int to;
    int be;
    int alot;
    int of;
    int local;
    int variables;
}
