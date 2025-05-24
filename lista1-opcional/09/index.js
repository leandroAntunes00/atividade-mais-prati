// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.


const prompt = require('prompt-sync')();
let salarioHomens = 0;
let salarioMulheres = 0;

let continuar = true;
while (continuar) {
    const salario = parseFloat(prompt("Digite o salário do funcionário: "));
    const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

    if (sexo === 'M') {
        salarioHomens += salario;
    } else if (sexo === 'F') {
        salarioMulheres += salario;
    } else {
        console.log("Sexo inválido. Por favor, digite 'M' ou 'F'.");
    }

    const resposta = prompt("Deseja continuar? (S para sim, N para não): ").toUpperCase();
    continuar = resposta === 'S';
}

console.log(`Total de salário pago aos homens: R$ ${salarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${salarioMulheres.toFixed(2)}`);