var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var button = document.getElementById("calculator");
var res = document.getElementById("result");
function calcular(n1, n2) {
    return n1 + n2;
}
button.addEventListener("click", function () {
    res.innerHTML = calcular(+number1.value, +number2.value).toString();
});
