alert('Boas vindas ao Jogo do Número Secreto');

let numero_secreto = 13;

let numero_escolhido = prompt('Escolha um número entre 1 e 30');

if (numero_escolhido == numero_secreto) {
    prompt('Você acertou');
} else {
    prompt('Você errou');
}

