//Just the delScopelevel function

//
// Delete all symbols at the given scope level and greater
//
int delScopeLevel(Symbol** table, int scopeLevel)
{
   int i;
   Symbol *prev=0, *cur=0, *t;
   for (i=0; i < TABLESIZE; i++) {
      prev = 0;
      cur = table[i];
      while (cur) {
         if (cur->scopeLevel >= scopeLevel) {
            t = cur;
            if (prev)
               prev->next = cur->next;
            else
               table[i] = cur->next;
            cur = cur->next;
            free(t->name);
            t->name = 0;
            t->next = 0;
            free(t);
         } else {
            prev = cur;
            cur = cur->next;
         }
      }
   }
   return 0;
}

