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
        String urlAddress;
        String contentType;  //.gif   .jpg   .png   .ico

        System.err.println("Handling connection...");
        try {
            InputStream  is = socket.getInputStream();
            OutputStream os = socket.getOutputStream();
            urlAddress = readHTTPRequest( is );
            System.out.println( urlAddress );  //debugging
            //finding out what type of image it is
            /*if ( urlAddress.contains( ".gif" ) )
                contentType = "image/gif";
            else if ( urlAddress.contains( ".jpg" ) )
                contentType = "image/jpeg";
            else if ( urlAddress.contains(".png") )
                contentType = "image/png";
            else if ( urlAddress.contains( ".ico" ) )
                contentType = "image/x-icon";
            else*/
                contentType = "text/html";
            //send the contentType and urlAddress to writeHTTPHeader/ writeContent
            writeHTTPHeader( os , contentType , urlAddress );  
            writeContent( os , contentType , urlAddress );
            os.flush();
            socket.close();
        } catch ( Exception e ) {
            System.err.println( "Output error: " + e );
        }
        System.err.println( "Done handling connection." );
        return;
    }

    /**
    * Read the HTTP request header.
    **/
    private String readHTTPRequest( InputStream is )
    {
        String line;
        BufferedReader r = new BufferedReader( new InputStreamReader( is ) );

        String urlAddress = "";

        while ( true ) {
            try {
                while ( !r.ready() ) Thread.sleep( 1 );
                line = r.readLine();
                if ( line.contains( "GET " ) ) {
                    urlAddress = line.substring( 4 ); //get rid of http from url string
                    for( int i = 0 ; i < urlAddress.length() ; i++ ) {
                        if ( urlAddress.charAt( i ) == ' ' )
                            urlAddress = urlAddress.substring(0 , i );
                    }//end for
                }//end if
                System.err.println( "Request line: (" + line + ")" );
                if ( line.length() == 0 )
                    break;
            } catch ( Exception e ) {
                System.err.println( "Request error: " + e );
                break;
            }
        }
        return urlAddress;
    }

    /**
    * Write the HTTP header lines to the client network connection.
    * @param os is the OutputStream object to write to
    * @param contentType is the string MIME content type (e.g. "text/html")
    **/
    private void writeHTTPHeader( OutputStream os , String contentType , String urlAddress ) throws Exception
    {
        Date d = new Date();
        DateFormat df = DateFormat.getDateTimeInstance();
        df.setTimeZone( TimeZone.getTimeZone("GMT") );
        //if the file does not exist change the HTTP status
        try {
            FileReader file = new FileReader( urlAddress );
            BufferedReader r = new BufferedReader( file );
        } catch( FileNotFoundException e ) {
            System.out.println( "File not found: " + urlAddress );
            os.write( "HTTP/1.1 404 Not Found\n".getBytes() );
        }
        //otherwise keep the status 200 OK
        os.write( "HTTP/1.1 200 OK\n".getBytes() );
        os.write( "Date: ".getBytes());
        os.write( ( df.format( d ) ).getBytes() );
        os.write( "\n".getBytes() );
        os.write( "Server: Joseph's very own server\n".getBytes() );
        os.write( "Connection: close\n".getBytes() );
        os.write( "Content-Type: ".getBytes() );
        os.write( contentType.getBytes() );
        os.write( "\n\n".getBytes() ); // HTTP header ends with 2 newlines
        return;
    }

    /**
    * Write the data content to the client network connection. This MUST
    * be done after the HTTP header has been written out.
    * @param os is the OutputStream object to write to
    **/
    private void writeContent(OutputStream os , String contentType , String urlAddress) throws Exception
    {
        Date d = new Date();
        DateFormat df = DateFormat.getDateTimeInstance();
        df.setTimeZone(TimeZone.getTimeZone( "GMT" ));
        String dataContent = "";
        String urlAddressCopy = "." + urlAddress.substring( 0 , urlAddress.length( ) );
        String date = df.format( d );
        File in = new File( urlAddressCopy );

        // handel plain html text
            try{
                FileReader inRead = new FileReader( in );
                BufferedReader inBuffer = new BufferedReader( inRead );
                while( ( dataContent = inBuffer.readLine() ) != null ) {
                    os.write( dataContent.getBytes() );
                    os.write( "\n".getBytes());
                    if ( dataContent.contains( "<cs371date>" ) ) {
                        os.write( date.getBytes() );
                    }
                    if ( dataContent.contains( "<cs371server>" ) )
                        os.write( "My Server's ID string\n".getBytes() );
                }
                
            } catch(FileNotFoundException e) {
                System.err.println( "File not found: " + urlAddress );
                os.write( "<h1>Error: 404 Not found<h1>\n".getBytes() );
            }
        
    }

} // end class