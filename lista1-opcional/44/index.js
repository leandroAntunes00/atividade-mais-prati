// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.
const dados = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    ativo: true,
    hobbies: ["futebol", "leitura"],
    profissao: "Engenheiro"
};

function contarStrings(obj) {
    let contador = 0;
    for (const chave in obj) {
        if (typeof obj[chave] === "string") {
            contador++;
        }
    }
    return contador;
}

const totalStrings = contarStrings(dados);
console.log(`Total de propriedades do tipo string: ${totalStrings}`);
