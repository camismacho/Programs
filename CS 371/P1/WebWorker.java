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
import java.util.*;

public class WebWorker implements Runnable
{

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
   System.err.println("Handling connection...");
   try {
      InputStream  is = socket.getInputStream();
      OutputStream os = socket.getOutputStream();
      //readHTTPRequest(is);
      writeHTTPHeader(os,"text/html");
      readHTTPRequest(is);
      //writeContent(os);
      os.flush();
      socket.close();
   } catch (Exception e) {
      System.err.println("Output error: "+e);
   }
   System.err.println("Done handling connection.");
   return;
}

/**
* Read the HTTP request header.
**/
private void readHTTPRequest(InputStream is) //probably need to modify this for P1
{
	try {

	      // Open connections to the socket
	      BufferedReader in = new BufferedReader(new InputStreamReader(is));
	      PrintStream out = new PrintStream(new BufferedOutputStream(socket.getOutputStream()));

	      // Read filename from first input line "GET /filename.html ..."
	      // or if not in this format, treat as a file not found.
	      String s=in.readLine();
	      System.out.println(s);  // Log the request

	      // Attempt to serve the file.  Catch FileNotFoundException and
	      // return an HTTP error "404 Not Found".  Treat invalid requests
	      // the same way.
	      String filename = "";
	      StringTokenizer st = new StringTokenizer(s);
	      try {

	        // Parse the filename from the GET command
	        if (st.hasMoreElements() && st.nextToken().equalsIgnoreCase("GET")
	            && st.hasMoreElements())
	          filename=st.nextToken();
	        else
	          throw new FileNotFoundException();  // Bad request

	        // Append trailing "/" with "index.html"
	        if (filename.endsWith("/"))
	          filename+="index.html";

	        // Remove leading / from filename
	        while (filename.indexOf("/")==0)
	          filename=filename.substring(1);

	        // Replace "/" with "\" in path for PC-based servers
	        filename=filename.replace('/', File.separator.charAt(0));

	        // Check for illegal characters to prevent access to superdirectories
	        if (filename.indexOf("..")>=0 || filename.indexOf(':')>=0
	            || filename.indexOf('|')>=0)
	          throw new FileNotFoundException();

	        // If a directory is requested and the trailing / is missing,
	        // send the client an HTTP request to append it.  (This is
	        // necessary for relative links to work correctly in the client).
	        if (new File(filename).isDirectory()) {
	          filename=filename.replace('\\', '/');
	          out.print("HTTP/1.0 301 Moved Permanently\r\n"+
	            "Location: /"+filename+"/\r\n\r\n");
	          out.close();
	          return;
	        }

	        // Open the file (may throw FileNotFoundException)
	        InputStream f=new FileInputStream(filename);

	        // Send file contents to client, then close the connection
	        byte[] a=new byte[4096];
	        int n;
	        while ((n=f.read(a))>0)
	          out.write(a, 0, n);
	        out.close();
	      }
	      catch (FileNotFoundException x) {
	        out.println("HTTP/1.0 404 Not Found\r\n"+
	          "Content-type: text/html\r\n\r\n"+
	          "<html><head></head><body>"+filename+" not found</body></html>\n");
	        out.close();
	      }
	    }
	    catch (IOException x) {
	      System.out.println(x);
	    }
	return;
}
	   
   

/**
* Write the HTTP header lines to the client network connection.
* @param os is the OutputStream object to write to
* @param contentType is the string MIME content type (e.g. "text/html")
**/
private void writeHTTPHeader(OutputStream os, String contentType) throws Exception 
{
   Date d = new Date();
   DateFormat df = DateFormat.getDateTimeInstance();
   df.setTimeZone(TimeZone.getTimeZone("GMT"));
   os.write("HTTP/1.1 200 OK\n".getBytes());//this also has something to do with the assignment (http status request - 404)
   os.write("Date: ".getBytes());
   os.write((df.format(d)).getBytes());
   os.write("\n".getBytes());
   os.write("Server: Jon's very own server\n".getBytes());
   //os.write("Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT\n".getBytes());
   //os.write("Content-Length: 438\n".getBytes()); 
   os.write("Connection: close\n".getBytes());
   os.write("Content-Type: ".getBytes());
   os.write(contentType.getBytes());
   os.write("\n\n".getBytes()); // HTTP header ends with 2 newlines
   return;
}

/**
* Write the data content to the client network connection. This MUST
* be done after the HTTP header has been written out.
* @param os is the OutputStream object to write to
**/
private void writeContent(OutputStream os) throws Exception
{
   os.write("<html><head></head><body>\n".getBytes());
   os.write("<h3>I don't know what I'm doing!!</h3>\n".getBytes());
   os.write("</body></html>\n".getBytes());
}

} // end class
