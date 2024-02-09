import { Player } from "./Player.js";
import { GameState } from "./Game.js";
import gameView from "../../views/game.js";

export const app = document.querySelector("#app");
export const currentPlayerField = document.createElement("div");
currentPlayerField.className = ".current_player";
export const symbolField = document.createElement("div");
symbolField.className = ".symbol";
app.appendChild(currentPlayerField);
app.appendChild(symbolField);
export class Ui {
  constructor(view, props = {}) {
    this.view = view(props);
  }

  setView(view, props = {}) {
    while (app.firstChild !== null) {
      app.removeChild(app.firstChild);
    }

    this.view = view(props);
    this.render();
  }

  render() {
    app.appendChild(this.view);
  }
}

export default Ui;
