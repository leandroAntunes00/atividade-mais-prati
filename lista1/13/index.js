// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();
const numeros = [];
let soma = 0;
let quantidade = 0;
let numero;


do {
    numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "));
    if (numero !== 0) {
        numeros.push(numero);
        soma += numero;
        quantidade++;
    }
} while (numero !== 0);

if (quantidade > 0) {
    const media = soma / quantidade;
    console.log("A média aritmética dos números é:", media);
} else {
    console.log("Nenhum número foi digitado.");
}