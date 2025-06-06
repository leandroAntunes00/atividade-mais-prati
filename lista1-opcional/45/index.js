// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

const arrayDeStrings = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

function contarOcorrencias(array) {
    const contador = {};
    for (const fruta of array) {
        contador[fruta] = (contador[fruta] || 0) + 1;
    }
    return contador;
}

const resultado = contarOcorrencias(arrayDeStrings);
console.log("Contagem de ocorrências:", resultado);