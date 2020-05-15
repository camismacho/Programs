#Author Joseph Camacho-Terrazas
#Phase2JCT.py
#Requires--
    #-tkinter
    #-pymysql

from tkinter import *
from tkinter import messagebox
import tkinter as tk
import pymysql as mySQLServer
import sys
import time
import datetime
import re
import os

# Application class        
class Application(object):

    # this init will allow the use of the command line args in the program
    def __init__(self, window, ipAddress, userName, password, dbName):

        self.ipAddress = ipAddress
        self.userName = userName
        self.password = password
        self.dbName = dbName


        '''
        connectDB will use the arguments provided in the command line to log into the database.
        It will exit the program on an unsuccessful connection, since the program is useless at that point.
        '''
        def connectDB():

            try:
                # connect the app to the database
                con = mySQLServer.connect(self.ipAddress, self.userName, self.password, self.dbName)
                print ('Connection Successful! Connected to ' + dbName + ' at ' + ipAddress + ' as user ' + userName)
                appHeading2.config(text = "Database Connection Status: Connected", font = ("lucida console", 10))
                # create a cursor to interact with the db
                cur = con.cursor()
                return (cur, con)

            # exception handler will display an errobox
            except Exception as e:
                appHeading2.config(text = "Database Connection Status: No Connection", font = ("lucida console", 10))
                tk.messagebox.showerror("Connection Error", "Couldn't connect to the database!\nPlease check that server is running and login credentials are correct!\n" + str(e) + "\n\nExiting...")
                print ('Connection Unsuccessful - Exiting')
                sys.exit()


        '''
        singleInsertion inserts the data into the database one line at a time
        '''
        def singleInsertion():

            # connect to the db and get the filename
            runSuccess = False
            (cur, conn) = connectDB()
            fileName = insertionInputText.get()
            insertionLabel4.config(text = "Chosen File: " + fileName, font = ("lucida console", 10, "bold"))
            
            # this will check if the name of the table exists in the filename to execute the appropriate code
            # Note: I convert a lot of the names to lowercase to avoid errors throughout the program

            if "players" in fileName.lower():
                tableName = "players"
                tableExists = True

            # show an error window if the table name is invalid

            else:
                print ('Invalid Table')
                tk.messagebox.showerror("INVALID TABLE", "No such table:\nPlease enter a valid table!")
                tableExists = False
            
            if tableExists == True:
                
                # open the file
                try:
                    f = open(fileName, "r")
                    dataRow = f.readline()
                    # get the start time
                    QueryTimeStart = time.time()
                    
                    # this will split each row my the newline character, and each attribute by a comma
                    while dataRow:
                        dataRow = dataRow.strip('\n')
                        dataValue = dataRow.split(",")
                        
                        # executes an insert command for the appropriate table
                        try:
                            if tableName == "players":
                                cur.execute("INSERT INTO " + tableName + " values(%s,%s,%s,%s,%s,%s,%s)",
                                [dataValue[0], dataValue[1], dataValue[2], dataValue[3], dataValue[4], dataValue[5], dataValue[6]])
                                
                            dataRow = f.readline()
                            runSuccess = True
                        
                        # exception handler will display an errorbox
                        except Exception as e:
                            print ('Exception Thrown')
                            tk.messagebox.showerror("EXCEPTION ERROR", str(e) + "\n" + dataRow)
                            runSuccess = False
                            break

                    #close the file    
                    f.close()
                
                # Print an error message if the input file cannot be opened
                except Exception as e:
                    print ('Exception Thrown')
                    tk.messagebox.showerror("EXCEPTION ERROR", str(e))
            
            # close the db connection and record the finishing time
            cur.close()
            conn.commit()
            conn.close()
            QueryTimeEnd = time.time()
            
            # Display the success message and calculate the elapsed time
            if runSuccess:
                print ('Single Insertion Successful!')
                queryResult = "Single Line Insert into " + tableName + " complete.\n" "\nElapsed time: %.2f seconds."%(QueryTimeEnd-QueryTimeStart)
                insertionLabel5.config(text = "Single Insertion Time: %.2f seconds"%(QueryTimeEnd-QueryTimeStart), font = ("lucida console", 10, "bold"))
                tk.messagebox.showinfo(title = 'Query Complete', message = queryResult)


        '''
        This function will insert the data in the bulk load format
        '''

        def bulkLoadInsertion():

            # connect to the database
            runSuccess = False
            (cur, conn) = connectDB()
            fileName = insertionInputText.get()

            # checks within the filename to get the name of the table, then will execute the appropriate code
            
            if "players" in fileName.lower():
                tableName = "players"
                tableExists = True
                insertionLabel4.config(text = "Chosen File: " + fileName, font = ("lucida console", 10, "bold"))

            else:
                print ('Invalid Table')
                tk.messagebox.showerror("INVALID TABLE", "No such table:\nPlease enter a valid table!")
                tableExists = False
            
            # if the table name is valid, then we will execute the bulk insertion
            if tableExists == True:

                try:
                    # save the start time of the query
                    QueryTimeStart = time.time()
                    cur.execute("LOAD DATA INFILE '" + fileName + "' INTO TABLE " + tableName + " fields terminated BY ',' lines terminated BY '\n';")
                    runSuccess = True
                
                # exception handler will display an errorbox with the error
                except Exception as e:
                    print ('Exception Thrown')
                    tk.messagebox.showerror("EXCEPTION ERROR", str(e))
                    runSuccess = False
            
            # close the connection and save the ending time of the query
            cur.close()
            conn.commit()
            conn.close()
            QueryTimeEnd = time.time()

            # display a success message and calculate the elapsed time
            if runSuccess:
                print ('Bulk Loading Successful!')
                queryResult = "Bulk Insert into " + tableName + " complete\n" "\nElapsed time: %.2f seconds."%(QueryTimeEnd-QueryTimeStart)
                insertionLabel6.config(text = "Bulk Insertion Time: %.2f seconds"%(QueryTimeEnd-QueryTimeStart), font = ("lucida console", 10, "bold"))
                tk.messagebox.showinfo(title='Query Complete', message=queryResult)        


        '''
        This function deletes all of the data of the entered table
        '''

        def deleteTable():  
            # connect to the database
            runSuccess = False
            (cur, conn) = connectDB()

            # checks for a valid table name in the input
            tableName = deletionInputText.get()
            if tableName.lower() == "players":
                tableExists = True

            # show an errorbox if an invalid table name is entered    
            else:
                print ('Invalid Table')
                tk.messagebox.showerror("INVALID TABLE", "No such table:\nPlease enter a valid table!")
                tableExists = False

            # execute the table deletion commands
            if tableExists == True:
                try:
                    cur.execute("SET SQL_SAFE_UPDATES = 0;")
                    cur.execute("DELETE FROM " + tableName + ";")
                    cur.execute("SET SQL_SAFE_UPDATES = 1;")
                    runSuccess = True

                # exception handler will display an errorbox
                except Exception as e:
                    print ('Exception Thrown')
                    tk.messagebox.showerror("EXCEPTION ERROR", str(e))
                    runSuccess = False
                    
            # close the connection to the db
            cur.close()
            conn.commit()
            conn.close()
            
            # display the success message
            if runSuccess:
                print ('Table Deletion Successful!')
                tk.messagebox.showinfo("Query Complete", "Table " + tableName + " deleted successfully!")
                insertionLabel5.config(text = "Single Insertion Time: ", font = ("lucida console", 10))
                insertionLabel6.config(text = "Bulk Insertion Time: ", font = ("lucida console", 10))

        
        '''
        This function will execute a user-entered query
        Only works for a one line query at the moment
        '''

        def getQuery():
            runSuccess = False
            # this line will clear the query output area for each subsequent query
            queryTextbox.delete('1.0','end')
            (cur, conn) = connectDB()
            
            try:
                query = queryInputText.get()
                # checks for the name of the table within the query, this is done to display the right number columns and avoid errors
                if ("players" in query.lower()):
                    # execute the query, fetches the results, and also retrieves the attribute names
                    cur.execute(query)
                    rows = cur.fetchall()
                    title = cur.description

                    # draw 7 columns for player table attribute names
                    output = ("{0:>20} {1:>12} {2:>12} {3:>12} {4:>12} {5:>12} {6:>12}".format(title[0][0], title[1][0], title[2][0], title[3][0], title[4][0], title[5][0], title[6][0])) + "\n"
                    # prints out the data in the row
                    for row in rows:
                        output += ("{0:>20} {1:>12} {2:>14} {3:>12} {4:>12} {5:>12} {6:>12}".format(row[0], row[1], row[2], row [3], row[4], row[5], row[6])) + "\n"

                    #display query results
                    output += "\n"
                    queryTextbox.insert(0.0, output)
                    runSuccess = True
                
                # show an errorbox if an invalid table name is entered    
                else:
                    print ('Invalid Table')
                    tk.messagebox.showerror("INVALID TABLE", "The scope of this project only allows queries of players table!")
                                
            # exception handler will display an errorbox
            except Exception as e:
                    print ('Exception Thrown')
                    tk.messagebox.showerror("EXCEPTION ERROR", str(e))
                    runSuccess = False
                
            # close the db connection    
            cur.close()
            conn.commit()
            conn.close()

            # display the success message
            if runSuccess:
                print ('Query Successfully Executed!')
                tk.messagebox.showinfo("Query Complete", "Query executed successfully!")


        '''
        ---------------------------------------------------------------------------------------------------------
        ------------------------------------------TKINTER UI CODE------------------------------------------------
        ---------------------------------------------------------------------------------------------------------
        '''

        # tk window properties
        window.wm_title("CS 482 - Project Phase 2")
        window.geometry('850x600')
        canvas = Canvas(window, borderwidth = 0)

        # scrollbar configuration
        windowScrollbar = Scrollbar(window, orient="vertical", command = canvas.yview)
        windowScrollbar.pack(side = "right", fill = "y")
        canvas.configure(width = 2000, height = 750, yscrollcommand = windowScrollbar.set)
        canvas.pack(expand = "yes")
        top_frame = Frame(canvas)
        canvas.create_window((10, 10), window=top_frame, anchor = "nw")
        top_frame.bind("<Configure>", lambda event, canvas = canvas:onFrameConfig(canvas))
        def onFrameConfig (canvas):
            canvas.configure(scrollregion = canvas.bbox("all"))

        # heading configuration
        appHeading1 = Label(top_frame, text = "Welcome to Joseph's Phase 2 UI", font = ("lucida console", 12, "bold"))
        appHeading1.pack()
        appHeading2 = Label(top_frame, text = "Database Connection Status: Waiting to Connect...", font = ("lucida console", 10))
        appHeading2.pack()
        appHeading3 = Label(top_frame, text = "Database Name: " + dbName, font = ("lucida console", 10))
        appHeading3.pack()
        appHeading4 = Label(top_frame, text = "Database IP: " + ipAddress, font = ("lucida console", 10))
        appHeading4.pack()
        appHeading5 = Label(top_frame, text = "Database User: " + userName, font = ("lucida console", 10))
        appHeading5.pack()
        def connectTest():
            (cur, conn) = connectDB()
            cur.close()
            conn.commit()
            conn.close()
        testButton = Button(top_frame, text = "Test Connection", font = ("lucida console", 10), command = connectTest)
        testButton.pack()
        def progExit():
            sys.exit()
        def progRestart():
            os.execl(sys.executable, sys.executable, *sys.argv)
        restartButton = Button(top_frame, text = "Restart", font = ("lucida console", 10), command = progRestart)
        restartButton.pack()
        exitButton = Button(top_frame, text = "Exit", font = ("lucida console", 10), command = progExit)
        exitButton.pack()


        # insertion configuration handles both single and bulk loading from one text box
        insertionHeading = Label(top_frame, text = 'Insert Options', font = ("lucida console", 14, "bold"), fg = "white", bg = "green")
        insertionHeading.pack(pady = 50, fill = "x")
        insertionLabel1 = Label(top_frame, text=  'Enter your data file name and select the insertion type.', font = ("lucida console", 10))
        insertionLabel1.pack()
        insertionLabel2 = Label(top_frame, text = 'Your file must be in the same directory as this application.', font = ("lucida console", 10))
        insertionLabel2.pack()
        insertionLabel3 = Label(top_frame, text = 'You must include the file extension and your file must contain the table name.', font = ("lucida console", 10))
        insertionLabel3.pack()
        insertionInputText = StringVar()
        insertionInput = Entry(top_frame, textvariable = insertionInputText)
        insertionInput.pack(pady = 10)
        singleInsertion = Button (top_frame, text = "Single Insert", command = singleInsertion, font = ("lucida console", 10))
        singleInsertion.pack()
        bulkInsertion = Button (top_frame, text = "Bulk Loading", command = bulkLoadInsertion, font = ("lucida console", 10))
        bulkInsertion.pack()
        insertionLabel4 = Label(top_frame, text = "Chosen File: ", font = ("lucida console", 10))
        insertionLabel4.pack(pady = 10)
        insertionLabel5 = Label(top_frame, text = "Single Insertion Time: ", font = ("lucida console", 10))
        insertionLabel5.pack()
        insertionLabel6 = Label(top_frame, text = "Bulk Insertion Time: ", font = ("lucida console", 10))
        insertionLabel6.pack()

        # delete configuration
        deletionHeading = Label(top_frame, text = 'Delete Table', font = ("lucida console", 14, "bold"), fg = "white", bg = "red")
        deletionHeading.pack(pady = 50, fill="x")
        deletionLabel1 = Label(top_frame, text = 'Enter the name of the table you wish to delete', font = ("lucida console", 10))
        deletionLabel1.pack()
        deletionLabel2 = Label(top_frame, text = 'Accepted name is "players"', font = ("lucida console", 10))
        deletionLabel2.pack()
        deletionInputText = StringVar()
        deletionInput = Entry(top_frame, textvariable = deletionInputText)
        deletionInput.pack()
        deleteBtn = Button (top_frame, text = "Delete Table", command = deleteTable, font = ("lucida console", 10))
        deleteBtn.pack()

        # query configuration
        queryHeading = Label(top_frame, text = 'Query Table', font = ("lucida console", 14, "bold"), fg = "white", bg = "blue")
        queryHeading.pack(pady = 50, fill="x")
        queryLabel1 = Label(top_frame, text = 'Enter your query:', font = ("lucida console", 10))
        queryLabel1.pack()
        queryInputText = StringVar()
        queryInput = Entry(top_frame, textvariable = queryInputText)
        queryInput.pack(fill = "x")
        queryButton = Button (top_frame, text = "Query Database", command = getQuery, font = ("lucida console", 10))
        queryButton.pack()
        # query scrollbar configuration
        queryScroll = Scrollbar(top_frame)
        queryScroll.pack(side = "right", fill = "y")
        queryTextbox = Text(top_frame, height = 25, width = 100, relief = "ridge", borderwidth = 6, yscrollcommand = queryScroll.set)
        queryTextbox.pack()
        queryScroll.config(command = queryTextbox.yview)

        #copyright
        copyrightLabel = Label(top_frame, text = "Copyright 2020 Joseph Camacho-Terrazas", font = ("lucida console", 8))
        copyrightLabel.pack(pady = 80)

        
'''
Defines main to allow the passing of command line arguments
These arguments are used to log into your database
'''
def main(argv):
    # define args
    ipAddress = argv[1]
    userName = argv[2]
    password = argv[3]
    dbName = argv[4]

    # start the app by passing the args to it
    window = Tk()
    start = Application(window, ipAddress, userName, password, dbName)
    print ('Application Started')
    window.mainloop()

if __name__ == "__main__":
    main(sys.argv)