// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

const matriz = [
  [-1, 2, -3, 4, -5, 6, 7, -8],
  [9, -10, 11, -12, 13, -14, 15, -16],
  [-17, 18, -19, 20, 21, -22, 23, 24],
  [25, -26, 27, -28, 29, 30, -31, 32],
  [-33, 34, -35, 36, -37, 38, 39, -40],
  [41, -42, 43, -44, 45, -46, -47, 48]
];

const vetorC = [];

for (let i = 0; i < matriz.length; i++) {
  let countNegativos = 0;
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] < 0) {
      countNegativos++;
    }
  }
  vetorC.push(countNegativos);
}
console.log("Matriz M:");
console.table(matriz);
console.log("Vetor C (quantidade de negativos por linha):");
console.log(vetorC);