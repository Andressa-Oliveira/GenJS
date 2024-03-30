const leia = require("readline-sync");
let numero, contador;
let nPar = 0
let nImpar = 0
let impar;

for (contador = 1; contador <= 10; contador++) {
    numero = leia.questionInt("Digite o " + contador + "o. número: ");

    if (numero % 2 === 0) {
        nPar = nPar + 1
    }
    else {
        nImpar = nImpar + 1
    }
}


console.log("\nTotal de pares: " + nPar);
console.log("\nTotal de ímpares: " + nImpar);


