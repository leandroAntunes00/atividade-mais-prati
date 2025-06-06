// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

const dados = {
    numeros: [1, 2, 3],
    strings: ["a", "b", "c"],
    booleano: true,
    arrayDeObjetos: [{ id: 1 }, { id: 2 }],
    objetoSimples: { chave: "valor" }
};

function filtrarArrays(obj) {
    const resultado = {};
    for (const chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

const dadosFiltrados = filtrarArrays(dados);
console.log("Dados filtrados:", dadosFiltrados);