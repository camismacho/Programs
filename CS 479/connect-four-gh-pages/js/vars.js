// Create variables for use in our game.
var Game = {};

// Global game config
Game.config = {
  startingPlayer: "black", // Choose 'black' or 'red'.
  takenMsg: "Column is full! Please choose another location.",
  drawMsg: "Game Draw! Try Again?",
  winMsg: "Winner Winner Chicken Dinner! Congrats ",
  countToWin: 4,

  // note: board dimensions are zero-indexed
  boardLength: 6,
  boardHeight: 5,
};

// Global Game State
Game.board = [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]];

Game.currentPlayer = Game.config.startingPlayer;
