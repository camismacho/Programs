#Joseph Camacho-Terrazas
#Program4 Python Numpy Implementation
#9/26/2020
#Input: Takes a command line argument for the matrix size
#Output: The time it takes for Gaussian Elimination to run on the matrix
#Preconditions: Program must be run with 1 argument. Argument must allow for Gaussian Elimination to run without error.
#Postconditions: Program will output the total time it took to run Gaussian Elimination on the matrix.

# Imports
import sys
import time
import random

#Read command line arguments as an int to create the array dimensions
n = int(sys.argv[1])

#Set the size of the matrix
cols = n+1
rows = n

#Create 2 dimensional array of zeroes
x = [[0 for _ in range(cols)]for _ in range(rows)]

#Create 2 dimensional array of random floats
a = [[random.uniform(1.50,10.50) for _ in range(cols)]for _ in range(rows)]

#----------Python Gaussian Elimination with Numpy Source----------
# Credit: https://www.codesansar.com/numerical-methods/gauss-elimination-method-python-program.htm

# ----Numpy code is not used in this implementation, I just left it in to show the full source-----

# Making numpy array of n size and initializing 
# to zero for storing solution vector
#x = np.zeros(n)

# Fill array with random numbers
#a = np.random.rand(n, n+1)

# Applying Gauss Elimination

# Start Timer
start = time.time()

for i in range(n):
    if a[i][i] == 0.0:
        sys.exit('Divide by zero detected!')
        
    for j in range(i+1, n):
        ratio = a[j][i]/a[i][i]
        
        for k in range(n+1):
            a[j][k] = a[j][k] - ratio * a[i][k]

# Back Substitution
x[n-1] = a[n-1][n]/a[n-1][n-1]

for i in range(n-2,-1,-1):
    x[i] = a[i][n]
    
    for j in range(i+1,n):
        x[i] = x[i] - a[i][j]*x[j]
    
    x[i] = x[i]/a[i][i]

#End Timer and print results
finish = time.time()
print('Time = %.5f seconds'%(finish-start))