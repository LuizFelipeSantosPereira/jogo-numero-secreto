const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang  = 'pt-Br'
recognition.start();
recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript;
    elementoChute.innerHTML=`
    <div>Você Disse:</div>
    <span class="box">${chute}</span>
    `
    verificaSeOChutePossuiUmValorValido(chute);
}
recognition.addEventListener('end',()=> recognition.start())