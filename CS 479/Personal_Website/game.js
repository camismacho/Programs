/*Author: Joseph Camacho-Terrazas*/
/*game.js*/

/*Variables*/
var game_active = false; 
var current_player = 0; 
var gameboard = []; 
var player_color = [];
player_color[1] = "RED";
player_color[2] = "BLUE";
var p1name = "";
var p2name = "";
var winner = "";
var p1wins = 0;
var p2wins = 0;
			
/*Functions*/

//prompts for the player's names at each page load
function getNames() {
	p1name = prompt("Enter Player 1's Name: ","Player 1");
	p2name = prompt("Enter Player 2's Name: ","Player 2");
	startGame();
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
	//create scoreboard
	updateScoreboard();
	//draw the board, set player turn			
    drawBoard();
	current_player = 1;
	turnManager();
}

//draws the board and checks for a win states
function drawBoard() {
	winManager();
	for (col = 0; col<=6; col++) {
		for (row=0; row<=5; row++) {
			document.getElementById('square_' + row + '_' + col).innerHTML = "<span class='piece player" + gameboard[row][col] + "'> </span>";
		}	
	}
}

//changes game info to reflect who's turn it is
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
			
//drops a piece and attributes it to a player, and switches the turn
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

				turnManager();
				return true;
			}
		}
	}
}

//various loops to check for a win
//checks for wins horizontally, vertically, and diagonally
function winManager() {
				
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

	document.getElementById('game_info').innerHTML = "<p class = 'winner'>Winner Winner Chicken Dinner! Congrats " + winner + "</p>";
	updateScoreboard(); 
}

//updates the scoreboard
function updateScoreboard() {
	document.getElementById('scoreboard').innerHTML = "<p>---Scoreboard---" + "<br>" + p1name + " Wins: " + p1wins + "<br>" + p2name + " Wins: " + p2wins + "</p>";
}