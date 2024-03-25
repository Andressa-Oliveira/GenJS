const leia = require('readline-sync');
let ossos, classe, comida;

ossos = leia.question("Ossos: ");
classe = leia.question("Classe: ");
comida = leia.question("Comida: ");

if (ossos === "vertebrado") {
    if (classe === "ave") {
        if (comida === "carnivoro") {
            console.log("Águia")
        } else {
            console.log("Pomba")
        }

    } else
        if (comida === "herbivoro") { console.log("Vaca") }
        else { console.log("Humano") }

} else if (classe === "inseto") 
        if (comida === "hematofago") {
            console.log("Pulga")
        }
    else {
        console.log("Lagarta")
    }

else if (classe === "anelideo")
    if (comida === "hematofago") 
        console.log("Sanguessura")
    
        
     else {
        console.log("Minhoca")
    }

