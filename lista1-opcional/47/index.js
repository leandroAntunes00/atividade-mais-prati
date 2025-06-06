// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

const dados = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

function transformarObjeto(obj, funcao) {
    const novoObjeto = {};
    for (const chave in obj) {
        novoObjeto[chave] = funcao(obj[chave]);
    }
    return novoObjeto;
}

const resultado = transformarObjeto(dados, valor => typeof valor === "string" ? valor.toUpperCase() : valor);
console.log("Resultado da transformação:", resultado);