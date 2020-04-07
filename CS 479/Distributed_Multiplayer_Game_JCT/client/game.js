/*Author: Joseph Camacho-Terrazas*/
/*game.js*/

/*Variables*/
var game_active = false; 
var current_player = 0; 
var gameboard = []; 
var p1name = "";
var p2name = "";
var winner = "";
var p1wins = 0;
var p2wins = 0;
var player_color = [];
player_color[1] = "RED";
player_color[2] = "BLUE";
var isTurn = false;
var player = 0;
var socket;

$(document).ready(function() {

	//drawBoard();

	socketFunctions();

	setStatus("Waiting for Server");
});

//jquery to edit html
function setStatus(words) {
	$(".status").html(words);
}

//functions to handle client requests
function socketFunctions() {
	if(!socket) {
		socket = io();
	}

	socket.on("connected", function(role) {
		player = role;
		if(player == 0) {
			setStatus("Game is full, you are a spectator.");
		}
		else {
			setStatus("Connected to server. Waiting for other player.");
		}
	});

	//starts a new game
	socket.on("newGame", function() {
		console.log("Game started! Drawing Board");
		startGame();
	});

	//draws board state
	socket.on("updateBoard", function(board) {
		console.log("Update Board");
		drawBoard();
	});

	//handles turn switch
	socket.on("switchTurn", function() {
		console.log("Next Turn");
		setStatus("Your Turn");
		turnManager();
		isTurn = true;
	});

	//handles win
	socket.on("win", function() {
		setStatus("Game Over! Please Reset!");

	});
	
	socket.emit("startGame");

	
}

function startGame() {
	//declares the game as active
	game_active = true; 
		//setup game board			
	for (row=0; row<=5; row++) {
		gameboard[row] = [];
		for (col=0; col<=6; col++) {
			gameboard[row][col] = 0;
		}	
	}		
	//sets button text to reset
	document.getElementById('begin_game').innerHTML = "Reset";
	//create scoreboard
	updateScoreboard();
	//draw the board, set player turn			
    drawBoard();
	current_player = 1;
	turnManager();
}

function dropManager() {
	socket.emit("dropPiece", col);
	setStatus("Opponents Turn");
	isTurn = false;
	turnManager();
}

//prompts for the player's names at each page load
//also can update names mid game while keeping scores
function getNames() {
p1name = prompt("Enter Player 1's Name: ","Player 1");
p2name = prompt("Enter Player 2's Name: ","Player 2");
startGame();
}

//draws the board and checks for a win states
//the game works by assigning each cell a row and col label
//when the player places a piece, that cell is attributed to the player
function drawBoard() {
	//winManager();
	for (col = 0; col<=6; col++) {
		for (row=0; row<=5; row++) {
			document.getElementById('square_' + row + '_' + col).innerHTML = "<span class='piece player" + gameboard[row][col] + "'> </span>";
		}	
	}
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
			
//drops a piece and attributes the cell to a player, and switches the turn
function dropPiece(col) {
	if (game_active) {
		for (row=5; row>=0; row--) { 
			if (gameboard[row][col] == 0) {
				gameboard[row][col] = current_player;
				drawBoard();if (current_player == 1) {
					current_player = 2;
				} else {
					current_player = 1;
				}
				//call turnManager to reflect player switch
				turnManager();
				return true;
			}
		}
	}
}

/*/various loops to check for a win
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
}*/
			
//takes the winning player and displays a win message
function results(winningPlayer) {
	//ends game so it can't be played until reset
	game_active = false;

	if (winningPlayer == 1) {
		winner = p1name;
		p1wins++;
	}

	else if (winningPlayer == 2) {
		winner = p2name;
		p2wins++;
	}
	//display a win message with winner's name
	document.getElementById('game_info').innerHTML = "<p class = 'winner'>Winner Winner Chicken Dinner! Congrats " + winner + "!</p>";
	updateScoreboard(); 
	//changes reset button text to new game for ease of use
	document.getElementById('begin_game').innerHTML = "New Game";
}

//updates the scoreboard
//scores stay across name changes
function updateScoreboard() {
	document.getElementById('scoreboard').innerHTML = "<p>---Scoreboard---" + "<br>" + p1name + " Wins: " + p1wins + "<br>" + p2name + " Wins: " + p2wins + "</p>";
}