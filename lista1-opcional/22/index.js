// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')();

function pesquisaHabitantes() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let quantidadeHabitantes = 0;
    let quantidadeSalarioAte350 = 0;

    while (true) {
        const salario = parseFloat(prompt('Digite o salário do habitante (ou -1 para sair): '));
        if (salario === -1) {
            break; // Encerra a pesquisa
        }
        
        const numeroFilhos = parseInt(prompt('Digite o número de filhos do habitante: '));
        
        totalSalario += salario;
        totalFilhos += numeroFilhos;
        quantidadeHabitantes++;
        
        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
        
        if (salario <= 350) {
            quantidadeSalarioAte350++;
        }
    }
    if (quantidadeHabitantes === 0) {
        console.log('Nenhum dado foi inserido.');
        return;
    }
    const mediaSalario = totalSalario / quantidadeHabitantes;
    const mediaFilhos = totalFilhos / quantidadeHabitantes;
    const percentualSalarioAte350 = (quantidadeSalarioAte350 / quantidadeHabitantes) * 100;
    console.log(`Média de salário: R$ ${mediaSalario.toFixed(2)}`);
    console.log(`Média de número de filhos: ${mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioAte350.toFixed(2)}%`);
    console.log(`Total de habitantes pesquisados: ${quantidadeHabitantes}`);
    console.log(`Total de habitantes com salário até R$ 350,00: ${quantidadeSalarioAte350}`);

}

pesquisaHabitantes();