const decreaseBtn = document.getElementById('button-decrease')
const increaseBtn = document.getElementById('button-increase')
const counter = document.getElementById('counter')
let count = 0;

decreaseBtn.addEventListener('click', () => {
  count--
  counter.innerHTML = count
  counterStyle()
})

increaseBtn.addEventListener('click', () => {
  count++
  counter.innerHTML = count
  counterStyle()
})

function counterStyle() {
  if (count < 0) {
    counter.classList.add('negative')
  } else if (count > 0) {
    counter.classList.add('positive')
  } else {
    counter.classList.remove('negative')
    counter.classList.remove('positive')
  }
}
