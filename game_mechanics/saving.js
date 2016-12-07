
function save() {
  localStorage.setItem(cookieTotal, JSON.stringify(cookieTotal));
  localStorage.setItem(clickMultiplier, JSON.stringify(clickMultiplier));
}

function load() {
    cookieTotal = localStorage.parse(localStorage.getItem(cookieTotal));
    clickMultiplier = localStorage.parse(localStorage.getItem(clickMultiplier));

}

document.getElementById('#savegame').onclick = save();

module.exports = {save}
module.exports = {load}
