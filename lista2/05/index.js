// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(context, args), delay);
    };
}

// Exemplo de uso
const logMessage = (message) => {
    console.log(`Mensagem: ${message}`);
};

const debouncedLogMessage = debounce(logMessage, 2000);

// Testando o debounce
debouncedLogMessage("Teste 1");
debouncedLogMessage("Teste 2");
debouncedLogMessage("Teste 3");

setTimeout(() => {
    debouncedLogMessage("Teste 4");
}, 3000);