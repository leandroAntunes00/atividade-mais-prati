// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();
const horarios = [];
const quantidadeHorarios = 5;
for (let i = 0; i < quantidadeHorarios; i++) {
    let horarioValido = false;
    while (!horarioValido) {
        const horario = prompt(`Digite o horário ${i + 1} no formato HH.MM.SS: `);
        const partes = horario.split('.');
        
        if (partes.length === 3) {
            const horas = parseInt(partes[0]);
            const minutos = parseInt(partes[1]);
            const segundos = parseInt(partes[2]);
            
            if (horas >= 0 && horas < 24 && minutos >= 0 && minutos < 60 && segundos >= 0 && segundos < 60) {
                horarios.push(horario);
                horarioValido = true;
            } else {
                console.log("Horário inválido. Por favor, digite novamente.");
            }
        } else {
            console.log("Formato inválido. Por favor, use o formato HH.MM.SS.");
        }
    }
}
console.log("Horários válidos:");
for (let i = 0; i < horarios.length; i++) {
    console.log(horarios[i]);
}
