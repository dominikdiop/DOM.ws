var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deletebuttons = Array.from(document.querySelectorAll(".fa-trash-alt"));
var plusbtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusbtns = Array.from(document.querySelectorAll(".fa-minus-circle"));
var cards = Array.from(document.querySelectorAll(".card"));

for (let fav of favs) {
  fav.addEventListener("click", function () {
    if (fav.style.color == "black") {
      fav.style.color = "red";
    } else {
      fav.style.color = "black";
    }
  });
}
for (let i in deletebuttons) {
  deletebuttons[i].addEventListener("click", function () {
    cards[i].remove();
    totalprice();
  });
}
for (let plus of plusbtns) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerHTML++;
    totalprice();
  });
}
for (let minus of minusbtns) {
  minus.addEventListener("click", function () {
    minus.previousElementSibling.innerHTML > 0
      ? minus.previousElementSibling.innerHTML--
      : null;
    totalprice();
  });
}

function totalprice() {
  let qute = Array.from(document.querySelectorAll(".qute"));
  let price = Array.from(document.querySelectorAll(".unitt-price"));
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + qute[i].innerHTML * price[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = sum;
}
