// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require('prompt-sync')();
const funcionarios = [];
const quantidadeFuncionarios = 80;
for (let i = 0; i < quantidadeFuncionarios; i++) {
    const matricula = prompt(`Digite a matrícula do funcionário ${i + 1}: `);
    const nome = prompt(`Digite o nome do funcionário ${i + 1}: `);
    const salarioBruto = parseFloat(prompt(`Digite o salário bruto do funcionário ${i + 1}: `));
    
    const deducaoINSS = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - deducaoINSS;
    
    const funcionario = {
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto,
        deducaoINSS: deducaoINSS,
        salarioLiquido: salarioLiquido
    };
    
    funcionarios.push(funcionario);
}
console.log("Contracheques dos funcionários:");
for (let i = 0; i < funcionarios.length; i++) {
    console.log(`\nMatrícula: ${funcionarios[i].matricula}`);
    console.log(`Nome: ${funcionarios[i].nome}`);
    console.log(`Salário bruto: R$ ${funcionarios[i].salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${funcionarios[i].deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${funcionarios[i].salarioLiquido.toFixed(2)}`);
}