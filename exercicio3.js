const leia = require("prompt-sync")()

let vetor = new Array(4)
let maiorNum = 0

for (let i = 0; i < 5; i++) {
    
    vetor[i] = leia("digite um numero: ")

    if(vetor[i] > maiorNum){
        maiorNum = vetor[i]
    }
}

console.log(`O maior valor digitado foi ${maiorNum}`)
