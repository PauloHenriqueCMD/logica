const readline = require("readline-sync");
    let peso = parseInt(readline.question("Qual o seu peso?"));
        let altura = readline.question("Qual a sua altura?");
    let imc = peso/(altura*altura);
    console.log("Seu imc é " + imc.toFixed(2));
    if(imc<18.5) {
        console.log("Raquítico. Alerta de desnutrição");
    }
    else if(imc>=18.5 && imc<=24.9){
        console.log("Peso ideal")
    }
    else if(imc>=24.9 && imc<=40){
        console.log("Obeso. Fique em alerta")
    }
    else if(imc>=40 && imc<=60){
        console.log("Moby dick. Perigo!")
    }
    else{console.log(gordo)}