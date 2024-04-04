alert('Boas vindas ao Jogo do Número Secreto');

let numero_secreto = 13;

let resposta = document.querySelector('.container__texto-azul');

let descobriu = document.querySelector('.container__texto-azul_descobriu');

let numero_escolhido = prompt('Escolha um número entre 1 e 30');

if (numero_escolhido == numero_secreto) {
    resposta.textContent = "acertou!";
    descobriu.textContent = "descobriu";

} else {
    resposta.textContent = "não acertou!";
    descobriu.textContent = "não descobriu";
}

