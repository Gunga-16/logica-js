alert('Boas vindas ao Jogo do Número Secreto');

const recomecar = document.querySelector('.recomecar');

let min = 1;

let max = 30;

const numero_secreto =  Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Número Secreto = ' + numero_secreto);

function jogo() {
    let numero_escolhido;

    let resposta = document.querySelector('.container__texto-azul');

    let descobriu = document.querySelector('.container__texto-azul_descobriu');

    let tentativas = 1;

    while(numero_escolhido != numero_secreto) {
        numero_escolhido =  prompt('Escolha um número entre 1 e 30');

        if (numero_escolhido == numero_secreto) {
            resposta.textContent = "acertou!";
            descobriu.textContent = "descobriu";
            break;   
    
        } else {
            if(numero_escolhido > numero_secreto) {
                alert(`O número secreto é menor que ${numero_escolhido}`);
            } else {
                alert(`O número secreto é maior que ${numero_escolhido}`);
            }
            tentativas++;
        }
    }

    let palavra_tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    alert(`Isso aí! Você descobriu o número secreto ${numero_secreto} com ${tentativas} ${palavra_tentativa}.`);
}

jogo();

recomecar.onclick = function() {
    jogo();
}
