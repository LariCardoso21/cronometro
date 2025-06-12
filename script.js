//declarção de variaveis
let segundos = 0
let intervalo = null

const display = document.getElementById("display")
const iniciob = document.getElementById("iniciob")
const pausarb = document.getElementById("pausarb")
const resetarb = document.getElementById("resetarb")

//botões
iniciob.addEventListener("click", iniciarcronometro)

pausarb.addEventListener("click", pausarcronometro)

resetarb.addEventListener("click", resetarcronometro)

//função dos botões
function iniciarcronometro(){
    if (intervalo) return //evita que exista multiplos intervalo

    //guarda em intervalo o passar 1seg ou 1000ms
    intervalo = setInterval(() => {
        segundos++
        atualizaDisplay()
    },1000)

}

function pausarcronometro(){
    clearInterval(intervalo)
    intervalo = null
}

function resetarcronometro(){
    pausarcronometro()
    segundos = 0
    atualizaDisplay()
}

//função de formatar o tempo
function formatartempo(segundostotais){
    const minutos = Math.floor(segundostotais/60)
    const segundos = segundostotais%60
    return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`

}
//função que envia o tempo para a página
function atualizaDisplay(){
    display.textContent = formatartempo (segundos)
}