// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

const inventarioLojaA = {
    "maçã": 10,
    "banana": 5,
    "laranja": 8
};

const inventarioLojaB = {
    "banana": 3,
    "laranja": 7,
    "uva": 12
};

function combinarInventarios(inventarioA, inventarioB) {
    const inventarioCombinado = { ...inventarioA };
    for (const item in inventarioB) {
        inventarioCombinado[item] = (inventarioCombinado[item] || 0) + inventarioB[item];
    }
    return inventarioCombinado;
}

const inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("Inventário combinado:", inventarioFinal);