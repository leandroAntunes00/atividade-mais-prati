// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')();
const funcionarios = [];
const quantidadeFuncionarios = 3;
for (let i = 0; i < quantidadeFuncionarios; i++) {
    const nome = prompt(`Digite o nome do funcionário ${i + 1}: `);
    const cargo = prompt(`Digite o cargo do funcionário ${i + 1}: `);
    const salario = parseFloat(prompt(`Digite o salário do funcionário ${i + 1}: `));
    
    const funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario
    };
    
    funcionarios.push(funcionario);
}
console.log("Funcionários cadastrados:");
for (let i = 0; i < funcionarios.length; i++) {
    console.log(`Nome: ${funcionarios[i].nome}, Cargo: ${funcionarios[i].cargo}, Salário: R$ ${funcionarios[i].salario.toFixed(2)}`);
}