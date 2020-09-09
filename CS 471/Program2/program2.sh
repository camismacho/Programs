#!/bin/sh

#Joseph Camacho-Terrazas
#09/6/2020
#Input: None
#Output: Results of each tests
#Preconditions: None
#Postconditions: Print the results from tests and a confirmation message if 2nd condition is reached in comparison statements.

#Declare variable a for evaluation
a=1

#Testing AND logical operators
echo "===Testing AND with echo as the second condition==="
#test F and T
if [[ $a == 0 ]] && echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi

echo

#test T and T
if [[ $a == 1 ]] && echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi 

echo

#Testing with function as the first condition just to verify that the function does work properly

echo "===Testing AND with echo as the first condition==="
#test F and T
if  echo "Condition has been evaluated" && [[ $a == 0 ]]
then
    echo "True"
else
    echo "False"
fi

echo

#test T and T
if echo "Condition has been evaluated"  && [[ $a == 1 ]]
then
    echo "True"
else
    echo "False"
fi 