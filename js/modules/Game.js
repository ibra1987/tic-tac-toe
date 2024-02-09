import gameView from "../../views/game.js";
import { ui } from "../main.js";
import { currentPlayerField, symbolField } from "./Ui.js";

export class GameState {
  constructor(player1, player2) {
    this.currentPlayer = player1;
    this.players = [player1, player2];
    this.winner = null;
    this.rounds = 3;
  }

  checkAndPlay(cell, i) {
    if (
      this.players[0].moves.includes(i.toString()) ||
      this.players[1].moves.includes(i.toString()) ||
      this.hasAwinner
    ) {
      return;
    }

    this.currentPlayer.play(cell);

    const hasaWinner = this.currentPlayer.checkWin();

    if (hasaWinner) {
      this.setWinner(this.currentPlayer.name);
      ui.setView(gameView, {
        popUp: {
          type: "win",
          winnerName: this.winner,
        },
      });

      ui.render();

      return true;
    } else if (
      !hasaWinner &&
      this.players[0].moves.length + this.players[1].moves.length === 9
    ) {
    }

    this.toggleCurrentPlayer();
  }
  toggleCurrentPlayer() {
    if (this.currentPlayer.name === this.players[0].name) {
      this.setCurrentPlayer(this.players[1]);
    } else if (this.currentPlayer.name === this.players[1].name) {
      this.setCurrentPlayer(this.players[0]);
    } else {
      this.setCurrentPlayer(null);
    }
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
    this.rounds = 3;
  }
}
