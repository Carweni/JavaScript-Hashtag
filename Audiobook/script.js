const nomeCapitulo = document.getElementById("capitulo");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoCapituloAnterior = document.getElementById("anterior");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");

// const: valor da variável não muda durante o processo / let: pode mudar o valor da variável.
const quantidadeCapitulos = 10;
let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audioCapitulo.play();
    taTocando = true;
}

// classList "pega" a classe do elemento.
function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audioCapitulo.pause();
    taTocando = false;
}

function tocarOuPausarFaixa() {
    if (taTocando === true) {
    pausarFaixa();
    } else {
    tocarFaixa();
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capítulo " + capitulo;
}

function proximaFaixa(){
    if(capitulo === quantidadeCapitulos){
        capitulo = 1;
    }
    else{
        capitulo ++;
    }

    audioCapitulo.src = "books/dom-casmurro/" + capitulo + ".mp3";
    trocarNomeFaixa();
    tocarFaixa();
}

function voltarFaixa(){
    if(capitulo === 1){
        capitulo = quantidadeCapitulos;
    }
    else{
        capitulo --;
    }

    audioCapitulo.src = "books/dom-casmurro/" + capitulo + ".mp3";
    trocarNomeFaixa();
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", voltarFaixa);
botaoProximoCapitulo.addEventListener("click", proximaFaixa);
audioCapitulo.addEventListener("ended", proximaFaixa);
