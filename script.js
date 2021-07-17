/* definr as constantes dos ponteiros do relogio */
const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

/*declarar um objeto do tipo data para capturar a data do navegador*/
var data = new Date();
console.log(data);

/*declarar variaveis para escrever a hora do sistema separadamente*/
let hr = data.getHours();
let mn = data.getMinutes();
let sg = data.getSeconds();
console.log(" Hora: " + hr + " Minutos: " + mn + " Segundos: " + sg);

/*variaveis que transformarao os valores em movimento de ponteiro*/
let posicaoHor = (hr * 360) / 12 + ((mn * 360) / 60 / 12);
let posicaoMin = (mn * 360 / 60) + (sg * (360 / 60) / 60);
let posicaoSeg = (sg * 360) / 60;

/*declarar uma funcao para que o tempo seja atualizado*/
function executarRelogio() {

    posicaoHor += (3 / 360);
    posicaoMin += (6 / 60);
    posicaoSeg += 6;

    PONTEIROHORA.style.transform = "rotate(" + posicaoHor + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";
}
/*declarar uma variavel intervalo para receber nossa funcao e atualizar o relogio*/
var intervalo = setInterval(executarRelogio, 1000);
