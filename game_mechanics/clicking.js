var cookieTotal = 0
var clickMultiplier = 1
var grandmaTotal = 0

//const counter = 0
//on click, increase cookieTotal * clickMultiplier
window.onload = function() {
  document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal
  document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
  document.getElementById("oven_total").innerHTML = clickMultiplier;
  document.getElementById("grandma_total").innerHTML = grandmaTotal
}

function cookieClick() {
  cookieTotal += (1 * clickMultiplier);
  document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal;
  document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
  return cookieTotal
}

function oven() {
  if (cookieTotal < 30) {
    return clickMultiplier
  } else {
    cookieTotal -= 30
    clickMultiplier += 1
    document.getElementById("oven_total").innerHTML = clickMultiplier;
    document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal;
    return clickMultiplier
  }
}

function grandmaPurchase() {
  if (cookieTotal < 300) {
    return grandmaTotal
  } else {
    cookieTotal -= 300
    grandmaTotal += 1
    document.getElementById("grandma_total").innerHTML = grandmaTotal;
    document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal;
    return grandmaTotal
  }
}

function grandmas() {
  for (i = 0; i < grandmaTotal; i++) {
    cookieClick();
    console.log(cookieTotal)
  }
}
window.setInterval(grandmas, 1000 )
document.getElementById('savecookie').onclick = cookieClick;
document.getElementById('oven').onclick = oven;
document.getElementById('grandma').onclick = grandmaPurchase;



// use localStorage
// module.exports = {cookieTotal};
// module.exports = {clickMultiplier};
