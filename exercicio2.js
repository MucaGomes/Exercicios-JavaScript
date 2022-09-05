const leia = require("prompt-sync")()

let contPar = 0
let contImpar = 0

for (var i = 1; i < 11; i++) {
    const num = Number(leia(`Digite o ${i}º numero: `))

    if(num % 2 == 0){
        contPar++
    } else {
        contImpar++
    }
 }

 console.log(`Total numeros pares ${contPar}.`)
 console.log(`Total numeros pares ${contImpar}.`)