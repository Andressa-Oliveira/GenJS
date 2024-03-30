const leia = require('readline-sync');

let num1, num2;

num1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
num2 = leia.questionInt("Digite o segundo numero do intervalo: ");


if (num1 >= num2) {
    console.log("Intervalo invalido.");
    process.exit(); 
}

for (let contador = num1; contador <= num2; contador++) {
    
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} e multiplo de 3 e 5`);
    }
}