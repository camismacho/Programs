/*
*Joseph Camacho-Terrazas
*10/26/2020
*Input: The backup text file
*Output: Resulting string after eliminating control characters
*Preconditions: The file must exist and filename must be valid
*Postconditions: Print the resulting string after eliminating all control characters
*/

import java.util.*;
import java.nio.file.*;
import java.io.*;

public class ControlChar {
    public static void main(String[] args) {   
        try {
            //Create a path to the text file and read it into a string
            Path file = Paths.get("control-char.txt");
            String originalString = Files.readString(file);

            //Create a new string, perform control character removal using regex and print the results
            //Regular expression source: https://howtodoinjava.com/java/regex/java-clean-ascii-text-non-printable-chars/
            String modifiedString = originalString.replaceAll("\\p{C}", "");

            //Create a new file to store the output and check if it already exists
            File output = new File("javaoutput.txt");
            if(output.createNewFile()) {
                System.out.println("File created successfully " + output.getName());
            }
            else {
                System.out.println("File exists");
            }

            //Create a filewriter and write the new string to the file and close it
            FileWriter newWriter = new FileWriter("javaoutput.txt");
            newWriter.write(modifiedString);
            newWriter.close();
        }
    
        catch (IOException e) {
            //Catch any IO Exceptions
            System.out.println("There was an error" + e);
        }
    }
}