// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

const M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const SL = new Array(5).fill(0);
const SC = new Array(5).fill(0);

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

console.log("Matriz M:");
console.table(M);
console.log("Vetor SL (Somas das linhas):");
console.log(SL);
console.log("Vetor SC (Somas das colunas):");
console.log(SC);