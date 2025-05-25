// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

const M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;
for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        // Soma da linha 4 (índice 3)
        if (i === 3) {
            somaLinha4 += M[i][j];
        }
        // Soma da coluna 2 (índice 1)
        if (j === 1) {
            somaColuna2 += M[i][j];
        }
        // Soma da diagonal principal
        if (i === j) {
            somaDiagonalPrincipal += M[i][j];
        }
        // Soma total de todos os elementos
        somaTotal += M[i][j];
    }
}
console.log("Matriz M:");
console.table(M);
console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma total de todos os elementos: ${somaTotal}`);