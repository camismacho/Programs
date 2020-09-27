#Simple script to automate all tests for Program4
echo "===Running Fortran Tests==="
gfortran -ffree-form program4.f90
echo "250x250 Matrix"
./a.out 250
./a.out 250
./a.out 250
./a.out 250
./a.out 250
echo ""
echo "500x500 Matrix"
./a.out 500
./a.out 500
./a.out 500
./a.out 500
./a.out 500
echo ""
echo "1000x1000 Matrix"
./a.out 1000
./a.out 1000
./a.out 1000
./a.out 1000
./a.out 1000
echo ""
echo "1500x1500 Matrix"
./a.out 1500
./a.out 1500
./a.out 1500
./a.out 1500
./a.out 1500
echo ""
echo "2000x2000 Matrix"
./a.out 2000
./a.out 2000
./a.out 2000
./a.out 2000
./a.out 2000
echo ""

echo "===Running Python with Numpy Tests==="
echo "250x250 Matrix"
python program4numpy.py 250
python program4numpy.py 250
python program4numpy.py 250
python program4numpy.py 250
python program4numpy.py 250
echo ""
echo "500x500 Matrix"
python program4numpy.py 500
python program4numpy.py 500
python program4numpy.py 500
python program4numpy.py 500
python program4numpy.py 500
echo ""
echo "1000x1000 Matrix"
python program4numpy.py 1000
python program4numpy.py 1000
python program4numpy.py 1000
python program4numpy.py 1000
python program4numpy.py 1000
echo ""
echo "1500x1500 Matrix"
python program4numpy.py 1500
python program4numpy.py 1500
python program4numpy.py 1500
python program4numpy.py 1500
python program4numpy.py 1500
echo ""
echo "2000x2000 Matrix"
python program4numpy.py 2000
python program4numpy.py 2000
python program4numpy.py 2000
python program4numpy.py 2000
python program4numpy.py 2000
echo ""

echo "===Running Python without Numpy Tests==="
echo "250x250 Matrix"
python program4.py 250
python program4.py 250
python program4.py 250
python program4.py 250
python program4.py 250
echo ""
echo "500x500 Matrix"
python program4.py 500
python program4.py 500
python program4.py 500
python program4.py 500
python program4.py 500
echo ""
echo "1000x1000 Matrix"
python program4.py 1000
python program4.py 1000
python program4.py 1000
python program4.py 1000
python program4.py 1000
echo ""
echo "1500x1500 Matrix"
python program4.py 1500
python program4.py 1500
python program4.py 1500
python program4.py 1500
python program4.py 1500
echo ""
echo "2000x2000 Matrix"
python program4.py 2000
python program4.py 2000
python program4.py 2000
python program4.py 2000
python program4.py 2000
echo ""
