var cookieTotal = 0
var clickMultiplier = 1
var grandmaTotal = 0
//const counter = 0
//on click, increase cookieTotal * clickMultiplier
function cookieClick() {
  cookieTotal += (1 * clickMultiplier);
  return cookieTotal
}

function oven() {
  if (cookieTotal < 300) {
    return "There aren't enough cookies to purchase this now." + clickMultiplier
  } else {
    cookieTotal - 300
    clickMultiplier += 1
    return clickMultiplier
  }
}

function grandmaPurchase() {
  if (cookieTotal < 300) {
    return "There aren't enough cookies to purchase this now." + clickMultiplier
  } else {
    grandmaTotal += 1
    return grandmaTotal
  }
}

function grandmas() {
  for (i = 0; i === grandmaTotal; i++) {
    cookieClick();
  }
}

document.setInterval( grandmas(), 5000 )

document.getElementById('savecookie').onclick = cookieClick;
document.getElementById('oven').onclick = oven;
document.getElementById('grandma').onclick = grandmaPurchase;


// use localStorage
// module.exports = {cookieTotal};
// module.exports = {clickMultiplier};
