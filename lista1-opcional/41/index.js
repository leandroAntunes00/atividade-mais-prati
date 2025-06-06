// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.

const pessoa = {
    nome: "João",
    idade: 25
};

// Acessando e imprimindo o valor de idade
console.log(`Idade: ${pessoa.idade}`);

// Adicionando a nova propriedade email
pessoa.email = "joao@example.com";
console.log(`Email: ${pessoa.email}`);

// Imprimindo o objeto atualizado
console.log("Objeto pessoa atualizado:", pessoa);