const readline = require("readline-sync");
 let peso = parseInt(readline.question("Qual o peso?"));
    let altura = readline.question("Qual a altura?");
        let resultado = peso/(altura*altura);
    console.log(resultado);
    if(peso>= 16) {
        console.log("Entrada permitida.");
    }
