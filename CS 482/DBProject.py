#Author Joseph Camacho-Terrazas
#Phase2UI.py
#Requires--
    #-tkinter
    #-pymysql

from tkinter import *
from tkinter import messagebox
import tkinter as tk
import pymysql as mySQLServer
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
        connectDB will use the arguments provided in the command line
        to log into the database
        '''
        def connectDB():

            try:
                # connect the app to the database
                con = mySQLServer.connect(self.ipAddress, self.userName, self.password, self.dbName)
                print ('Connection Successful! Connected to ' + dbName)
                # create a cursor to interact with the db
                cur = con.cursor()
                return (cur, con)

            # exception handler will display an errobox
            except Exception as e:
                tk.messagebox.showerror("Connection Error", "Couldn't connect to the database!\n" + str(e))


        '''
        singleInsertion inserts the data into the database one line at a time
        '''
        def singleInsertion():

            # connect to the db and get the filename
            runSuccess = True
            (cur, conn) = connectDB()
            fileName = insertInput_text.get()
            
            # this will check if the name of the table exists in the filename to execute the appropriate code
            # Note: I convert a lot of the names to lowercase to avoid errors throughout the program

            if "players" in fileName.lower():
                tableName = "players"
                tableExists = True

            elif "games" in fileName.lower():
                tableName = "games"
                tableExists = True

            elif "play" in fileName.lower():
                tableName = "play"
                tableExists = True

            # show an error window if the table name is invalid

            else:
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
                            
                            elif tableName == "games":
                                cur.execute("INSERT INTO " + tableName + " values(%s,%s,%s,%s,%s,%s)",
                                [dataValue[0], dataValue[1], dataValue[2], dataValue[3], dataValue[4], dataValue[5]])
                            
                            elif tableName == "play":
                                cur.execute("INSERT INTO " + tableName + " values(%s,%s)", [dataValue[0], dataValue[1]])
                            
                            else:
                                cur.execute("INSERT INTO " + tableName + " values(%s,%s,%s)", [dataValue[0], dataValue[1], dataValue[2]])
                                
                            dataRow = f.readline()
                        
                        # exception handler to display and errorbox and delete the bad data
                        except Exception as e:
                            tk.messagebox.showerror("EXCEPTION ERROR", str(e))
                            cur.execute("SET SQL_SAFE_UPDATES = 0;")
                            cur.execute("DELETE from Players;")
                            cur.execute("SET SQL_SAFE_UPDATES = 1;")
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
                queryResult = "Single Line Insert into " + tableName + " complete.\n" "\nElapsed time: %.7f seconds."%(QueryTimeEnd-QueryTimeStart)
                tk.messagebox.showinfo(title = 'Query Complete', message = queryResult)


        '''
        This function will insert the data in the bulk load format
        '''

        def bulkLoadInsertion():

            # connect to the database
            runSuccess = True
            (cur, conn) = connectDB()
            fileName = insertInput_text.get()

            # checks within the filename to get the name of the table, then will execute the appropriate code
            
            if "players" in fileName.lower():
                tableName = "players"
                tableExists = True

            elif "games" in fileName.lower():
                tableName = "games"
                tableExists = True

            elif "play" in fileName.lower():
                tableName = "play"
                tableExists = True

            else:
                tk.messagebox.showerror("INVALID TABLE", "No such table:\nPlease enter a valid table!")
                tableExists = False
            
            # if the table name is valid, then we will execute the bulk insertion
            if tableExists == True:

                try:
                    # save the start time of the query
                    QueryTimeStart = time.time()
                    cur.execute("LOAD DATA INFILE '" + fileName + "' INTO TABLE " + tableName + " fields terminated BY ',' lines terminated BY '\n';")
                
                # exception handler will display an errorbox with the error
                except Exception as e:
                    print ('Exception Thrown')
                    tk.messagebox.showerror("EXCEPTION ERROR", str(e))
                    cur.execute("SET SQL_SAFE_UPDATES = 0;")
                    cur.execute("DELETE from Players;")
                    cur.execute("SET SQL_SAFE_UPDATES = 1;")
                    runSuccess = False
            
            # close the connection and save the ending time of the query
            cur.close()
            conn.commit()
            conn.close()
            QueryTimeEnd = time.time()

            # display a success message and calculate the elapsed time
            if runSuccess:
                print ('Bulk Loading Successful!')
                queryResult = "Bulk Insert into " + tableName + " complete\n" "\nElapsed time: %.7f seconds."%(QueryTimeEnd-QueryTimeStart)
                tk.messagebox.showinfo(title='Query Complete', message=queryResult)        


        '''
        This function deletes all of the data of the entered table
        '''

        def deleteTable():  
            # connect to the database
            runSuccess = True
            (cur, conn) = connectDB()

            # checks for a valid table name in the input
            tableName = deleteInput_text.get()
            if (tableName.lower() == "players" or tableName.lower() == "games" or tableName.lower() == "play"):
                tableExists = True

            # show an errorbox if an invalid table name is entered    
            else:
                tk.messagebox.showerror("INVALID TABLE", "No such table:\nPlease enter a valid table!")
                tableExists = False

            # execute the table deletion commands
            if tableExists == True:
                try:
                    cur.execute("SET SQL_SAFE_UPDATES = 0;")
                    cur.execute("DELETE FROM " + tableName + ";")
                    cur.execute("SET SQL_SAFE_UPDATES = 1;")

                # exception handler will display an errorbox
                except Exception as e:
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

        
        '''
        This function will execute a user-entered query
        Only works for a one line query at the moment
        '''

        def getQuery():
            runSuccess = True
            queryTextbox.delete('1.0','end')
            query = queryInput_text.get()
            (cur, conn) = connectDB()
            
            
            try:
                # execute the query, fetches the results, and also retrieves the attribute names
                cur.execute(query)
                rows = cur.fetchall()
                desc = cur.description

                # checks for the name of the table within the query, this is done to display the right number columns and avoid errors
                if ("players" in query.lower()):
                    # draw 7 columns for player table
                    output = ("{0:>8} {1:>15} {2:>12} {3:>8} {4:>12} {5:>12} {6:>12}".format(desc[0][0], desc[1][0], desc[2][0],
                    desc[3][0], desc[4][0], desc[5][0], desc[6][0])) + "\n"

                    for row in rows:
                        output += ("{0:>8} {1:>15} {2:>14} {3:>7} {4:>11} {5:>11} {6:>10}".format(row[0], row[1], row[2], row [3],
                        row[4], row[5], row[6])) + "\n"
                    
                    output += "\n"
                    queryTextbox.insert(0.0, output)
                            
                elif ("games" in query.lower()):
                    # draw 6 columns for games table
                    output = ("{0:>0} {1:>10} {2:>30} {3:>16} {4:>15} {5:>15}".format(desc[0][0], desc[1][0], desc[2][0], desc[3][0],
                    desc[4][0], desc[5][0])) + "\n"
                    
                    for row in rows:
                        output += ("{0:>4} {1:>15} {2:>30} {3:>9} {4:>15} {5:>15}".format(row[0], str(row[1]), row[2], row [3], row[4], row[5])) + "\n"
                    
                    output += "\n"
                    queryTextbox.insert(0.0, output)
                        
                elif ("play" in query.lower()):
                    # draw 2 columns for play table
                    output = ("{0:>3} {1:>7}".format(desc[0][0], desc[1][0])) + "\n"
                    
                    for row in rows:
                        output += ("{0:>4} {1:>10}".format(row[0], row[1])) + "\n"
                    
                    output += "\n"
                    queryTextbox.insert(0.0, output)

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
        window.geometry('770x720')
        canvas = Canvas(window, borderwidth=1)

        # scrollbar configuration
        windowScrollbar = Scrollbar(window, orient="vertical", command=canvas.yview)
        windowScrollbar.pack( side = "right", fill = "y" )
        canvas.configure(width=2000, height=750, yscrollcommand=windowScrollbar.set)
        canvas.pack(expand="yes")
        top_frame = Frame(canvas)
        canvas.create_window((10, 10), window=top_frame, anchor="nw")
        top_frame.bind("<Configure>", lambda event, canvas=canvas:onFrameConfig(canvas))

        def onFrameConfig (canvas):
            canvas.configure(scrollregion=canvas.bbox("all"))

        # insertion configuration handles both single and bulk loading from one text box
        #CHANGE ORDER
        insertHeading = Label(top_frame,text='Insert Options', fg="white", bg="green").pack(fill="x")
        insertLabel = Label(top_frame, text='Enter your data file name and select the insertion type').pack()
        insertLabel2 = Label(top_frame, text='Your file must be in the same directory as this application').pack()
        insertLabel3 = Label(top_frame, text='You must include the file extension').pack()
        insertInput_text = StringVar()
        insertInput = Entry(top_frame, textvariable=insertInput_text).pack()
        singleInsertion = Button (top_frame, text="Single Insert", command=singleInsertion).pack()
        loadInsert = Button (top_frame, text="Bulk Loading", command=bulkLoadInsertion).pack()

        # delete configuration
        #CHANGE ORDER
        deleteHeading = Label(top_frame,text='Delete Table', fg="white", bg="red").pack(pady=50, fill="x")
        deleteLabel = Label(top_frame, text='Enter the name of the table you wish to delete').pack()
        deleteLabel2 = Label(top_frame, text='Accepted names are "players", "games", and "play"').pack()
        deleteInput_text = StringVar()
        deleteInput = Entry(top_frame, textvariable=deleteInput_text).pack()
        delete_button = Button (top_frame, text="Delete table", command = deleteTable).pack()

        # query configuration
        #CHANGE ORDER
        queryHeading = Label(top_frame,text='Query', fg="white", bg="blue").pack(pady=50, fill="x")
        queryLabel = Label(top_frame, text='Enter your query:').pack()
        queryInput_text = StringVar()
        queryInput = Entry(top_frame, textvariable=queryInput_text).pack(fill="x")
        queryButton = Button (top_frame, text="Query Database", command=getQuery).pack()
        # query scrollbar configuration
        queryScroll = Scrollbar(top_frame)
        queryScroll.pack(side="right", fill="y")
        queryTextbox = Text(top_frame, height=25, width=100, relief= "ridge", borderwidth= 6, yscrollcommand=queryScroll.set)
        queryTextbox.pack()
        queryScroll.config(command=queryTextbox.yview)


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