// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

const prompt = require('prompt-sync')();
const n = 10;
let fibonacci = [1, 1];
console.log("Os 10 primeiros termos da Sequência de Fibonacci são:");
for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 0; i < n; i++) {
    console.log(fibonacci[i]);
}