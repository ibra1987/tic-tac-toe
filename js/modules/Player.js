import { winningCombo } from "../main.js";

export class Player {
  moves = [];
  constructor(symbol, name) {
    this.symbol = symbol;
    this.name = name;
  }

  play(cell) {
    cell.textContent = this.symbol;
    const id = cell.getAttribute("data-cell");
    this.addMove(id);
  }

  addMove(i) {
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
