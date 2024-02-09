import { startPlayingRequest } from "../js/main.js";

export default function indexView() {
  const container = document.createElement("div");
  container.className = "container";

  container.innerHTML = `
      <h1 class="heading">  Tic Tac Toe game <h1>
      <p>Enter your names and start playing now!</p>
      <span>3 rounds game.</span>
     
  `;
  const firstPlayer = input({
    type: "text",
    placeholder: "Your name here...",
    id: "player1",
    labelText: "Player 1's name:",
    labelClass: "label",
  });
  container.appendChild(firstPlayer.container);
  const secondPlayer = input({
    type: "text",
    placeholder: "Your name here... ",
    id: "player2",
    labelText: "Player 2's name:",
    labelClass: "label",
  });

  container.appendChild(secondPlayer.container);
  const firstPlayerId = firstPlayer.input.id;
  const secondPlayerId = secondPlayer.input.id;
  console.log(firstPlayerId);

  container.appendChild(
    Button(() => startPlayingRequest(firstPlayerId, secondPlayerId))
  );

  return container;
}

function Button(onclick) {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerHTML = "Start Playing";
  btn.onclick = function () {
    onclick();
  };
  return btn;
}

function input(props) {
  const container = document.createElement("div");
  container.className = "input_container";
  const input = document.createElement("input");
  const label = document.createElement("label");
  label.textContent = props.labelText;
  label.htmlFor = props.labelFor;
  label.className = props.labelClass;
  input.type = props.type || "text";
  input.id = props.id;
  input.placeholder = props.placeholder;
  input.className = "input";

  container.appendChild(label);
  container.appendChild(input);

  return { input, container };
}
