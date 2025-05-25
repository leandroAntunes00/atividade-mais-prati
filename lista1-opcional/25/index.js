// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

const matriz = [];
const linhas = 15;
const colunas = 20;

// Preenchendo a matriz com números aleatórios
for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100); // Números aleatórios entre 0 e 99
  }
}

console.log("Matriz 15x20:");
console.table(matriz);

// Inicializando um vetor para armazenar a soma de cada coluna preenchido com zero [0, 0, ..., 0]
const somaColunas = new Array(colunas).fill(0);

// Calculando a soma de cada coluna
for (let j = 0; j < colunas; j++) {
  for (let i = 0; i < linhas; i++) {
    somaColunas[j] += matriz[i][j];
  }
}   

console.log("Soma de cada coluna:");
for (let j = 0; j < colunas; j++) {
  console.log(`Coluna indice ${j}: ${somaColunas[j]}`);
}