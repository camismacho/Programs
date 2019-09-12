CFLAGS = -Wall

all: hw2rdp
	
hw2rdp.o: hw2rdp.c
	gcc -c hw2rdp.c

hw2rdp: hw2rdp.o
	gcc -o hw2rdp hw2rdp.o

clean:
	rm -f *.o hw2rdp
