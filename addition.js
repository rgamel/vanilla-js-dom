const sumButton = document.getElementById("sum-button");
const result = document.getElementById("result");

sumButton.addEventListener("click", (event) => {
  event.preventDefault();

  const inputs = document.getElementsByTagName("input");

  let total = 0;
  for (let i = 0; i < inputs.length; i++) {
    total += inputs[i].value;
  }

  result.innerHTML = total;
});
