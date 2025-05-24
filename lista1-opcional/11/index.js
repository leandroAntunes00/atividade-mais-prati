// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.

const prompt = require('prompt-sync')();
const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
const razao = parseFloat(prompt("Digite a razão da PA: "));
let termoAtual = primeiroTermo;
let soma = 0;
console.log("Os 10 primeiros termos da PA são:");
for (let i = 0; i < 10; i++) {
    console.log(termoAtual);
    soma += termoAtual;
    termoAtual += razao;
}
console.log(`A soma dos 10 primeiros termos da PA é: ${soma}`);