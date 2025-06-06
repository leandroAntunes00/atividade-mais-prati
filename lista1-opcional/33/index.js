// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

const matriz = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)));

console.log("Matriz original:");
console.log(matriz);

const mediaDiagonalSecundaria = (matriz[0][2] + matriz[1][1] + matriz[2][0]) / 3;

for (let i = 0; i < 3; i++) {
    matriz[i][i] *= mediaDiagonalSecundaria;
}

console.log("Matriz modificada:");
console.log(matriz);