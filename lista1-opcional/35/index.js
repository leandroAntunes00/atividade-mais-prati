// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const pares = [];
const impares = [];
const valores = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

for (const valor of valores) {
    if (valor % 2 === 0) {
        if (pares.length < 5) {
            pares.push(valor);
        } else {
            console.log("Vetor de pares cheio:", pares);
            pares.length = 0; // Limpa o vetor
            pares.push(valor);
        }
    } else {
        if (impares.length < 5) {
            impares.push(valor);
        } else {
            console.log("Vetor de ímpares cheio:", impares);
            impares.length = 0; // Limpa o vetor
            impares.push(valor);
        }
    }
}

// Exibe os vetores restantes
console.log("Vetor de pares:", pares);
console.log("Vetor de ímpares:", impares);