#!/bin/bash
#This shell script will setup everything to run the Fortran and Python programs

#Note the start time
start=$(date +"%m-%d-%Y - %T")
echo "Tests started at: $start"
echo "Running tests...."

#Remove existing a.out file for fresh Fortran build
rm -f a.out

#Compile Fortran code
gfortran -ffree-form program4.f90

#Remove any existing output files for a fresh run
rm -f output.txt

#Create a new output file
touch output.txt

#Run the program execution script and send all output to the text file
./runprogs.sh &>> output.txt

#Note the finish time
finish=$(date +"%m-%d-%Y - %T")
echo "Tests completed at: $finish"

#Show the output file in console just to be sure
cat output.txt