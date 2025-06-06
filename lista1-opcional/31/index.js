// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

const A = 5; // Exemplo de valor a ser buscado
const V = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)));

let contador = 0;
const X = [];

for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] === A) {
            contador++;
        } else {
            X.push(V[i][j]);
        }
    }
}

console.log(`Quantidade de valores iguais a ${A}: ${contador}`);
console.log(`Matriz X (valores diferentes de ${A}):`, X);