alert('Boas vindas ao Jogo do Número Secreto');

const tentar_novamente = document.querySelector('.tentar_novamente');

let min = 1;

let max = 30;

const numero_secreto =  Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Número Secreto = ' + numero_secreto);

function pergunta(){
    let numero_escolhido = prompt('Escolha um número entre 1 e 30');

    let resposta = document.querySelector('.container__texto-azul');

    let descobriu = document.querySelector('.container__texto-azul_descobriu');



    if (numero_escolhido == numero_secreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numero_secreto}`);
        resposta.textContent = "acertou!";
        descobriu.textContent = "descobriu";

    } else {
        if(numero_escolhido > numero_secreto){
            alert(`O número secreto é menor que ${numero_escolhido}`)
        } else {
            alert(`O número secreto é maior que ${numero_escolhido}`)
        }

        resposta.textContent = "não acertou!";
        descobriu.textContent = "não descobriu";

        
    }
}

pergunta();

tentar_novamente.onclick = function(){
    pergunta();
}
