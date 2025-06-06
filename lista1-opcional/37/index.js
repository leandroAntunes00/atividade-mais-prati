// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const gabarito = Array.from({ length: 20 }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 65));
console.log("Gabarito:", gabarito);

for (let i = 1; i <= 50; i++) {
    const respostas = Array.from({ length: 20 }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    let acertos = 0;

    for (let j = 0; j < 20; j++) {
        if (respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Aluno ${i}: ${acertos} acertos`);

    if (acertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}
