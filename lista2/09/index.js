// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
    return pares.reduce((acc, [chave, valor]) => {
        acc[chave] = valor;
        return acc;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

// Exemplo de uso
const pares = [["nome", "Alice"], ["idade", 30], ["cidade", "Wonderland"]];
const obj = paresParaObjeto(pares);
console.log(obj); // { nome: "Alice", idade: 30, cidade: "Wonderland" }

const novosPares = objetoParaPares(obj);
console.log(novosPares); // [["nome", "Alice"], ["idade", 30], ["cidade", "Wonderland"]]