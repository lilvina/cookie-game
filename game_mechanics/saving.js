
var save(savedVariable) {
  localStorage.setItem(savedVariable, JSON.stringify(savedVariable))
};

var load() {
    cookieTotal = localStorage.parse(localStorage.getItem(cookieTotal));
    clickMultiplier = localStorage.parse(localStorage.getItem(clickMultiplier));

}

save(cookieTotal);
save(clickMultiplier);
