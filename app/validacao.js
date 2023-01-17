function verificaSeOChutePossuiUmValorValido(chute){
    let chuteParse = chute.replace(/\./g, "");
    const numero = parseInt(chuteParse)

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML+='<div class="erro"><i class="fa-solid fa-triangle-exclamation"></i>Valor Inválido</div>'
        return
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML+=`<div class="erro"><i class="fa-solid fa-triangle-exclamation"></i>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero===numeroSecreto){
        document.body.innerHTML=`
            <h2>Você Acertou!</h2>
            <h3>O número Secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML+=`
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else{
        elementoChute.innerHTML+=`
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}
function chuteForInvalido(numero){
    return Number.isNaN(numero)
}
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return  numero > maiorValor || numero < menorValor;
}
document.body.addEventListener('click', evento=>{
    if(evento.target.id=='jogar-novamente'){
        window.location.reload();
    }
})