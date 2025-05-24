// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

const jogador = prompt('Escolha pedra, papel ou tesoura: ');
const escolhaTratada = jogador.toLowerCase();

const opcoes = ['pedra', 'papel', 'tesoura'];

if (!opcoes.includes(escolhaTratada)) {
    console.log('Opção inválida! Escolha entre pedra, papel ou tesoura.');
    return;
}

const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

const verificacaoVitoriaJogador = (escolhaTratada === 'pedra' && escolhaComputador === 'tesoura') || (escolhaTratada === 'papel' && escolhaComputador === 'pedra') || (escolhaTratada === 'tesoura' && escolhaComputador === 'papel');

console.log(`Você escolheu: ${escolhaTratada}`);
console.log(`O computador escolheu: ${escolhaComputador}`);
if (escolhaTratada === escolhaComputador) {
    console.log('Empate!');
} else if (verificacaoVitoriaJogador) {
    console.log('Você ganhou!');
} else {
    console.log('Você perdeu!');
}


