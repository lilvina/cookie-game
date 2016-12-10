var cookieTotal = 0
var clickMultiplier = 1
var grandmaTotal = 0
var bakeryTotal = 0

//const counter = 0
//on click, increase cookieTotal * clickMultiplier
window.onload = function() {
  document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal
  document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
  document.getElementById("oven_total").innerHTML = clickMultiplier;
  document.getElementById("grandma_total").innerHTML = grandmaTotal
  document.getElementById("bakery_total").innerHTML = bakeryTotal
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
    document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
    return clickMultiplier
  }
}

function bakeryPurchase() {
  if (cookieTotal < 80000) {
    return bakeryTotal
  } else {
    cookieTotal -= 80000
    clickMultiplier *= 2
    grandmaTotal *= 2
    bakeryTotal += 1
    document.getElementById("oven_total").innerHTML = clickMultiplier;
    document.getElementById("grandma_total").innerHTML = grandmaTotal;
    document.getElementById("bakery_total").innerHTML = bakeryTotal;
    document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal;
    document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
    return bakeryTotal
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
    document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
    return grandmaTotal
  }
}

function grandmas() {
  for (i = 0; i < grandmaTotal; i++) {
    cookieClick();
  }
}

function farmDiv(){
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Farm node!!!");
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById("item");
  document.body.insertAfter(newDiv, currentDiv);
}

if(bakeryTotal === 2){
  farmDiv();
}

window.setInterval(grandmas, 1000 )
document.getElementById('savecookie').onclick = cookieClick;
document.getElementById('oven').onclick = oven;
document.getElementById('grandma').onclick = grandmaPurchase;
document.getElementById('bakery').onclick = bakeryPurchase;



// use localStorage
// module.exports = {cookieTotal};
// module.exports = {clickMultiplier};
