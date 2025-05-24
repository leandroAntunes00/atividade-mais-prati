// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const M = [ 
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

const A = 2; 

const V = new Array(36).fill(0); 

let index = 0; 

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        V[index] = M[i][j] * A; 
        index++;
    }
}
console.log("Matriz M:");
console.table(M);
console.log(`Valor A: ${A}`);
console.log("Vetor V (valores da matriz M multiplicados por A):");
console.log(V);

