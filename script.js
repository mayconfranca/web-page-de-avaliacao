/*JavaScript e DOM.*/

/*Variáveis globais.*/
var s, seg = 59, min = 3, ponto = 0;

/*Cronômetro.*/
function segundos() {
    document.getElementById("minuto").innerHTML = "0" + min;
    document.getElementById("segundo").innerHTML = "59";
    s = setInterval(cronometro, 1000);
}

function cronometro() {
    if(seg != 0) {
        seg--;
        if(seg >= 10) {
            document.getElementById("segundo").innerHTML = seg;
        } else {
            document.getElementById("segundo").innerHTML = "0" + seg;
        }
    } else {
        min--;
        seg = 60;
        document.getElementById("minuto").innerHTML = "0" + min;
    }
    if(min == 0 && seg == 0) {
        clearInterval(s);/*Interrompe o cronômetro.*/
        finalizar();
    }
}
/*****/

/*Função do primeiro botão.*/
function iniciar() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("secoes").style.display = "block";
    segundos();/*Inicia o cronômetro.*/
}

/*Funções das alternativas.*/
function respCum() {
    ponto++;
    /*Impedimento de mudança de alternativa, como nas funções abaixo também.*/
    document.getElementById("secao-01").style.pointerEvents = "none";
}

function respEum() {
    document.getElementById("secao-01").style.pointerEvents = "none";            
}

function respCdois() {
    ponto++;
    document.getElementById("secao-02").style.pointerEvents = "none";
}

function respEdois() {
    document.getElementById("secao-02").style.pointerEvents = "none";            
}

function respCtres() {
    ponto++;
    document.getElementById("secao-03").style.pointerEvents = "none";
}

function respEtres() {
    document.getElementById("secao-03").style.pointerEvents = "none";            
}

function respCquatro() {
    ponto++;
    document.getElementById("secao-04").style.pointerEvents = "none";
}

function respEquatro() {
    document.getElementById("secao-04").style.pointerEvents = "none";            
}

function respCcinco() {
    ponto++;
    document.getElementById("secao-05").style.pointerEvents = "none";    
}

function respEcinco() {
    document.getElementById("secao-05").style.pointerEvents = "none";    
}

function respCseis() {
    ponto++;
    document.getElementById("secao-06").style.pointerEvents = "none";
}

function respEseis() {
    document.getElementById("secao-06").style.pointerEvents = "none";
}
/*****/

/*Função do último botão.*/
function finalizar() {
    clearInterval(s);/*Interrompe o cronômetro.*/
    document.getElementById("secoes").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    if(ponto >= 3) {
        document.getElementById("resultado").innerHTML = "Você acertou " + ponto + " de 6 questões desta avaliação. Parabéns, você passou no teste!";
        document.getElementById("resultado").style.backgroundColor = "orange";
        document.getElementById("resultado").style.color = "white";        
    } else {
        document.getElementById("resultado").innerHTML = "Você acertou " + ponto + " de 6 questões desta avaliação. Você não passou no teste, tente novamente!";
        document.getElementById("resultado").style.backgroundColor = "tomato";
        document.getElementById("resultado").style.color = "white";
    }
}