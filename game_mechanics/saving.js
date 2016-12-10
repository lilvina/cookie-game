// const cookieTotal = require('clicking')

// setItem and getItem are referencing objects.
//

function save() {
  localStorage.setItem("cookieTotal", JSON.stringify(cookieTotal));
  localStorage.setItem("clickMultiplier", JSON.stringify(clickMultiplier));
  localStorage.setItem("grandmaTotal", JSON.stringify(grandmaTotal));
  localStorage.setItem("bakeryTotal", JSON.stringify(bakeryTotal));
  localStorage.setItem("cowTotal", JSON.stringify(cowTotal));
  localStorage.setItem("milkTotal", JSON.stringify(milkTotal));
}

function newGame() {
  localStorage.clear();
  cookieTotal = 0
  clickMultiplier = 1
  grandmaTotal = 0
  bakeryTotal = 0
  cowTotal = 0
  milkTotal = 0
  localStorage.setItem("cookieTotal", JSON.stringify(cookieTotal));
  localStorage.setItem("clickMultiplier", JSON.stringify(clickMultiplier));
  localStorage.setItem("grandmaTotal", JSON.stringify(grandmaTotal));
  localStorage.setItem("bakeryTotal", JSON.stringify(bakeryTotal));
  localStorage.setItem("cowTotal", JSON.stringify(cowTotal));
  localStorage.setItem("milkTotal", JSON.stringify(milkTotal));
  location.reload();
}

function load() {
  if (localStorage.getItem("cookieTotal") === null || localStorage.getItem("clickMultiplier") === null || localStorage.getItem("grandmaTotal") === null || localStorage.getItem("bakeryTotal") === null || localStorage.getItem("cowTotal") === null || localStorage.getItem("milkTotal") === null ) {
    cookieTotal = 0
    clickMultiplier = 1
    grandmaTotal = 0
    bakeryTotal = 0
    milkTotal = 0
    cowTotal = 0
  } else {
    cookieTotal = JSON.parse(localStorage.getItem("cookieTotal"));
    clickMultiplier = JSON.parse(localStorage.getItem("clickMultiplier"));
    grandmaTotal = JSON.parse(localStorage.getItem("grandmaTotal"));
    bakeryTotal = JSON.parse(localStorage.getItem("bakeryTotal"));
    milkTotal = JSON.parse(localStorage.getItem("milkTotal"));
    cowTotal = JSON.parse(localStorage.getItem("cowTotal"));
  };
}

window.setInterval(save, 1000)

// document.getElementById('savegame').onclick = save;
document.getElementById('newgame').onclick = newGame;
document.addEventListener("DOMContentLoaded", load());
