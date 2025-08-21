let num1 = 8;
let num2 = 4;
let op = "*";  // podés cambiar por "+", "-", "*", "/"

let resultado;

switch (op) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = num2 === 0 ? "Error: division invalida" : num1 / num2;
    break;
  default:
    resultado = "Operación no válida";
}

console.log("Resultado:", resultado);