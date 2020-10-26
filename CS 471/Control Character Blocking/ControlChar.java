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
import java.io.IOException;

public class ControlChar
{
    public static void main(String[] args) 
    {   
        try
        {
            //Crete a path to the text file and read it into a string
            Path file = Paths.get("control-char.txt");
            String originalString = Files.readString(file);

            //Create a new string, perform control character removal using regex and print the results
            String modifiedString = originalString.replaceAll("\\p{C}", "");
            System.out.println(modifiedString);
        }
    
        catch (IOException e)
        {
            //Catch any IO Exceptions
            System.out.println("Error reading file");
        }
    }
}