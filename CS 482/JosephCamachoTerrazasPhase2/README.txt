To run the UI type the following command:

python Phase2JCT.py ip username password database

* ip is the IP address of the database.
* username is the username for the database.
* password is the database password.
* database is the name of the database.

i.e. python Phase2JCT.py localhost root abc123 phase2

*Note: The UI displays your connection properties, and will exit 
       if it cannot connect to the database.

To insert from file:

* The text file _must_ contain the word "players" in the file name

Other notes:
* For bulk insertion on my computer, MySQL had some security feature enabled
  that didn't allow for data inserts from a file that wasn't in a special directory.
  I had to drop the input files in C:\ProgramData\MySQL\MySQL Server 8.0\Data\phase2.
  I read that C:\ProgramData\MySQL\MySQL Server 8.0\Uploads also works. But I promise
  bulk insert works.

* This UI will only query the "players" table. Trying to delete or query
  any other table will result in an error.

* Due to a limitation of Tkinter, the UI will only accept single-line queries.