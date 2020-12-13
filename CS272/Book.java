/**
 * @author Joseph Camacho-Terrazas
 * CS272
 * Book.java
 */
public class Book {

	public String bookTitle;
	public int numAuthors;
	public String[] authors = new String[3];
	public String isbn;
	
	/**
	 * Book constructor creates a new book object
	 */
	public Book() {

		bookTitle = null;
		isbn = null;
		numAuthors = 0;
		int size = authors.length;
        for (int i=0; i<size; i++)//loop to iterate through authors array
        	{
            authors[i] = null;
        	}
    }//end Book constructor
	
	/**
	 * This constructor sets the book title, and all else to 0 or null
	 */
	public Book(String _title) {

		bookTitle = _title;
		isbn = null;
		numAuthors = 0;
		int size = authors.length;
        for (int i=0; i<size; i++)//loop to iterate through authors array
        	{
            authors[i] = null;
        	}
    }//end Book
	
	/**
	 * Copy constructor creates new book object from a copy of the object parameter
	 */
	
	public Book (Object obj)  {
		
		if (obj != null) {
			if (obj instanceof Book) {
				Book ref = (Book) obj;//create reference object to copy to
				bookTitle = ref.bookTitle;
				isbn = ref.isbn;
				numAuthors = ref.numAuthors;
				int size = authors.length;
				for (int i=0; i<size; i++)//loop to iterate through authors array
					{
					authors[i] = ref.authors[i];
					}
			}
		}
		
	}//end copy constructor
	
	/**
	 * Returns the title of the book
	 */
	
	public String getTitle() {
		
		return bookTitle;
		
	}//end getTitle
	
	/**
	 * Returns the number of authors of the book
	 */
	
	public int getAuthorNumber() {
		
		return numAuthors;
		
	}//end getAuthorNumber
	
	/**
	 * Returns the ISBN of the book
	 */
	
	public String getISBN() {
		
		return isbn;
		
	}//end getISBN
	
	/**
	 * Sets the title of the book
	 */
	
	public void setTitle(String _title) {
		
		bookTitle = _title;
	}//end setTitle
	
	/**
	 * Sets the ISBN of the book
	 */
	
	public void setISBN (String _isbn) {
		
		isbn = _isbn;
		
	}//end setISBN
	
	/**
	 * Adds an author to the author array list of the book if there is enough space
	 */
	
	public boolean addAuthor(String _author) {
		
		int size = authors.length;
		for (int i=0; i<size; i++){//loop to iterate through authors array
			if (authors[i] == null){
				authors[i] = _author;
				numAuthors++;
				return true;
			}
		}
		
		return false;
	}//end add Author
	
	/**
	 * Returns true if the 2 books ISBN's match, otherwise returns false
	 */
	
	public boolean equals(Object obj) {
		
		if (obj != null) {
			if (obj instanceof Book) {
				Book candidate = (Book) obj;
				return (candidate.isbn == isbn);
			}
		}
		
			return false;
	}//end equals
	
	/**
	 * Creates a new string array filled with the authors from both object parameters
	 * Checks to make sure author isn't null before adding to new string array
	 */
	
	public static String[] getAllAuthors(Book b1, Book b2) {
		
		String[] auths = new String[6];//new string array to store the authors
		
		if (b1 != null) {
			if (b2 != null) {
				int size = b1.authors.length;
				int i = 0;
				while (i<size){//loop to iterate through authors array
					auths[i] = b1.authors[i];
					i++;
				}//end while
				int size2 = b2.authors.length;
				for (int j=0; j<size2; j++) {//loop to iterate through authors array
					auths[j + i] = b2.authors[j];
				}//end for
			}//end if
		}//end if
		
		return auths;
	}
	
	/**
	 * Overrides toString method to print the books information
	 */
	
	public String toString() {
		
		String author = "";
		
		for (int i = 0; i < 3; i++) {//loop to iterate through authors array
			author += ", " + authors[i];
		}
		
		return "Title= " +bookTitle+ ", ISBN= " +isbn+ ", # of Authors= " +numAuthors+ ", Authors= " +author;
		
	}
	
	/**
	 * Main method to test all other methods
	 */
	public static void main(String[] args) {
		
		/*Create first Book object*/
		Book bk1 = new Book();
		
		/*Set the parameters of bk1*/
		bk1.setTitle("How to Code");
		bk1.addAuthor("John Smith");
		bk1.addAuthor("Richard Martinez");
		bk1.addAuthor("Josh McDonald");
		bk1.addAuthor("This one shouldn't work");//this author shouldn't be added to authors array
		bk1.setISBN("1837893457802");
		
		/*Test get functions and toString*/
		System.out.println(bk1.getTitle());
		System.out.println(bk1.getAuthorNumber());
		System.out.println(bk1.getISBN());
		System.out.println(bk1);
		
		/*Create new Book object using copy constructor*/
		Book bk2 = new Book(bk1);
		
		/*Test output of bk2 and equals method*/
		System.out.println(bk2);
		System.out.println(bk1.equals(bk2));
		
		/*Create third Book object*/
		Book bk3 = new Book();
		bk3.setISBN("9483783007473");
		
		/*equals should return false this test*/
		System.out.println(bk1.equals(bk3));
		
		/*Create new string array and and fill it with all authors then print*/
		String[] allAuthors;
		allAuthors = getAllAuthors(bk1, bk2);
		for (int i = 0; i<allAuthors.length; i++) {
			System.out.println(allAuthors[i]);
		}//end for

		}

}
