#!/usr/bin/perl
use warnings;
use strict ;

# set inputFile to text file location, declare currentLine as empty string.
my $inputFile = "control-char.txt";
my $currentLine = "";
my $finalString = "";
my $controlC;
my $controlB;

#Open the file or relay the error 'Cannot open file!'
open FILE, '<', $inputFile or die "Cannot open file! $!";

#While File is open, read it's contents.
while(<FILE>){ 
    $currentLine = "$_";

    if ($currentLine =~ /\cC/ && $currentLine =~ /\cB/) {
        $controlB = index($currentLine, "\cB");
        $finalString .= substr($currentLine, $controlB + 1);
	}
	
	elsif($currentLine =~ /\cB/) {

        $controlB = index($currentLine, "\cB");
        $finalString .= substr($currentLine, $controlB + 1);    
    }
	
	elsif($currentLine =~ /\cC/) {
        $controlC = index($currentLine, "\cC");
        $finalString .= substr($currentLine, 0, $controlC);
        <FILE>;
    }
	
	else {
        $finalString .= $currentLine;
    }
}

print $finalString;