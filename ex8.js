const leia = require('readline-sync');

let valor, saldo = 1000, operacao;

console.log("Informe a Operação");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Deposito");
operacao = leia.questionInt("Digite a opcao desejada: ")

switch(operacao){
    case 1:
        console.log("Saldo");

        console.log(`\nSaldo: ${(saldo).toFixed(2)}`);
    break;

    case 2:
        console.log("Saque");

        valor= leia.questionFloat("Valor do saque: ")

        if(saldo > valor)
            console.log(`\nNovo saldo: ${(saldo - valor).toFixed(2)}`);
        else
            console.log("\nSaldo insuficiente");
        
    break;

    case 3:
        console.log("Deposito");

        valor = leia.questionFloat("Digite o valor:")

        console.log(`\nNovo saldo: R$${(saldo + valor).toFixed(2)}`);
    break;

    default:
        console.log("Operação Inválida");
}