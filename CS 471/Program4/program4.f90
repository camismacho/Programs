!Joseph Camacho-Terrazas
!9/26/2020
!Input: Takes a command line argument for the matrix size
!Output: The time it takes for Gaussian Elimination to run on the matrix
!Preconditions: Program must be run with 1 argument. Argument must allow for Gaussian Elimination to run without error.
!Postconditions: Program will output the total time it took to run Gaussian Elimination on the matrix.

PROGRAM program4
    IMPLICIT NONE

    !Matrix declarations
    INTEGER::i,j
    REAL::s
    !Create dynamic arrays to allow for command line args
    REAL,DIMENSION(:,:),allocatable::a
    REAL,DIMENSION(:),allocatable::x
    !Char and int for casting arg to integer
    CHARACTER(100)::numinputchar
    INTEGER::numinput
    !Trackers for CPU time
    REAL::start, finish

    !Get arg1 and cast to int
    CALL getarg(1,numinputchar)
    READ(numinputchar,'(I10)')numinput

    !Construct the arrays using arg1 input
    ALLOCATE(a(numinput,numinput))
    ALLOCATE(x(numinput))

    !Fills the array with random numbers
    CALL random_number(a)

    !Start timer
    CALL cpu_time(start)

    !----------Fortran Gaussian Elimination Without Pivoting Source----------
    !https://labmathdu.wordpress.com/gaussian-elimination-without-pivoting/

    !File related stuff is not needed for this implementation, but I left it to show the full source

    !OPEN(1,FILE='input.txt')
    !OPEN(2,FILE='output.txt')

    !READ(1,*)((a(i,j),j=1,n+1),i=1,n)
    
    !WRITE(2,8)"Augmented Matrix",((a(i,j),j=1,numinput+1),i=1,numinput)

    DO j=1,numinput
        DO i=j+1,numinput
            a(i,:)=a(i,:)-a(j,:)*a(i,j)/a(j,j)
        END DO
    END DO

    !WRITE(2,8)"After Gaussian Elimination",((a(i,j),j=1,numinput+1),i=1,numinput)

    DO i=numinput,1,-1
        s=a(i,numinput+1)
        DO j=i+1,numinput
            s=s-a(i,j)*x(j)
        END DO
        x(i)=s/a(i,i)
    END DO

    !WRITE(2,9)"X=",(x(i),i=1,numinput)

    !8 FORMAT(a,/,3(4(f7.2,3x),/))
    !9 FORMAT(a,/,3(f7.2,/))

    !End the timer and print result
    CALL cpu_time(finish)
    print '("Time = ",f20.10," seconds")',finish-start

END PROGRAM