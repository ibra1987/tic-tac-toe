import Ui from "./modules/Ui.js";
import indexView from "../views/index.js";
import { Player } from "./modules/Player.js";
import { GameState } from "./modules/Game.js";
import gameView from "../views/game.js";
export const winningCombo = [
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

let player1, player2, game;

const ui = new Ui(indexView);
ui.render();

export function startPlayingRequest(firstId, secondId) {
  const firstPlayerName = document.getElementById(firstId)?.value;
  const secondPlayerName = document.getElementById(secondId)?.value;

  if (!firstPlayerName || !secondPlayerName) {
    return window.alert("please enter players names");
  }

  player1 = new Player("X", firstPlayerName);
  player2 = new Player("O", secondPlayerName);
  game = new GameState(player1, player2);
  ui.setView(gameView);
}

export { player1, player2, game, ui };
