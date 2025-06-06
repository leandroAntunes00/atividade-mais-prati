// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

const A = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200) - 100);
const B = A.filter(valor => valor >= 0);

console.log("Vetor A:", A);
console.log("Vetor B (compactado):", B);
