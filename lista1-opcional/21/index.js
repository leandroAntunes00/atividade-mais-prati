// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')();

const altura = parseFloat(prompt('Digite a altura da pessoa (em metros): '));
const sexo = prompt('Digite o sexo da pessoa (M para masculino, F para feminino): ').toUpperCase();
let pesoIdeal;

// Cálculo do peso ideal baseado no sexo e altura informados
// Fórmula: peso ideal = peso / altura * altura 
// Para homens: peso ideal = 72.7 * altura - 58
// Para mulheres: peso ideal = 62.1 * altura - 44.7


if (sexo === 'M') {
    pesoIdeal = 72.7 * altura - 58;
} else if (sexo === 'F') {
    pesoIdeal = 62.1 * altura - 44.7;
} else {
    console.log('Sexo inválido. Por favor, digite M para masculino ou F para feminino.');
    pesoIdeal = null;
} 

if (pesoIdeal !== null) {
    console.log(`O peso ideal para uma pessoa de altura ${altura} metros e sexo ${sexo} é: ${pesoIdeal.toFixed(2)} kg`);
} else {
    console.log('Não foi possível calcular o peso ideal devido a um erro no sexo informado.');
}