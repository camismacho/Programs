#Joseph Camacho-Terrazas
#10/26/2020
#Input: The backup text file
#Output: Resulting string after eliminating control characters
#Preconditions: The file must exist and filename must be valid
#Postconditions: Print the resulting string after eliminating all control characters

import string

#Open the intput file and place in a string
f1 = open("control-char.txt")
originalString = f1.read()

#Open the outputfile for writing
f2 = open("pythonoutput.txt", "w")

#This labmda function will create a new string out of only printable characters (code point range 32 through 126)
modifiedString = lambda x: "".join(i for i in x if 31 < ord(i) < 127)

#Write the result to the file
f2.write(modifiedString(originalString))
print ("File created successfully ")
print (f1.name)

#Close all open files
f1.close()
f2.close()