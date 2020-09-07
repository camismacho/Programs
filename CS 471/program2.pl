#Joseph Camacho-Terrazas
# 09/6/2020
# Input: None
# Output: Print statements from tests.
# Pre-condition: None
# Post-condition: Print statements from tests to see if Evaluate is called in comparison statements.

#!/usr/bin/perl

use warnings;

sub Evaluate {
	printf "Condition has been evaluated \n";
	return 1;
}

$a = 1;

#Testing "AND" logical operators
printf "===Testing AND===\n";
#Test F and T
if($a == 0 && Evaluate() == 1){
	printf "True\n";
}else{
	printf "False\n"
}

printf "\n";

#Test T and F
if($a == 1 && Evaluate() == 0){
	printf "True\n";
}else{
	printf "False\n";
}

printf "\n";

#Test T and T
if($a == 0 && Evaluate() == 0){
	printf "True\n";
}else{
	printf "False\n";
}

printf "\n";

#Test F and F
if($a == 1 && Evaluate() == 1){
	printf "True\n";
}else{
	printf "False\n";
}

printf "\n";

#Testing "OR" logical operators
printf "===Testing OR===\n";
#Test F and T
if($a == 0 || Evaluate() == 1){
	printf "True\n";
}else{
	printf "False\n";
}

printf "\n";

#Test T and F
if($a == 1 || Evaluate() == 0){
	printf "True\n";
}else{
	printf "False\n";
}

printf "\n";

#Test T and T
if($a == 1 || Evaluate() == 1){
	printf "True\n";
}else{
	printf "False\n";
}

printf "\n";

#Test F and F
if($a == 0 || Evaluate() == 0){
	printf "True\n";
}else{
	printf "False\n";
}