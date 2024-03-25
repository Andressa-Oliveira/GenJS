/*Escreva um algoritmo em Java, que leia um número inteiro via teclado e mostre na tela
uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.*/

const leia = require('readline-sync');

let numero;

numero = leia.questionInt("Digite um número:");

if (numero > 0 && numero % 2 === 0) {
    console.log("Número ", numero, " é positivo e par")
} else if (numero > 0 && numero % 2 != 0) {
    console.log("Número ", numero, " é positivo e ímpar")
}
else if (numero < 0 && numero % 2 === 0) {
    console.log("Número ", numero, " é negativo e par")
}
else if (numero < 0 && numero%2!=0 ){
    console.log("Número " , numero , " é negativo e ímpar")}