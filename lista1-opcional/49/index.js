// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

const transacoes = [
    { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
    { id: 2, valor: 200, data: "2023-01-02", categoria: "Transporte" },
    { id: 3, valor: 150, data: "2023-01-03", categoria: "Alimentação" },
    { id: 4, valor: 300, data: "2023-01-04", categoria: "Saúde" },
    { id: 5, valor: 50, data: "2023-01-05", categoria: "Transporte" }
];

function agruparTransacoesPorCategoria(transacoes) {
    return transacoes.reduce((acumulador, transacao) => {
        const { categoria, valor } = transacao;
        if (!acumulador[categoria]) {
            acumulador[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }
        acumulador[categoria].transacoes.push(transacao);
        acumulador[categoria].subtotal += valor;
        return acumulador;
    }, {});
}

const resultado = agruparTransacoesPorCategoria(transacoes);
console.log("Transações agrupadas por categoria:", JSON.stringify(resultado, null, 2));


