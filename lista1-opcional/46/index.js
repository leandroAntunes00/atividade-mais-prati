// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

const vendas = [
    { vendedor: "Vendedor A", valor: 100 },
    { vendedor: "Vendedor B", valor: 200 },
    { vendedor: "Vendedor A", valor: 150 },
    { vendedor: "Vendedor C", valor: 300 },
    { vendedor: "Vendedor B", valor: 50 }
];

function sumarizarVendas(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { vendedor, valor } = venda;
        acumulador[vendedor] = (acumulador[vendedor] || 0) + valor;
        return acumulador;
    }, {});
}

const totalVendasPorVendedor = sumarizarVendas(vendas);
console.log("Total de vendas por vendedor:", totalVendasPorVendedor);