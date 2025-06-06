    // 8. Agrupamento por Propriedade
    // Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
    // cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
    { cliente: "Cliente A", total: 100 },
    { cliente: "Cliente B", total: 200 },
    { cliente: "Cliente A", total: 150 },
    { cliente: "Cliente C", total: 300 },
    { cliente: "Cliente B", total: 50 }
];

const resultado = vendas.reduce((acc, venda) => {
    const { cliente, total } = venda;
    if (!acc[cliente]) {
        acc[cliente] = 0;
    }
    acc[cliente] += total;
    return acc;
}, {});

console.log(resultado);