let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let button = document.getElementById("calculator")
let res = document.getElementById("result")

function calcular(n1, n2) {
  return n1 + n2
}

button.addEventListener("click", function() {
  res.innerHTML = calcular(number1.value, number2.value)
})