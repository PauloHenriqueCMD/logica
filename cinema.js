const readline = require("readline-sync");

let idade = parseInt(readline.question("Qual sua idade?"));
let carteira = readline.question("Você é estudante ou idoso? (s/n)"); 
if(idade>= 16) {
    console.log("Entrada permitida.");

if (carteira.toLowerCase() === "s") {
    console.log("Você tem direito a meia-entrada");
}
else  {
    console.log("Você paga o valor integral.");
}
}else { 
    console.log("Entrada não permitida para menores de 16 anos");
}






