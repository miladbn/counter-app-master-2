let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetIcon = document.getElementById("reset");
let num = 0;

function increase() {
  num += 1;
  changeDum(num);
}

function decrease() {
  if (num <= 0) {
    reset();
  } else {
    num -= 1;
    changeDum(num);
  }
}

function reset() {
  num = 0;
  changeDum(num);
}

function changeDum(num) {
  counter.innerHTML = num;
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetIcon.addEventListener("click", reset);

module.exports = { changeDum, increase, decrease, reset };
