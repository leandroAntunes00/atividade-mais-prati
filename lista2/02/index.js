// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')(); 

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite = 0;
let tentativas = 0;

while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;

    if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    }
}
