<?php  
//Joseph Camacho-Terrazas
//9/6/2020
//Input: None
//Output: Results of each test
//Preconditions: None
//Postconditions: Print the results from tests and a confirmation message if 2nd condition is reached in comparison statements.

//Create Evaluate function to print a confirmation message if it's evaluated.
//Returns true for easy comparisons
function Evaluate(){
	echo "Condition has been evaluated" .PHP_EOL;
	return True;
}

//Testing "AND" operators
echo "===Testing AND with function as second condition===" .PHP_EOL;
//Test F and T
if (False && Evaluate()) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;

//Test T and F
if (True && Evaluate() == False) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;

//Test T and T
if (True && Evaluate()) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;
	
//Test F and F
if (False && Evaluate() == False) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;

//Testing with function as the first condition just to verify that the function does work properly

echo "===Testing AND with function as first condition===" .PHP_EOL;
//Test F and T
if (Evaluate() == False && True) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;

//Test T and F
if (Evaluate() && False) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;

//Test T and T
if (Evaluate() && True) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;
	
//Test F and F
if (Evaluate() && False) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}
?> 