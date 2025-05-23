// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.


const prompt = require('prompt-sync')();
const cigarroPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '));
const anosFumando = parseInt(prompt('Quantos anos você fuma? '));
const minutosPorCigarro = 10;
const diasPorAno = 365;
const minutosPorDia = 24 * 60;
const totalCigarros = cigarroPorDia * diasPorAno * anosFumando;
const totalMinutosPerdidos = totalCigarros * minutosPorCigarro;
const totalDiasPerdidos = totalMinutosPerdidos / minutosPorDia;
console.log(`Você perderá aproximadamente ${totalDiasPerdidos.toFixed(2)} dias de vida.`);


