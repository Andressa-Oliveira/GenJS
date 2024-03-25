
const leia = require('readline-sync');


let precoUnitario, quantidade;
let valorTotal;
let produto;

console.log("\n Código: | Produto: |      Valor");
console.log("\n 1 ________HotDog ________ R$10");
console.log("\n 2 ________X-Salada _______R$15");
console.log("\n 3 ________X-Bacon ________R$18");
console.log("\n 4 ________Bauru __________R$12");
console.log("\n 5 ________Sprite _________R$8");
console.log("\n 6 ________Suco de laranja_R$13");

itemSelecionado = leia.questionInt("\nDigite o número correspondente ao produto desejado: ")
quantidade = leia.questionInt("\nDigite a quantidade desejada: ")

switch (itemSelecionado) {
    case 1:
        precoUnitario = 10;
        produto = "HotDog"
        break;
    case 2:
        precoUnitario = 15;
        produto = "X-Salada";
        break;
    case 3:
        precoUnitario = 18;
        produto = "X-Bacon";
        break;
    case 4:
        precoUnitario = 12;
        produto = "Bauru";
        break;
    case 5:
        precoUnitario = 8;
        produto = "Sprite"
        break;
    case 6:
        precoUnitario = 13;
        produto = "Suco de laranja"
        break;
    default:
        console.log("Opção inválida.");
        return;
}

valorTotal = precoUnitario * quantidade;

console.log("Produto: " + produto + "\nTotal: R$" + valorTotal.toFixed(2));
