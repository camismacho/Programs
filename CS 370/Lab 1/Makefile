CFLAGS = -Wall

all: hw
	
hw.o: hw.c
	gcc -c hw.c

hw: hw.o
	gcc -o hw hw.o

clean:
	rm -f *.o hw
