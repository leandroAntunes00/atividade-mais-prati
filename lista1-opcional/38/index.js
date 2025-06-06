// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const vetor = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
console.log("Vetor original:", vetor);

const operacao = Math.floor(Math.random() * 5) + 1;
console.log("Operação escolhida:", operacao);

switch (operacao) {
    case 1:
        const soma = vetor.reduce((acc, val) => acc + val, 0);
        console.log("Soma dos elementos:", soma);
        break;
    case 2:
        const produto = vetor.reduce((acc, val) => acc * val, 1);
        console.log("Produto dos elementos:", produto);
        break;
    case 3:
        const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
        console.log("Média dos elementos:", media);
        break;
    case 4:
        const vetorOrdenado = [...vetor].sort((a, b) => a - b);
        console.log("Vetor ordenado:", vetorOrdenado);
        break;
    case 5:
        console.log("Vetor:", vetor);
        break;
    default:
        console.log("Operação inválida.");
        break;
}