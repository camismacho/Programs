#Joseph Camacho-Terrazas
#10/26/2020
#Input: The backup text file
#Output: Resulting string after eliminating control characters
#Preconditions: The file must exist and filename must be valid
#Postconditions: Print the resulting string after eliminating all control characters

import string

#Open the file and place in a string
f = open("control-char.txt")
originalString = f.read()

#This labmda function will create a new string out of only printable characters (code point range 32 through 126)
modifiedString = lambda x: "".join(i for i in x if 31 < ord(i) < 127)

#Print the final result and close the file
print(modifiedString(originalString))
f.close()