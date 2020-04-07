Distributed Multiplayer Game
Author: Joseph Camacho-Terrazas

To Run:
1: Type npm install in Terminal.
2: Type node server.js (Terminal should say listening on port 5000)
3: Open browser and go to 127.0.0.1:5000

Explanation
* The first two windows will be player windows
* More than 2 connections are handled as "spectators" that can watch the game.
  They were supposed to be implemented as separate game rooms for extra credit.
* The players can connect to the server fine, but the game pieces don't show up.
  I couldn't figure out why the pieces wouldn't display for at least 1 player.
* Turns aren't reflected properly either.....