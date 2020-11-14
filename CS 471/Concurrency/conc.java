/* 
 * From: http://www.letmeknows.com/2017/04/24/wait-for-threads-to-finish-java/
 * 
 * Adopted By: Shaun Cooper
 * Last Updated Nov 2020
 * 
 * We need static variable pointers in the main class so that we can share these 
 * values with the threads. The threads are address separate from us, so we need
 * to share pointers to the objects that we are sharing and updating. 
 */

import java.util.*;
import java.math.*;


public class conc{

	private static ArrayList<Thread> arrThreads = new ArrayList<Thread>();

	// We use static variable to help us connect the threads to a common block.
	public static int N = 0;
	public static int[][] A;

	//Array to store minimum, maximum, and average
	public static int[] Max;
	public static int[] Min;
	public static float[] Avg;

	// Main entry point for the process
	public static void main (String[] args){
		try{
			
			// Local Min/Max/Avg variables
			int mmin = 0;			
			int mmax = 0;
			float mavg = 0;

			// Get input from the user
			Scanner scan = new Scanner(System.in);
			int size = scan.nextInt();
			N = size;
			
			//Create the array from input
			A = new int[size][size];
			Min = new int[size];
			Max = new int[size];
			Avg = new float[size];

			// Get the maximum and minimum exponential range	
			int max = (int) (Math.pow(2, (32-N)));
			int min = (int) (Math.pow(2, (31-N)));
			int range = max - min;

			// Fill array with random values
			for(int x = 0; x < A.length; x++){
				for(int y = 0; y < A.length; y++){
					A[x][y] = (int)(range * Math.random() + 1);
				}
			} 

			// Start Timer
			long start = System.nanoTime();

			// Create N threads to work on each row
			for(int x = 0; x < size; x++){
				Thread T1 = new Thread(new ThreadTest(x));
				// Standard thread start
				T1.start();
				arrThreads.add(T1);
			}

			// Wait for each thread to complete
			for(int x = 0; x < arrThreads.size(); x++){
				arrThreads.get(x).join();
			}
			// Finish measuring time
			long end = System.nanoTime();

			// Set mmin = the first index of Min
			mmin = Min[0];

			// For loop to check the array and find the min, max, and average.
			for(int x = 0; x < N; x++){
				// Min
				if(Min[x] < mmin){
					mmin = Min[x];
				}

				// Max
				if(Max[x] > mmax){
					mmax = Max[x];
				}
				// Avg
				mavg = mavg + Avg[x];
			}

			// This check is in place to make sure the program is pulling the correct
			// Min and Max values.
			System.out.println(Arrays.toString(Min));

			// Print how long it took to do calculations
			System.out.println("Time taken to complete: " + (end - start) + "ns");

			// Min, max, avg
			System.out.println("Max: " + mmax + " Min: " + mmin + " Avg: " + mavg);

			// All the threads are done, do final calculations
			System.out.println("Main Thread has N as value " + N);

			// This for loop will not stop execution of any thread, only it will come out
			// when all threads are executed.
			System.out.println("Main thread exiting.");
		}catch(Exception e){
			System.out.println(e.getMessage());
		}
	}
} // End Main

class ThreadTest implements Runnable{
	private int i;

	// Set some local min, max, and avg values.
	private int minn = 0;
	private int maxx = 0;
	private float avg = 0;

	ThreadTest(int ind){
		i = ind;
	}

	public void run(){
		try{
			
			minn = conc.A[i][0];
			System.out.println("Thread is started " + i + " Array is " + conc.A[i][0]);

			
			for(int x = 0; x < conc.N; x++){
				// Find the minimum
				if(conc.A[i][x] < minn){
					minn = conc.A[i][x];
				}

				// Find the maximum
				if(conc.A[i][x] > maxx){
					maxx = conc.A[i][x];
				}

				// Find the average
				avg = avg + (conc.A[i][x]/ (conc.N * conc.N));				

			}

			// Store values in global arrays Min, Max, and Avg	
			conc.Min[i] = minn;
			conc.Max[i] = maxx;
			conc.Avg[i] = avg;
			
			// Thread.sleep(1000);
			System.out.println("Thread is exiting " + i);
		} catch(Exception e){
			System.out.println(e.getMessage());
		}
	}
}