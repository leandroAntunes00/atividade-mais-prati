// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.

// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.

const prompt = require('prompt-sync')({ sigint: true });

const hoteis = [];
const reservas = [];
let idHotelCounter = 1;
let idReservaCounter = 1;
function adicionarHotel(nome, cidade, quartosTotais) {
    const novoHotel = {
        id: idHotelCounter++,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis: quartosTotais,
        avaliacoes: [] // Array para armazenar avaliações
    };
    hoteis.push(novoHotel);
    console.log(`Hotel adicionado: ${JSON.stringify(novoHotel)}`);
}
function buscarHoteisPorCidade(cidade) {
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    console.log(`Hotéis em ${cidade}:`, hoteisNaCidade);
    return hoteisNaCidade;
}
function fazerReserva(idHotel, nomeCliente) {
    const hotel = hoteis.find(h => h.id === idHotel);
    if (!hotel) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return;
    }
    if (hotel.quartosDisponiveis <= 0) {
        console.log(`Não há quartos disponíveis no hotel ${hotel.nome}.`);
        return;
    }
    const novaReserva = {
        idReserva: idReservaCounter++,
        idHotel: hotel.id,
        nomeCliente,
        status: 'reservado', // Status da reserva: reservado, checkin, checkout
        dataCheckIn: null,
        dataCheckOut: null
    };
    reservas.push(novaReserva);
    hotel.quartosDisponiveis--;
    console.log(`Reserva feita: ${JSON.stringify(novaReserva)} no hotel ${hotel.nome}`);
}
function cancelarReserva(idReserva) {
    const reservaIndex = reservas.findIndex(r => r.idReserva === idReserva);
    if (reservaIndex === -1) {
        console.log(`Reserva com ID ${idReserva} não encontrada.`);
        return;
    }
    const reserva = reservas[reservaIndex];
    
    // Só permite cancelar se não fez check-in ainda
    if (reserva.status === 'checkin') {
        console.log(`Não é possível cancelar. Hóspede já fez check-in. Use check-out.`);
        return;
    }
    
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    hotel.quartosDisponiveis++;
    reservas.splice(reservaIndex, 1);
    console.log(`Reserva cancelada: ${JSON.stringify(reserva)} no hotel ${hotel.nome}`);
}
function listarReservas() {
    console.log("Lista de Reservas:");
    reservas.forEach(reserva => {
        const hotel = hoteis.find(h => h.id === reserva.idHotel);
        console.log(`Reserva ID: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}, Status: ${reserva.status}`);
    });
}

// Desafios Adicionais Implementados:

// 1. Função de Check-in
function fazerCheckIn(idReserva) {
    const reserva = reservas.find(r => r.idReserva === idReserva);
    if (!reserva) {
        console.log(`Reserva com ID ${idReserva} não encontrada.`);
        return;
    }
    
    if (reserva.status !== 'reservado') {
        console.log(`Check-in não pode ser feito. Status atual: ${reserva.status}`);
        return;
    }
    
    reserva.status = 'checkin';
    reserva.dataCheckIn = new Date().toLocaleString('pt-BR');
    
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    console.log(`Check-in realizado com sucesso para ${reserva.nomeCliente} no hotel ${hotel.nome}`);
    console.log(`Data/Hora do check-in: ${reserva.dataCheckIn}`);
}

// 2. Função de Check-out
function fazerCheckOut(idReserva) {
    const reserva = reservas.find(r => r.idReserva === idReserva);
    if (!reserva) {
        console.log(`Reserva com ID ${idReserva} não encontrada.`);
        return;
    }
    
    if (reserva.status !== 'checkin') {
        console.log(`Check-out não pode ser feito. Status atual: ${reserva.status}`);
        return;
    }
    
    reserva.status = 'checkout';
    reserva.dataCheckOut = new Date().toLocaleString('pt-BR');
    
    // Libera o quarto
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    hotel.quartosDisponiveis++;
    
    console.log(`Check-out realizado com sucesso para ${reserva.nomeCliente} no hotel ${hotel.nome}`);
    console.log(`Data/Hora do check-out: ${reserva.dataCheckOut}`);
    
    // Pergunta se deseja avaliar o hotel
    const desejaAvaliar = prompt("Deseja avaliar o hotel? (s/n): ");
    if (desejaAvaliar.toLowerCase() === 's') {
        avaliarHotel(reserva.idHotel, reserva.nomeCliente);
    }
}

// 3. Função para gerar relatórios de ocupação
function gerarRelatorioOcupacao(idHotel) {
    const hotel = hoteis.find(h => h.id === idHotel);
    if (!hotel) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return;
    }
    
    const reservasDoHotel = reservas.filter(r => r.idHotel === idHotel);
    const quartosOcupados = hotel.quartosTotais - hotel.quartosDisponiveis;
    const taxaOcupacao = ((quartosOcupados / hotel.quartosTotais) * 100).toFixed(2);
    
    const reservasAtivas = reservasDoHotel.filter(r => r.status === 'checkin').length;
    const reservasPendentes = reservasDoHotel.filter(r => r.status === 'reservado').length;
    const checkoutsRealizados = reservasDoHotel.filter(r => r.status === 'checkout').length;
    
    console.log(`\n=== RELATÓRIO DE OCUPAÇÃO - ${hotel.nome} ===`);
    console.log(`Cidade: ${hotel.cidade}`);
    console.log(`Quartos Totais: ${hotel.quartosTotais}`);
    console.log(`Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
    console.log(`Quartos Ocupados: ${quartosOcupados}`);
    console.log(`Taxa de Ocupação: ${taxaOcupacao}%`);
    console.log(`\nStatus das Reservas:`);
    console.log(`- Hóspedes em estadia (check-in): ${reservasAtivas}`);
    console.log(`- Reservas pendentes: ${reservasPendentes}`);
    console.log(`- Check-outs realizados: ${checkoutsRealizados}`);
    console.log(`- Total de reservas: ${reservasDoHotel.length}`);
    
    // Média das avaliações
    if (hotel.avaliacoes.length > 0) {
        const mediaAvaliacoes = (hotel.avaliacoes.reduce((acc, av) => acc + av.nota, 0) / hotel.avaliacoes.length).toFixed(1);
        console.log(`\nAvaliação média: ${mediaAvaliacoes}/5 (${hotel.avaliacoes.length} avaliações)`);
    } else {
        console.log(`\nAinda não há avaliações para este hotel.`);
    }
}

// 4. Função para avaliar hotel
function avaliarHotel(idHotel, nomeCliente) {
    const hotel = hoteis.find(h => h.id === idHotel);
    if (!hotel) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return;
    }
    
    console.log(`\nAvaliando hotel: ${hotel.nome}`);
    const nota = parseInt(prompt("Nota de 1 a 5: "), 10);
    
    if (nota < 1 || nota > 5 || isNaN(nota)) {
        console.log("Nota inválida. Deve ser entre 1 e 5.");
        return;
    }
    
    const comentario = prompt("Comentário (opcional): ") || "";
    
    const avaliacao = {
        cliente: nomeCliente,
        nota: nota,
        comentario: comentario,
        data: new Date().toLocaleString('pt-BR')
    };
    
    hotel.avaliacoes.push(avaliacao);
    console.log(`Avaliação adicionada com sucesso! Obrigado pelo feedback.`);
}

// Função para listar todas as avaliações de um hotel
function listarAvaliacoes(idHotel) {
    const hotel = hoteis.find(h => h.id === idHotel);
    if (!hotel) {
        console.log(`Hotel com ID ${idHotel} não encontrado.`);
        return;
    }
    
    if (hotel.avaliacoes.length === 0) {
        console.log(`O hotel ${hotel.nome} ainda não possui avaliações.`);
        return;
    }
    
    console.log(`\n=== AVALIAÇÕES - ${hotel.nome} ===`);
    hotel.avaliacoes.forEach((avaliacao, index) => {
        console.log(`\n${index + 1}. Cliente: ${avaliacao.cliente}`);
        console.log(`   Nota: ${avaliacao.nota}/5`);
        console.log(`   Data: ${avaliacao.data}`);
        if (avaliacao.comentario) {
            console.log(`   Comentário: ${avaliacao.comentario}`);
        }
    });
    
    const mediaAvaliacoes = (hotel.avaliacoes.reduce((acc, av) => acc + av.nota, 0) / hotel.avaliacoes.length).toFixed(1);
    console.log(`\nMédia geral: ${mediaAvaliacoes}/5 (${hotel.avaliacoes.length} avaliações)`);
}

function menu() {
    console.log("\nSistema de Reserva de Hotéis");
    console.log("1. Adicionar Hotel");
    console.log("2. Buscar Hotéis por Cidade");
    console.log("3. Fazer Reserva");
    console.log("4. Cancelar Reserva");
    console.log("5. Listar Reservas");
    console.log("6. Fazer Check-in");
    console.log("7. Fazer Check-out");
    console.log("8. Relatório de Ocupação");
    console.log("9. Listar Avaliações");
    console.log("10. Sair");

    const escolha = prompt("Escolha uma opção: ");
    return escolha;
}

function executarOpcao(opcao) {
    switch (opcao) {
        case "1":
            const nomeHotel = prompt("Nome do Hotel: ");
            const cidadeHotel = prompt("Cidade do Hotel: ");
            const quartosHotel = parseInt(prompt("Número de Quartos: "), 10);
            adicionarHotel(nomeHotel, cidadeHotel, quartosHotel);
            break;
        case "2":
            const cidadeBusca = prompt("Cidade: ");
            buscarHoteisPorCidade(cidadeBusca);
            break;
        case "3":
            const idHotel = parseInt(prompt("ID do Hotel: "), 10);
            const nomeCliente = prompt("Nome do Cliente: ");
            fazerReserva(idHotel, nomeCliente);
            break;
        case "4":
            const idReserva = parseInt(prompt("ID da Reserva: "), 10);
            cancelarReserva(idReserva);
            break;
        case "5":
            listarReservas();
            break;
        case "6":
            const idReservaCheckIn = parseInt(prompt("ID da Reserva para Check-in: "), 10);
            fazerCheckIn(idReservaCheckIn);
            break;
        case "7":
            const idReservaCheckOut = parseInt(prompt("ID da Reserva para Check-out: "), 10);
            fazerCheckOut(idReservaCheckOut);
            break;
        case "8":
            const idHotelRelatorio = parseInt(prompt("ID do Hotel para Relatório: "), 10);
            gerarRelatorioOcupacao(idHotelRelatorio);
            break;
        case "9":
            const idHotelAvaliacoes = parseInt(prompt("ID do Hotel para ver Avaliações: "), 10);
            listarAvaliacoes(idHotelAvaliacoes);
            break;
        case "10":
            console.log("Saindo...");
            process.exit(0);
        default:
            console.log("Opção inválida.");
    }
}
function iniciarSistema() {
    while (true) {
        const opcao = menu();
        executarOpcao(opcao);
    }
}

iniciarSistema();

