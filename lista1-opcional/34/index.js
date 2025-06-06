// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.

const matriz = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => Math.random()));

console.log("Matriz original:");
console.log(matriz);

for (let i = 0; i < 50; i++) {
    const diagonalPrincipal = matriz[i][i];
    for (let j = 0; j < 50; j++) {
        matriz[i][j] *= diagonalPrincipal;
    }
}

console.log("Matriz modificada:");
console.log(matriz);