// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')();
const numeros = [];
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o número inteiro ${i + 1}: `), 10);
    numeros.push(numero);
}

console.log("Números pares e suas posições:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número: ${numeros[i]}, Posição: ${i}`);
    } 
}

