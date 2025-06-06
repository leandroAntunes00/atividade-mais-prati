// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".

const gabarito = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10));
console.log("Gabarito:", gabarito);

for (let i = 1; i <= 100; i++) {
    const respostas = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10));
    let acertos = 0;

    for (let j = 0; j < 13; j++) {
        if (respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Apostador ${i}: ${acertos} acertos`);

    if (acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR");
    }
}


