int x;

func()
{
   x = 42+12;
   printf("x=%d\n",x);
}
main(int argc, char* argv)
{
   printf("%d\n", 42+4+x+2);
   
   x = 0;
   while(x < 10) {
       puts("loopy loop\n");
       x = x + 1;
    }

}
