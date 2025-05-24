// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.


const prompt = require('prompt-sync')();
const numeroSorteado = Math.floor(Math.random() * 5) + 1;
const numeroJogador = parseInt(prompt('Adivinhe o número sorteado entre 1 e 5: '));

console.log(`Número escolhido pelo jogador: ${numeroJogador}`);
console.log(`Número sorteado pelo computador: ${numeroSorteado}`);

if (numeroJogador < 1 || numeroJogador > 5) {
    console.log('Número inválido! Escolha um número entre 1 e 5.');
} else if (numeroJogador === numeroSorteado) {
    console.log('Parabéns! Você acertou o número sorteado!');
} else {
    console.log(`Você errou! O número sorteado era ${numeroSorteado}.`);
}