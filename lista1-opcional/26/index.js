// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].


const A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

const B = [
  [15, 14, 13, 12, 11],
  [10, 9, 8, 7, 6],
  [5, 4, 3, 2, 1]
];

const P = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

// Calculando a matriz produto
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    P[i][j] = A[i][j] * B[i][j];
  }
}

console.log("Matriz A:");
console.table(A);
console.log("Matriz B:");
console.table(B);
console.log("Matriz Produto P:");
console.table(P);