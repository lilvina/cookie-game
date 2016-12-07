var cookieTotal = 0
var clickMultiplier = 1
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
    clickMultiplier += 1
    return clickMultiplier
  }
}



document.getElementById('savecookie').onclick = cookieClick;

// use localStorage
// module.exports = {cookieTotal};
// module.exports = {clickMultiplier};
