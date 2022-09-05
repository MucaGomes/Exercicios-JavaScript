   /*
    3- Faça um programa que receba a idade de uma pessoa e mostre na saída em qual
        categoria ela se encontra:
         10-14 infantil
         15-17 juvenil
         18-25 adulto
    */
const leia = require("prompt-sync")()

const idade = leia("Digite sua idade: ")

if (idade >= 1 && idade<=14) {
    console.log("Categoria Infantil")
}else if (idade < 1) {
    console.log("Idade abaixo do limite permitido")
} else if (idade >= 15 && idade <= 17) {
    console.log("sua categoria é juvenil")
} else if (idade >= 18 && idade <=  25) {
    console.log("sua categoria é adulto")
}else{
    console.log("Idade limite atingida")
}


