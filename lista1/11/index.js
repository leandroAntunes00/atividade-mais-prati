// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")();

const numeros = [];
let soma = 0;
const quantidade = 5;

for (let i = 0; i < quantidade; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
    soma += numero;
}

console.log("A soma total dos números é:", soma);
