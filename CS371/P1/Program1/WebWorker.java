/**
* Web worker: an object of this class executes in its own new thread
* to receive and respond to a single HTTP request. After the constructor
* the object executes on its "run" method, and leaves when it is done.
*
* One WebWorker object is only responsible for one client connection.
* This code uses Java threads to parallelize the handling of clients:
* each WebWorker runs in its own thread. This means that you can essentially
* just think about what is happening on one client at a time, ignoring
* the fact that the entirety of the webserver execution might be handling
* other clients, too.
*
* This WebWorker class (i.e., an object of this class) is where all the
* client interaction is done. The "run()" method is the beginning -- think
* of it as the "main()" for a client interaction. It does three things in
* a row, invoking three methods in this class: it reads the incoming HTTP
* request; it writes out an HTTP header to begin its response, and then it
* writes out some HTML content for the response content. HTTP requests and
* responses are just lines of text (in a very particular format).
*
**/

import java.net.Socket;
import java.lang.Runnable;
import java.io.*;
import java.util.Date;
import java.text.DateFormat;
import java.util.TimeZone;

    public class WebWorker implements Runnable
    {

    String fileName;
    private Socket socket;

    /**
    * Constructor: must have a valid open socket
    **/
    public WebWorker(Socket s)
    {
        socket = s;
    }

    /**
    * Worker thread starting point. Each worker handles just one HTTP
    * request and then returns, which destroys the thread. This method
    * assumes that whoever created the worker created it with a valid
    * open socket object.
    **/
    public void run()
    {
    	//this is the address which will point to the file
    	String url = "";
    	//represent content type (text, jpg, etc.)
    	String cType = ""; 
        
        System.err.println("Handling connection...");
        try {
            InputStream  is = socket.getInputStream();
            OutputStream os = socket.getOutputStream();
            //set url String to the http request input and print
            url = readHTTPRequest(is);
            System.err.println("HTTP Request: " + url);
            
            //first check the file type
            //jpeg
            if (url.contains(".jpg")) cType = "image/jpeg";
            //png
            else if (url.contains(".png")) cType = "image/png";
            //gif
            else if (url.contains(".gif")) cType = "image/gif";
            //ico
            //I don't think it works but I gave it the old college try
            else if (url.contains(".ico")) cType = "image/x-icon";
            //if no image type found, set to default case of text/html
            else cType = "text/html";
            
            //now we can pass cType to the write functions
            writeHTTPHeader(os, cType, url);  
            writeContent(os, cType, url);
            os.flush();
            socket.close();
        } catch (Exception e) {
            System.err.println("Output error: " + e);
        }
        System.err.println("Done handling connection.");
        return;
    }

    /**
    * Read the HTTP request header.
    **/
    private String readHTTPRequest(InputStream is)
    {
        String line;
        BufferedReader r = new BufferedReader(new InputStreamReader(is));
        //url is the address of the file
        String url = "";

        while (true) {
            try {
                while (!r.ready()) Thread.sleep(1);
                line = r.readLine();
                //if there is a GET request, read url for file address
                if (line.contains("GET ")) {
                	//create a substring that excludes 'http'
                    url = line.substring(4);
                    //get rid of whitespace if there is any
                    for(int i = 0; i < url.length(); i++) {
                        if (url.charAt(i) == ' ')
                            url = url.substring(0 , i);
                    }//end for
                }//end if
                System.err.println("Request line: (" + line + ")");
                if (line.length() == 0)
                    break;
            } catch (Exception e) {
                System.err.println("Request error: " + e);
                break;
            }
        }
        return url;
    }

    /**
    * Write the HTTP header lines to the client network connection.
    * @param os is the OutputStream object to write to
    * @param contentType is the string MIME content type (e.g. "text/html")
    **/
    private void writeHTTPHeader(OutputStream os, String contentType, String url) throws Exception
    {
        //date formatting
        Date d = new Date();
        DateFormat df = DateFormat.getDateTimeInstance();
        df.setTimeZone( TimeZone.getTimeZone("GMT-6") );
        //creates a copy of the file address with "." at the front for proper reading
        String urlCopy = "." + url;
        //create new file pointing to urlCopy
        File in = new File(urlCopy);

        //if file doesn't exist throw 404
        try {
            FileReader file = new FileReader(in);
        } catch(FileNotFoundException e) {
            System.err.println("File not found: " + url);
            os.write("HTTP/1.1 404 Not Found\n".getBytes());
        }
        //else return 200 OK
        os.write("HTTP/1.1 200 OK\n".getBytes());
        os.write("Date: ".getBytes());
        os.write((df.format(d) ).getBytes());
        os.write("\n".getBytes());
        os.write("Server: Joseph's very own server\n".getBytes());
        os.write("Connection: close\n".getBytes());
        os.write("Content-Type: ".getBytes());
        /*DEBUG*/
        //System.err.println("Content Type at Header: " + contentType);
        os.write(contentType.getBytes());
        os.write("\n\n".getBytes()); // HTTP header ends with 2 newlines
        return;
    }

    /**
    * Write the data content to the client network connection. This MUST
    * be done after the HTTP header has been written out.
    * @param os is the OutputStream object to write to
    **/
    private void writeContent(OutputStream os, String contentType, String url) throws Exception
    {
    	//copy date declarations for tag replacement
        Date d = new Date();
        DateFormat df = DateFormat.getDateTimeInstance();
        df.setTimeZone(TimeZone.getTimeZone("GMT-6"));
        String date = df.format(d);
        //create a string which contains content of the file
        String fileContent = "";
        //urlCopy same as above
        String urlCopy = "." + url;
        //new file at urlCopy
        File in = new File(urlCopy);
        
        /*DEBUG*/
        //System.err.println("Content Type at Write: " + contentType);

        //read contents of file and place into fileContent
        //for p2 we change to if statement to handle multiple types
        
        //process text files
        if (contentType.equals("text/html")) {
	        try{
	        	FileReader f = new FileReader(in);
	            BufferedReader r = new BufferedReader(f);
	            while((fileContent = r.readLine()) != null) {
	            	os.write(fileContent.getBytes());
	                	os.write("\n".getBytes());
	                	//if tags are found, replace with date or message
	                    if (fileContent.contains("<cs371date>")) {
	                        os.write(date.getBytes());
	                    }//end if
	                    if (fileContent.contains("<cs371server>")) {
	                        os.write("Sweet Server M8\n".getBytes());
	        			}//end if
	            }//end while
	        }//end try 
	        //if file doesn't exist, throw 404
	        catch(FileNotFoundException e) {
	                System.err.println("File not found: " + url);
	                os.write("<h1>Error: 404 Not found<h1>\n".getBytes());
	        }//end catch
        }// end if
        
        //if we don't get a text file right away, we'll try images
        //using .contains, so we don't have to .equals every type
        else if (contentType.contains("image")) {
        	try {
                FileInputStream imgIn = new FileInputStream(in);
                //create byte array to store image data
        		byte imgArr[] = new byte [(int) in.length()];
                imgIn.read(imgArr);
                //write image to output stream
        		DataOutputStream imgOut = new DataOutputStream(os);
        		imgOut.write(imgArr);
        	}//end try
        	//if file doesn't exist, throw 404
	        catch(FileNotFoundException e) {
	                System.err.println("File not found: " + url);
	                os.write("<h1>Error: 404 Not found<h1>\n".getBytes());
	        }//end catch
        }//end if
        
    }//end writeContent

} // end class