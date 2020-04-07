/*Variables*/
var game_active = false; 
var current_player = 0; 
var gameboard = []; 
var activePlayers = [];
var inactive = 1;
var p1name = "";
var p2name = "";
var winner = "";
var p1wins = 0;
var p2wins = 0;
var player_color = [];
player_color[1] = "RED";
player_color[2] = "BLUE";
currentTurn = 0;

var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io").listen(http);

/*Functions*/

io.on("connection", function(socket) {
    var playerNew = {
        socket: socket,
        role: 0,
        name: ""
    };

    socket.on("startGame", function() {
        //setup activePlayers
        if(activePlayers[0] === undefined) {
            socket.emit("connected", 1);
            playerNew.role = 1;
            activePlayers[0] = playerNew;
        }
        
        else if(activePlayers[1] === undefined) {
            socket.emit("connected", 2);
            playerNew.role = 2;
            activePlayers[1] = playerNew;
        }

        else {
            socket.emit("connected", 0);
            inactive[socket.id] = playerNew;
        }

        if(playerNew.role != 0) {
            console.log("Client has been connected as Player", + playerNew.role);
        }

        else {
            console.log("Client has been connected as spectator", + inactive++);
        }

        socket.emit("newGame");

        //check if activePlayers are still connected
        if(activePlayers[0] && activePlayers[1]) {
            activePlayers[0].socket.emit("switchTurn");
            currentTurn = 1;
        }
    });

    //drops a piece and attributes the cell to a player, and switches the turn
    socket.on("dropPiece", function(col) {
        if (game_active) {
            for (row=5; row>=0; row--) { 
                if (gameboard[row][col] == 0) {
                    gameboard[row][col] = current_player;
                    drawBoard();if (current_player == 1) {
                        current_player = 2;
                    } else {
                        current_player = 1;
                    }

                    activePlayers[0].socket.emit("updateBoard");
                    activePlayers[1].socket.emit("updateBoard");

                    for(var sNum in inactive) {
                        inactive[sNum].socket.emit("updateBoard");
                    }
                    //call turnManager to reflect player switch
                    turnManager();

                    if(currentTurn === 1) {
                        currentTurn = 2;
                        activePlayers[1].socket.emit("turn");
                    }
                    else {
                        currentTurn = 1;
                        activePlayers[0].socket.emit("turn");
                    }
                    return true;
                }
            }
        }
    });

    socket.on('disconnect', function() {
        if(playerNew.role === 1) {delete activePlayers[0];}
        else if(playerNew.role === 2) {delete activePlayers[1];}
        else {delete inactive[socket.id];}
    });
    
});

//prompts for the player's names at each page load
//also can update names mid game while keeping scores
function getNames() {
    p1name = prompt("Enter Player 1's Name: ","Player 1");
    p2name = prompt("Enter Player 2's Name: ","Player 2");
    startGame();
}

//changes game info to reflect who's turn it is
    //uses a span to also display the current chip color
    function turnManager() {
        if (game_active) {
            if (current_player == 1) {
                document.getElementById('game_info').innerHTML = "<p> Current Turn: " + p1name + "</p>" + " <span class='player" + current_player + "'>(" + player_color[current_player] + ")</span>";
            } 
            else{
                document.getElementById('game_info').innerHTML = "<p> Current Turn: " + p2name + "</p>" + " <span class='player" + current_player + "'>(" + player_color[current_player] + ")</span>";
            }
        }
    }	
//various loops to check for a win
//checks for wins horizontally, vertically, and diagonally
//loops through checking gameboard[row][col] to see if player 1 or 2 occupies the cell
//returns the winning player if any
function winManager() {

	//horizontal check
	for (i=1; i<=2; i++) {
		for (col = 0; col <=3; col++) {
		    for (row = 0; row <=5; row++) {
				if (gameboard[row][col] == i) {
					if ((gameboard[row][col+1] == i) && (gameboard[row][col+2] == i) && (gameboard[row][col+3] == i)) {
						results(i);
						return true;
					}
				}
			}
		}
	}
				
	//vertical check			
	for (i=1; i<=2; i++) {
		for (col = 0; col <=6; col++) {
			for (row = 0; row <=2; row++) {
				if (gameboard[row][col] == i) {
					if ((gameboard[row+1][col] == i) && (gameboard[row+2][col] == i) && (gameboard[row+3][col] == i)) {
						results(i);
						return true;
					}
				}
			}
		}
	}
				
	//diagonal checks
	for (i=1; i<=2; i++) {
		for (col = 0; col <=3; col++) {
			for (row = 0; row <=2; row++) {
				if (gameboard[row][col] == i) {
					if ((gameboard[row+1][col+1] == i) && (gameboard[row+2][col+2] == i) && (gameboard[row+3][col+3] == i)) {
						results(i);
						return true;
					}
				}
			}
		}
	}
								
	for (i=1; i<=2; i++) {
		for (col = 0; col <=3; col++) {
			for (row = 3; row <=5; row++) {
				if (gameboard[row][col] == i) {
					if ((gameboard[row-1][col+1] == i) && (gameboard[row-2][col+2] == i) && (gameboard[row-3][col+3] == i)) {
						results(i);
						return true;
					}
				}
			}
		}
	}
}

app.use(express.static(__dirname + '/client'));
var port = process.env.PORT  || 5000;
http.listen(port, function() {
    console.log("Server started, listening on port " + port);
});