// Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.


const prompt = require('prompt-sync')();
let continuar = true;
let soma = 0;
let menorValor = Infinity;
let contagem = 0;
let numerosPares = 0;

while (continuar) {
    const numero = parseFloat(prompt("Digite um número: "));
    soma += numero;
    contagem++;

    if (numero < menorValor) {
        menorValor = numero;
    }

    if (numero % 2 === 0) {
        numerosPares++;
    }

    const resposta = prompt("Deseja continuar? (S para sim, N para não): ").toUpperCase();
    continuar = resposta === 'S';
}

const media = contagem > 0 ? soma / contagem : 0;

console.log(`a) Somatório: ${soma}`);
console.log(`b) Menor valor: ${menorValor}`);
console.log(`c) Média: ${media}`);
console.log(`d) Números pares: ${numerosPares}`);