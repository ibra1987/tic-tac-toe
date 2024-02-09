function winnerPopUp(player) {
  const div = document.createElement("div");
  div.className = "winner_popup";
  div.textContent = `Woah! Winner is ${player}`;
  app.appendChild(div);
  return div;
}
