const leia = require('readline-sync');

let nome;
let cargo;
let salario, novoSalario;
let reajuste;

console.log("Cargo        | Código  | Percentual de Reajuste")
console.log("Gerente      | 1       | 10%")
console.log("Vendedor     | 2       | 7%")
console.log("Supervisor   | 3       | 9%")
console.log("Motorista    | 4       | 6%")
console.log("Estoquista   | 5       | 5%")
console.log("Técnico de TI| 6       | 8%")

nome = leia.question("Nome: ");
cargo = leia.questionInt("Código do cargo: ")
salario = leia.questionFloat("Salário atual: ")

switch (cargo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.1;
        break;

    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break;

    case 3:
        cargo = "Supervisor"
        reajuste = 0.09;
        break;

    case 4:
        cargo = "Motorista"
        reajuste = 0.06;
        break;

    case 5:
        cargo = "Estoquista"
        reajuste = 0.05;
        break;

    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08;
        break;

    default:
        console.log("Código inválido");
    return;
}

    novoSalario = salario + (reajuste * salario)

        console.log("\nNome: " + nome);
        console.log("\nCargo: " + cargo);
        console.log("\nNovo salário: R$" + novoSalario.toFixed(2));

And