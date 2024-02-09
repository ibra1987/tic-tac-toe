drawPopup() {
    const div = document.createElement("div");
    div.className = "winner_popup";
    div.textContent = "Seems like it'is a draw!";
    app.appendChild(div);
    return;
  }