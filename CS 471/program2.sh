#!/bin/sh

#Joseph Camacho-Terrazas
#09/06/2020
#Input:
#Output:
#Preconditions:
#Postconditions:

a=1
b=1

#Declare function Evaluate
Evaluate () {
    echo "Condition has been evaluated"
    return 1
}

#Testing AND logical operators
echo "===Testing AND==="
#test F and T
if [[ $a == 0 ]] && echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi

echo

#test T and F
if [[ $a == 1 ]] && echo "Condition has been evaluated"
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

#test F and F
if [[ $a == 0 ]] && echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi 

echo

#Testing AND logical operators
echo "===Testing OR==="
#test F and T
if [[ $a == 0 ]] || echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi

echo

#test T and F
if [[ $a == 1 ]] || echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi 

echo 

#test T and T
if [[ $a == 1 ]] || echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi 

echo 

#test F and F
if [[ $a == 0 ]] || echo "Condition has been evaluated"
then
    echo "True"
else
    echo "False"
fi 