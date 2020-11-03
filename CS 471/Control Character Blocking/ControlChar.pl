#Joseph Camacho-Terrazas
#10/26/2020
#Input: The backup text file
#Output: Resulting string after eliminating control characters
#Preconditions: The file must exist and filename must be valid
#Postconditions: Print the resulting string after eliminating all control characters

#!/usr/bin/perl
use warnings;
use strict ;

#Declare input and output files
my $inputFile = "control-char.txt";
my $outputFile = "perloutput.txt";
#finalString stores the cleaned string
my $finalString = "";
#Read and char delcared for the reader
my $read;
my $char;
#printFlag will let us print if it's 1 
my $printFlag = 1;

#Open the input file using file handler
open FILE, '<', $inputFile or die "Can't open file! $!";

#Read through the file one char at a time
while ($read = read FILE, $char, 1) {
    #Convert char to ascii value and compare to ctrl values
    #If char is ctrl-c printFlag is 0
    if(ord($char) == 3) {
        $printFlag = 0;
    }
    #If char is ctrl-b printFlag is 1
    if(ord($char) == 2) {
        $printFlag = 1;
    }
    #Skip to next iteration on a ctrl-b
    next if(ord($char) == 2);
    #If printFlag is one we add the char to the final string
    if($printFlag == 1) {
        $finalString .= $char;
    }
}
#Open the output file and print the final output string to it
open FILE, ">", $outputFile or die "Can't open the file! $!";
print FILE $finalString;
print "File created successfully $outputFile\n";