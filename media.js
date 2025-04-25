const readline = require("readline-sync");

let A = Number(readline.question("informe um numero:"));
let B = Number (readline.question("informe um numero:"));
let C = Number (readline.question("informe um numero:")); 
let media = (A + B + C) /3 
   console.log(media.toFixed(2))

   if(media<=6){
   console.log("RECUPERAÇÃO")
   }
   else{
   console.log("APROVADO")
   }