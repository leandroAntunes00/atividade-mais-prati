// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require("prompt-sync")();
const quantidade = 10;

let fibonacci = [0, 1];

for (let i = 2; i < quantidade; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Os primeiros 10 números da sequência de Fibonacci são:");

for (let i = 0; i < fibonacci.length; i++) {
    console.log(`${i + 1}º número: ${fibonacci[i]}`);
}