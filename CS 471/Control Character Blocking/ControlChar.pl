#Joseph Camacho-Terrazas
#10/26/2020
#Input: The backup text file
#Output: Resulting string after eliminating control characters
#Preconditions: The file must exist and filename must be valid
#Postconditions: Print the resulting string after eliminating all control characters

#!/usr/bin/perl
use strict;
use warnings;

#Create variables for the input and output files
my $inputFile = "control-char.txt";
my $outputFile = "perloutput.txt";

#Create an empty string to read the file into
my $myString = "";

#Open the input file read-only, loop through until EOF, and place each line into the string
open FILE, "<", $inputFile or die "Can't open the file! $!";
while (<FILE>) {
    $myString .= $_;
}

#Perform a regex match on the string to eliminate non-printable characters
#Regular expression source: https://stackoverflow.com/questions/7406037/how-to-get-rid-of-control-characters-in-perl-specifically-gs
$myString =~ s/[^[:print:]]+//g;

#Create a new file for output, and print the results to the file
open FILE, ">", $outputFile or die "Can't open the file! $!";
print FILE $myString;
print "File created successfully $outputFile\n"