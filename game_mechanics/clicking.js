const cookieTotal = 0
const clickMultiplier = 1
//const counter = 0
//on click, increase cookieTotal * clickMultiplier
function cookieClick() = {
  cookieTotal += (1 * clickMultiplier);
  return cookieTotal
}

document.getElementById('#savecookie').onclick = cookieClick;

// use localStorage
module.exports = {cookieTotal};
module.exports = {clickMultiplier};
