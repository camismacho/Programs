CFLAGS = -Wall

all: hw0wc
	
hw0wc.o: hw0wc.c
	gcc -c hw0wc.c

hw0wc: hw0wc.o
	gcc -o hw0wc hw0wc.o

clean:
	rm -f *.o hw0wc
