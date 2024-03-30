const leia = require("readline-sync");
let numero, contador;

numero = leia.questionInt("Calcule a tabuada do: ");

for (contador = 1; contador <= 10; contador++) {
    console.log(numero + "*" + contador + "= " + numero*contador);
}