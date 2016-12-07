// const cookieTotal = require('clicking')

// setItem and getItem are referencing objects.
//
function save() {
  localStorage.setItem("cookieTotal", JSON.stringify(cookieTotal));
  localStorage.setItem("clickMultiplier", JSON.stringify(clickMultiplier));
}

function newGame() {
  localStorage.setItem("cookieTotal", JSON.stringify(0));
  localStorage.setItem("clickMultiplier", JSON.stringify(0));
}

function load() {
    cookieTotal = JSON.parse(localStorage.getItem("cookieTotal"));
    clickMultiplier = JSON.parse(localStorage.getItem("clickMultiplier"));

}


document.getElementById('savegame').onclick = save;
document.getElementById('newgame').onclick = newGame;
document.addEventListener("DOMContentLoaded", load());
