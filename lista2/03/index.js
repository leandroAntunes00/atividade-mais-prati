// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const frase = "olá olá mundo mundo";
const palavras = frase.split(" ");
const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (!palavrasUnicas.includes(palavra)) {
        palavrasUnicas.push(palavra);
    }
}

console.log(palavrasUnicas);