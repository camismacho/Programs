Program
   Variable declaration (x) type int
   Variable declaration (y) type int
   --functions--
   Function def (func)
      Variable declaration (a) type int
      Variable declaration (b) type string
      Variable declaration (s) type string
      --body--
      Function call (puts)
         Funcall argument
            String Constant = ("hello world!\n")
      Assignment to (x)
         Expression (op 43)
            Int Constant = 42
            Int Constant = 12
      Function call (printf)
         Funcall argument
            String Constant = ("x=%d\n")
         Funcall argument
            Variable ref (x)
   Function def (main)
      Variable declaration (argc) type int
      Variable declaration (argv) type string
      --body--
      Function call (func)
         Funcall argument
            Int Constant = 42
         Funcall argument
            String Constant = ("goodbye")
         Funcall argument
            String Constant = ("third arg")
      Function call (printf)
         Funcall argument
            String Constant = ("goodbye %s %d\n")
         Funcall argument
            String Constant = ("second")
         Funcall argument
            Expression (op 43)
               Int Constant = 42
               Expression (op 43)
                  Int Constant = 4
                  Expression (op 43)
                     Variable ref (x)
                     Int Constant = 2
      Function call (puts)
         Funcall argument
            String Constant = ("Hello World!\n")
