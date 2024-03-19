const respostas = [
    "A vida é feita de pequenos momentos de felicidade",
    "Todo novo acordar é um presente",
    "Acredite que você é muito forte",
    "Você é um ser humano lindo que merece muito amor",
]
function gerarFrase(){

const totalRespostas = respostas.length

const numeroAleatorio = Math.floor(Math.random()*totalRespostas)

const elementoResposta = document.querySelector("#resposta")

elementoResposta.innerHTML = respostas[numeroAleatorio]

setTimeout(function(){
    elementoResposta.style.opacity = 0;
}, 4000)
}
