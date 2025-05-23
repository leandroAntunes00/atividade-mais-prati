// Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.


function contagemRegressiva() {
    for (let i = 10; i >= 0; i--) {
        setTimeout(() => {
            console.log(i);
            if (i === 0) {
                console.log("Contagem regressiva finalizada!");
            }
        }, (10 - i) * 1000);
    }
}

contagemRegressiva();