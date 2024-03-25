const leia = require('readline-sync');

let nome;
let idade;


nome = leia.question("Nome:");
idade = leia.questionInt("Idade:");

if (idade<18){
    console.log("Você poderá doar a partir de 18 anos de idade")
}
else
if (idade>=60){
    let status = leia.keyInYNStrict("Você já doou sangue? Responda Y para sim ou N para não")

if (status){
    console.log("Você pode doar sangue!")
} 
else {
    console.log("Você não pode doar")
}

}

else console.log("Você pode doar sangue!")