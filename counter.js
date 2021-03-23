const decreaseBtn = document.getElementById('button-decrease')
const increaseBtn = document.getElementById('button-increase')
const counter = document.getElementById('counter')
let count = 0

counter.innerHTML = count

decreaseBtn.addEventListener('click', () => {
  count--
  counter.innerHTML = count
  addStyles()
})

increaseBtn.addEventListener('click', () => {
  count++
  counter.innerHTML = count
  addStyles()
})

// check value of count, conditionally add styles based on value
function addStyles() {
  if (count < 0) {
    counter.classList.add('negative')
  } else if (count > 0) {
    counter.classList.add('positive')
  } else {
    counter.classList.remove('negative')
    counter.classList.remove('positive')
  }
}
