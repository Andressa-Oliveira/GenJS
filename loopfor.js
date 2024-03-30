const leia = require("readline-sync");

let nome;
let contador;

for (contador = 1; contador < 4; contador++){
   nome = leia.question("Nome: ");
   console.log("O " + contador + "o. nome digitado foi: " + nome);
}