
var button = document.querySelector('#plus');

button.onclick = function() {
let num1 = +prompt("Please enter number one:");
let num2 = +prompt("Please enter number two:");
let sign = prompt("Please enter +-/*");

if (sign === "+") {
    result = num1 + num2;
} else if (sign === "-") {
    result = num1 - num2;
} else if (sign === "/") {
    result = num1 / num2;
} else if (sign === "*") {
    result = num1 * num2;
}

alert("Your result is " + result);
}
