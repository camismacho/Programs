#Joseph Camacho-Terrazas
#09/6/2020
#Input: None
#Output: Result of each test
#Preconditions: None
#Postconditions: Print the results from tests and a confirmation message if 2nd condition is reached in comparison statements.

#!/usr/bin/perl

use warnings;

#Create function Evaluate that prints a confirmation message upon evaluation
#Returns 1 for easy comparisons
sub Evaluate {
	printf "Condition has been evaluated \n";
	return 1;
}

#Declare variable a for comparisons
$a = 1;

#Testing "AND" logical operators
printf "===Testing AND with function as second condition===\n";
#Test F and T
if ($a == 0 && Evaluate() == 1) {
	printf "True\n";
} else {
	printf "False\n"
}

printf "\n";

#Test T and F
if ($a == 1 && Evaluate() == 0) {
	printf "True\n";
} else {
	printf "False\n";
}

printf "\n";

#Test T and T
if ($a == 1 && Evaluate() == 1) {
	printf "True\n";
} else {
	printf "False\n";
}

printf "\n";

#Test F and F
if ($a == 0 && Evaluate() == 0) {
	printf "True\n";
} else {
	printf "False\n";
}

printf "\n";

#Testing with function as the first condition just to verify that the function does work properly

printf "===Testing AND with function as first condition===\n";
#Test F and T
if (Evaluate() == 0 && $a == 1) {
	printf "True\n";
} else {
	printf "False\n"
}

printf "\n";

#Test T and F
if (Evaluate() == 1 && $a == 0) {
	printf "True\n";
} else {
	printf "False\n";
}

printf "\n";

#Test T and T
if (Evaluate() == 1 && $a == 1) {
	printf "True\n";
} else {
	printf "False\n";
}

printf "\n";

#Test F and F
if (Evaluate() == 0 && $a == 0) {
	printf "True\n";
} else {
	printf "False\n";
}