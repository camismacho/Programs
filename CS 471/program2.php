<?php  
//Joseph Camacho-Terrazas
//9/6/2020
//Input:
//Output:
//Preconditions: None
//Postconditions: 

//Create Evaluate function to test when the second part of the statements are executed.
function Evaluate(){
	echo "Condition has been evaluated" .PHP_EOL;
	return True;
	
}

//Testing "AND" operators
echo "===Testing AND===" .PHP_EOL;
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

//Testing "OR" operators
echo "===Testing OR===" .PHP_EOL;
//Test F and T
if (False || Evaluate()) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;
	
//Test T and F
if (True || Evaluate() == False) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;

//Test T and T
if (True || Evaluate()) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

echo "" .PHP_EOL;

//Test F and F
if (False || Evaluate() == False) {
	echo "True" .PHP_EOL;
} else {
	echo "False" .PHP_EOL;
}

?> 