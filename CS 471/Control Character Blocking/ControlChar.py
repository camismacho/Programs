#Joseph Camacho-Terrazas
#10/26/2020
#Input: The backup text file
#Output: Resulting string after eliminating control characters
#Preconditions: The file must exist and filename must be valid
#Postconditions: Print the resulting string after eliminating all control characters

import string

#create a flag that will allows us to print
printFlag = 1
#Open the input and output files
f1 = open("control-char.txt")
f2 = open("pythonoutput.txt", "w")

while True:
    #Read one character of the file into c
    c = f1.read(1)
    
    #Break out of the loop at the end of the file
    if not c:
        break
    #Convert the chars to ascii values, and compare to control char value
    #If current char is ctrl-c, print flag is 0
    if ord(c) == 3:
        printFlag = 0
    #If current char is ctrl-b, print flag is 1 and skip to next iteration
    if ord(c) == 2:
        printFlag = 1
        continue
    #If print flag is 1, then write it to the output file
    if printFlag == 1:
        f2.write(c)

#User confirmation about the output file creation
print ("File created successfully ")
print (f2.name)

#Close all open files
f1.close()
f2.close()