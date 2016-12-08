var cookieTotal = 0
var clickMultiplier = 1
var grandmaTotal = 0

//const counter = 0
//on click, increase cookieTotal * clickMultiplier
window.onload = function() {
  document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal
}

function cookieClick() {
  cookieTotal += (1 * clickMultiplier);
  document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal;
  return cookieTotal
}

function oven() {
  if (cookieTotal < 30) {
    return clickMultiplier
  } else {
    cookieTotal -= 30
    clickMultiplier += 1
    return clickMultiplier
  }
}

function grandmaPurchase() {
  if (cookieTotal < 300) {
    return grandmaTotal
  } else {
    cookieTotal -= 300
    grandmaTotal += 1
    return grandmaTotal
  }
}

function grandmas() {
  for (i = 0; i === grandmaTotal; i++) {
    cookieClick();
    console.log(cookieTotal)
  }
}
window.setInterval(grandmas(), 1000 )
document.getElementById('savecookie').onclick = cookieClick;
document.getElementById('oven').onclick = oven;
document.getElementById('grandma').onclick = grandmaPurchase;



// use localStorage
// module.exports = {cookieTotal};
// module.exports = {clickMultiplier};
