// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

const M = Array.from({ length: 12 }, () => Array.from({ length: 13 }, () => Math.floor(Math.random() * 100)));

console.log("Matriz original:");
console.log(M);

const MModificada = M.map(linha => {
    const maiorElemento = Math.max(...linha.map(Math.abs));
    return linha.map(valor => valor / maiorElemento);
});

console.log("Matriz modificada:");
console.log(MModificada);