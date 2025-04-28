const readline = require("readline-sync");

    let nota1 = Number(readline.question)("informe a nota 1:");
    let nota2 = Number(readline.question)("informe a nota 2:");
    let nota3 = Number(readline.question)("informe a nota 3:");
    let nota4 = Number(readline.question)("informe a nota 4:");
      let media = (nota1 + nota2 + nota3 + nota4) /4
        console.log(media. tofixed(2))

        if(media>=6)  {
            console.log("APROVADO")
        }
        else {
            console.log("REPROVADO")
        }