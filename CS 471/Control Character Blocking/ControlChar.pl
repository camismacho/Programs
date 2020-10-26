#Joseph Camacho-Terrazas
#10/26/2020
#Input: The backup text file
#Output: Resulting string after eliminating control characters
#Preconditions: The file must exist and filename must be valid
#Postconditions: Print the resulting string after eliminating all control characters

#!/usr/bin/perl
use strict;
use warnings;

#Create variable with the file name
my $file_name = "control-char.txt";

#Create an empty string to read the file into
my $myString = "";

#Open the file read-only, loop through until EOF, and place each line into the string
open FILE, "<", $file_name or die "Can't open the file! $!";
while (<FILE>) {
    $myString .= $_;
}

#Perform a regex match on the string to eliminate non-printable characters
$myString =~ s/[^[:print:]]+//g;

#Print the final result
print $myString;