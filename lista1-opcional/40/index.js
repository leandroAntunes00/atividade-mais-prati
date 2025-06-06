// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

const resultadoOficial = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 1);
console.log("Resultado Oficial:", resultadoOficial);

for (let i = 1; i <= 50; i++) {
    const aposta = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 1);
    console.log(`Aposta ${i}:`, aposta);

    const ganhador = aposta.every(num => resultadoOficial.includes(num));
    if (ganhador) {
        console.log("Ganhador");
    } else {
        console.log("Não foi ganhador");
    }
}
