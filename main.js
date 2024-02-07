"use strict";
const gameBoard = document.querySelector(".game_board");
const currentPlayerField = document.querySelector(".current_player");
const symbolField = document.querySelector(".symbol");

const winningCombo = [
  "123",
  "456",
  "789",
  "147",
  "258",
  "369",
  "579",
  "159",
  "357",
];

class GameState {
  constructor() {
    this.hasAwinner = false;
    this.currentPlayer = null;
    this.winner = null;
  }
  setHasAwinner(value) {
    this.hasAwinner = value;
  }
  setCurrentPlayer(player) {
    this.currentPlayer = player;
    currentPlayerField.textContent = this.currentPlayer.name.toUpperCase();
    symbolField.textContent = this.currentPlayer.symbol;
  }
  setWinner(winner) {
    this.winner = winner;
  }

  resetGame() {
    this.hasAwinner = false;
    this.currentPlayer = null;
    this.winner = null;
  }
}
class Player {
  moves = [];
  constructor(symbol, name) {
    this.symbol = symbol;
    this.name = name;
  }

  play(cell) {
    cell.textContent = this.symbol;
    const id = cell.getAttribute("data-cell");
    this.addMoove(id);
  }

  addMoove(i) {
    this.moves.push(i);
  }

  checkWin() {
    if (this.moves.length < 2) return;
    const comparableMoves = this.moves
      .sort(function (a, b) {
        return a - b;
      })
      .join("");
    return winningCombo.some((combo) => {
      for (let i = 0; i < combo.length; i++) {
        if (!comparableMoves.includes(combo[i])) {
          return false;
        }
      }
      return true;
    });
  }
}
let Player1 = new Player("X", "ahmed");
let Player2 = new Player("O", "ibra");
const game = new GameState();

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 9; i++) {
    const cell = createCell(i + 1);
    gameBoard.appendChild(cell);
  }
  game.setCurrentPlayer(Player1);
});

// game

function createCell(i) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.setAttribute("data-cell", i);
  cell.addEventListener("click", () => checkAndPlay(cell, i));
  return cell;
}

function checkAndPlay(cell, i) {
  if (
    Player1.moves.includes(i.toString()) ||
    Player2.moves.includes(i.toString()) ||
    game.hasAwinner
  ) {
    return;
  }

  game.currentPlayer.play(cell);

  const hasWin = game.currentPlayer.checkWin();
  game.setHasAwinner(hasWin);

  if (hasWin) {
    game.setWinner(game.currentPlayer.name);
    winnerPopUp(game.currentPlayer);
    return;
  } else if (!hasWin && Player1.moves.length + Player2.moves.length === 9) {
    drawPopup();
  }

  toggleCurrtentPlayer();
}

function toggleCurrtentPlayer() {
  if (game.currentPlayer.name === Player1.name) {
    game.setCurrentPlayer(Player2);
  } else if (game.currentPlayer.name === Player2.name) {
    game.setCurrentPlayer(Player1);
  } else {
    game.setCurrentPlayer(null);
  }
}

function winnerPopUp(player) {
  const div = document.createElement("div");
  div.className = "winner_popup";
  div.textContent = `Woah! Winner is ${player.name}`;
  document.body.appendChild(div);
}

function drawPopup() {
  const div = document.createElement("div");
  div.className = "winner_popup";
  div.textContent = "Seems like it'is a draw!";
  document.body.appendChild(div);
}
