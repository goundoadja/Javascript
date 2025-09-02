
let number1;
let number2;
let variable = document.querySelector ("h1");


function somme (number1, number2) {

let result = number1 + number2;
variable.innerHTML = ` La somme est égal à ${result}`;
}

somme(10,5);
