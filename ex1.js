/*Faça um algoritmo em JavaScript que leia 3 valores inteiros A, B e C e 
imprima na tela se a soma de A + B é maior, menor ou igual a C. */

const leia = require('readline-sync');

let A, B, C;

A = leia.questionInt("Digite o número A:");
B = leia.questionInt("Digite o número B:");
C = leia.questionInt("Digite o número C:");

if ((A + B) > C) {
    console.log("A+B>C")
}
else if ((A + B < C)) {
    {
        console.log("A+B<C")
    }
} else{
console.log("A+B=C")
}

