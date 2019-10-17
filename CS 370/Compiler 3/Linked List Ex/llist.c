/*
A few reminders: the symbol table is made up of an array of linked lists. The array itself is an array of pointers to the heads of each list. Many, even most, of the lists will be empty (the head pointer will be NULL). Both of the functions you have to write, addSymbol() and findSymbol() never need to iterate through the array -- you only use the hash function on the name to get the index into the table, and you don't ever access any other index. The function addSymbol() does not even walk through the list, because it should add the symbol at the beginning of the list. findSymbol() does need to walk through the list. The code posted from the Oct 1 lab (in Files as llist.c) has examples of adding an element to a linked list and of walking through a linked list. A linked list is a dynamically allocated data structure, so you need to allocate memory for each element in the list; in the Symbol Table case, you need to allocate memory, using malloc(), for a new Symbol structure, and you need to create a new copy of the name string -- either allocate and copy or use strdup() or something else. This code is all about using pointers -- there should really be no reason to declare any variable of type Symbol -- only variables of type Symbol* (pointer to Symbol).
*/
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// linked list node datatype
typedef struct s_node {
   char* strval;
   struct s_node* next;
} Node;

// list pointer
Node* list=0;

int main(int argc, char **argv)
{
   int i;
   Node* newnode;
   Node* ltmp;
   // create new nodes, one for each arg; put on front of list
   for (i=0; i<argc; i++) {
      newnode = (Node*) malloc(sizeof(Node));
      newnode->strval = (char*) 
            malloc(sizeof(char)*(strlen(argv[i])+1));
      strcpy(newnode->strval,argv[i]);
      newnode->next = list;
      list = newnode;
   }
   // walk through list and print items
   ltmp = list;
   while (ltmp != NULL) {
      printf("list item = %s\n",ltmp->strval);
      ltmp = ltmp->next;
   }
   // walk through list and delete (with safety)
   ltmp = list;
   while (ltmp != NULL) {
      Node* dtmp = ltmp;
      ltmp = ltmp->next;
      free(dtmp->strval);
      dtmp->strval = 0;
      dtmp->next = 0;
      free(dtmp);
   }
   list = 0;
   return 0;
}


