// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

const nota = prompt("Digite a nota (0 a 10): ");


if (nota >= 0 && nota <= 10) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 4) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
} else {
    console.log("Nota inválida");
}