// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


const prompt = require("prompt-sync")();
const quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
const precoPorMaca = quantidade < 12 ? 0.30 : 0.25;
const valorTotal = quantidade * precoPorMaca;
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);