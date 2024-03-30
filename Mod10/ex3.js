const leia = require('readline-sync');

let idade;
let Menor21 = 0;
let Maior50 = 0;

console.log("Digite uma idade.");

// Loop para ler as idades das pessoas
while (true) {
    idade = leia.questionInt("Idade: ");

    // Verifica se a idade é negativa para encerrar a leitura dos dados
    if (idade < 0) {
        break;
    }

    // Conta as idades
    if (idade < 21) {
        Menor21++;
    } else if (idade > 50) {
        Maior50++;
    }
}

// Exibe o total de pessoas com menos de 21 anos e mais de 50 anos
console.log(`Total de pessoas menores de 21 anos: ${Menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${Maior50}`);
