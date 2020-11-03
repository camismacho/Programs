/*Joseph Camacho-Terrazas
*10/26/2020
*Input: The backup text file
*Output: Resulting string after eliminating control characters
*Preconditions: The file must exist and filename must be valid
*Postconditions: Print the resulting string after eliminating all control characters
*/

import java.util.*;
import java.io.*;

public class ControlChar {
    public static void main(String[] args) {   
        try {
            //Declare the input and output files
            File input = new File("control-char.txt");
            File output = new File("javaoutput.txt");
            //Create a file reader, file writer, and buffered reader
            FileReader fr = new FileReader(input);
            FileWriter fw = new FileWriter(output);
            BufferedReader br = new BufferedReader(fr);
            //c stores value from buffered reader
            int c = 0;
            //Print flag allows us to print when it's 1
            int printFlag = 1;

            //Loop through the file using buffered reader
            while ((c = br.read()) != -1) {
                //Buffered reader gives us ints, so compare ascii values
                //If c is ctrl-c, printFlag is 0
                if(c == 3) {printFlag = 0;}
                //If c is ctrl-b, printFlag is 1 and skip to next iteration
                if(c == 2) {printFlag = 1; continue;}
                //If printFlag is 1, write c to the file
                if(printFlag == 1) {
                    fw.write(c);
                }
            }

            //close all open readers and writers
            fr.close();
            fw.close();
            br.close();
        }
    
        catch (IOException e) {
            //Catch any IO Exceptions
            System.out.println("There was an error" + e);
        }
    }
}