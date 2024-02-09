import { game } from "../js/main.js";
import { app } from "../js/modules/Ui.js";

function gameBoard() {
  const _gameBoard = document.createElement("div");
  _gameBoard.className = "game_board";
  return _gameBoard;
}

export default function gameView(props) {
  const _game_board = gameBoard();
  for (let i = 0; i < 9; i++) {
    const cell = renderCell(i + 1);
    _game_board.appendChild(cell);
  }
  if (props.popUp) {
    app.appendChild(popUp(props.popUp));
  }

  return _game_board;
}

function renderCell(i) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.setAttribute("data-cell", i);
  cell.addEventListener("click", () => game.checkAndPlay(cell, i));
  return cell;
}

function popUp(props) {
  const div = document.createElement("div");
  div.className = "popup";
  div.textContent =
    props.type === "win"
      ? `Woah! Winner is ${props.winnerName} `
      : "Seems like it's a draw!!!";
  return div;
}
