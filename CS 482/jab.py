def getQuery():
            queryTextbox.delete('1.0','end')
            query = queryInput_text.get()
            
            
            # Define and execute the query command
            #query = "SELECT * FROM " + tableName + ";"
            try:
                (cur, conn) = connectDB()
                cur.execute(query)
                rows = cur.fetchall()
                desc = cur.description      #this gets the attribute names

                # Display the results based on the table
                if ("players" in query.lower()):
                    output = ("{0:>8} {1:>15} {2:>12} {3:>8} {4:>12} {5:>12} {6:>12}".format(desc[0][0], desc[1][0], desc[2][0],
                    desc[3][0], desc[4][0], desc[5][0], desc[6][0])) + "\n" #8 columns
                    for row in rows:
                        output += ("{0:>8} {1:>15} {2:>14} {3:>7} {4:>11} {5:>11} {6:>10}".format(row[0], row[1], row[2], row [3],
                        row[4], row[5], row[6])) + "\n"
                    output += "\n"
                    queryTextbox.insert(0.0, output)
                            
                elif ("games" in query.lower()):
                    output = ("{0:>0} {1:>10} {2:>30} {3:>16} {4:>15} {5:>15}".format(desc[0][0], desc[1][0], desc[2][0], desc[3][0],
                    desc[4][0], desc[5][0])) + "\n" #6 attributes
                    for row in rows:
                        output += ("{0:>4} {1:>15} {2:>30} {3:>9} {4:>15} {5:>15}".format(row[0], str(row[1]), row[2], row [3], row[4], row[5])) + "\n"
                    output += "\n"
                    queryTextbox.insert(0.0, output)
                        
                elif ("play" in query.lower()):
                    output = ("{0:>3} {1:>7}".format(desc[0][0], desc[1][0])) + "\n" #8 columns
                    for row in rows:
                        output += ("{0:>4} {1:>10}".format(row[0], row[1])) + "\n"
                    output += "\n"
                    queryTextbox.insert(0.0, output)

            except Exception as e:
                    tk.messagebox.showerror("EXCEPTION ERROR", str(e))
                
            cur.close()
            conn.commit()
            conn.close()
                    
        #---------------------------------end getQuery()---------------------------