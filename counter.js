const decreaseBtn = document.getElementById("button-decrease");
const increaseBtn = document.getElementById("button-increase");
const counter = document.getElementById("counter");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count = count + 1;
  counter.innerHTML = count;
  addStyles();
});

decreaseBtn.addEventListener("click", () => {
  count = count - 1;
  counter.innerHTML = count;
  addStyles();
});

function addStyles() {
  // counter.classList
  if (count > 0) {
    counter.classList.add("positive");
  } else if (count < 0) {
    counter.classList.add("negative");
  } else {
    counter.classList.remove("positive");
    counter.classList.remove("negative");
  }
}
