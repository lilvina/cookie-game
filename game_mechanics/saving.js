// const cookieTotal = require('clicking')

// setItem and getItem are referencing objects.
//

function save() {
  localStorage.setItem("cookieTotal", JSON.stringify(cookieTotal));
  localStorage.setItem("clickMultiplier", JSON.stringify(clickMultiplier));
  localStorage.setItem("grandmaTotal", JSON.stringify(grandmaTotal));
  localStorage.setItem("bakeryTotal", JSON.stringify(bakeryTotal));
}

function newGame() {
  localStorage.clear();
  cookieTotal = 0
  clickMultiplier = 1
  grandmaTotal = 0
  bakeryTotal = 0
  localStorage.setItem("cookieTotal", JSON.stringify(cookieTotal));
  localStorage.setItem("clickMultiplier", JSON.stringify(clickMultiplier));
  localStorage.setItem("grandmaTotal", JSON.stringify(grandmaTotal));
  localStorage.setItem("bakeryTotal", JSON.stringify(bakeryTotal));
  location.reload();
}

function load() {
  if (localStorage.getItem("cookieTotal") === null || localStorage.getItem("clickMultiplier") === null || localStorage.getItem("grandmaTotal") === null || localStorage.getItem("bakeryTotal") === null) {
    cookieTotal = 0
    clickMultiplier = 1
    grandmaTotal = 0
    bakeryTotal = 0
  } else {
    cookieTotal = JSON.parse(localStorage.getItem("cookieTotal"));
    clickMultiplier = JSON.parse(localStorage.getItem("clickMultiplier"));
    grandmaTotal = JSON.parse(localStorage.getItem("grandmaTotal"));
    bakeryTotal = JSON.parse(localStorage.getItem("bakeryTotal"));
  };
}

window.setInterval(save, 1000)

// document.getElementById('savegame').onclick = save;
document.getElementById('newgame').onclick = newGame;
document.addEventListener("DOMContentLoaded", load());
