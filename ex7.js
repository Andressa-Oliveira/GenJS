const leia = require('readline-sync');


let numero1, numero2;
let total, operacao;

console.log("\nSoma          : 1")
console.log("\nSubtração     : 2")
console.log("\nMultiplicação : 3")
console.log("\nDivisão       : 4")

numero1 = leia.questionFloat("\nDigite o 1º número: ")
numero2 = leia.questionFloat("\nDigite o 2º número: ")
operacao = leia.questionInt("\nOperação: ")

switch (operacao) {
    case 1:
        total = numero1 + numero2;

        console.log(numero1, "+", numero2, "=", total.toFixed(2))
        break;

    case 2:
        total = numero1 - numero2;
        console.log(numero1, "-", numero2, "=", total.toFixed(2))
        break;

    case 3:
        total = numero1 * numero2;
        console.log(numero1, "x", numero2, "=", total.toFixed(2))
        break;

    case 4:
        total = numero1 / numero2;
        console.log(numero1, "/", numero2, "=", total.toFixed(2))

    default:
        console.log("Operação Inválida");
}
