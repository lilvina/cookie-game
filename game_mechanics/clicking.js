var cookieTotal = 0
var clickMultiplier = 1
var grandmaTotal = 0
var bakeryTotal = 0
var cowTotal = 0
var milkTotal = 0

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
  var newContent = document.createTextNode("Farm Mode Unlocked!");
  var cowBtn = document.createElement("button");
  var milkBtn = document.createElement("button");
  var t = document.createTextNode("Buy Cows");
  var m = document.createTextNode("Buy Milk");
  var innerDivCow = document.createElement("div");
  var innerDivMilk = document.createElement("div");
  var cowExplanation = document.createTextNode(" 40,000 Cookies for a Cow")
  var milkExplanation = document.createTextNode(" Each cow eats 10,000 cookies")
  var cowCount = document.createTextNode("0")
  var milkCount = document.createTextNode("0")
  var cowCountDiv = document.createElement("div");
  var milkCountDiv = document.createElement("div");

  newDiv.appendChild(newContent);
  newDiv.appendChild(innerDivCow);
  newDiv.appendChild(innerDivMilk);

  cowCountDiv.appendChild(cowCount);
  milkCountDiv.appendChild(milkCount);


  newDiv.style.backgroundImage = "url('farm_bg.jpg')";
  newDiv.className = "farm-div"

  cowBtn.id = "cow-button"
  milkBtn.id = "milk-button"
  cowCountDiv.id = "cow-count"
  milkCountDiv.id = "milk-count"


  cowBtn.appendChild(t)
  milkBtn.appendChild(m)
  innerDivCow.appendChild(cowBtn)
  innerDivCow.appendChild(cowExplanation)
  innerDivCow.appendChild(cowCountDiv)

  innerDivMilk.appendChild(milkBtn)
  innerDivMilk.appendChild(milkExplanation)
  innerDivMilk.appendChild(milkCountDiv)
  // newDiv.innerHTML =
  var currentDiv = document.getElementById("item");
  currentDiv.parentNode.insertBefore(newDiv, currentDiv);
  document.getElementById('cow-button').onclick = cowPurchase;
  document.getElementById('milk-button').onclick = milkCows;
}
var checkFarmFunctionHasRan = 0
function farmCheck() {
  if(bakeryTotal >= 2 && checkFarmFunctionHasRan < 1){
    farmDiv();
    checkFarmFunctionHasRan = 1
  }
}

function cowPurchase() {
  if (cookieTotal < 40000) {
    return cowTotal
  } else {
    cookieTotal -= 40000;
    cowTotal += 1
    document.getElementById("cow-count").innerHTML = cowTotal
    document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal;
    document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
  }
}

function milkCows() {
  if (cookieTotal < (10000 * cowTotal)) {
    return milkTotal
  } else {
    cookieTotal -= 10000 * cowTotal
    milkTotal += cowTotal
    document.getElementById("milk-count").innerHTML = milkTotal
    document.getElementById("cookie_total").innerHTML = "Total Cookies: " + cookieTotal;
    document.getElementById("cookie_total2").innerHTML = "Total Cookies: " + cookieTotal
  }
}

window.setInterval(grandmas, 1000 )
window.setInterval(farmCheck, 1000 )

document.getElementById('savecookie').onclick = cookieClick;
document.getElementById('oven').onclick = oven;
document.getElementById('grandma').onclick = grandmaPurchase;
document.getElementById('bakery').onclick = bakeryPurchase;



// use localStorage
// module.exports = {cookieTotal};
// module.exports = {clickMultiplier};
