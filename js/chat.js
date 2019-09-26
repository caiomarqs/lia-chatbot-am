//animação dos botoes do chat
let btnMic = document.getElementById('btn-mic');
let btnMsg = document.getElementById('btn-msg');
let btnMicI = document.getElementById('mic');
let btnMsgI = document.getElementById('msg');

btnMic.addEventListener('mouseover' || 'focus', function() {
    btnMicI.classList.add("btnonhover");
});

btnMic.addEventListener('mouseout' || 'blur', function() {
    btnMicI.classList.remove("btnonhover");
});

btnMsg.addEventListener('mouseover' || 'focus', function() {
    btnMsgI.classList.add("btnonhover");
});

btnMsg.addEventListener('mouseout' || 'blur', function() {
    btnMsgI.classList.remove("btnonhover");
});

//receber msg do usuario
let sysTime = new Date();
let coproMsg = document.getElementById('corpo-msg');
let inputusuario = document.getElementById('input-user');

function inserirMsg() {
    if (inputusuario.value == undefined || inputusuario.value == "") {
        alert('Digite alguma msg para enviar');        
    }
    else{
        console.log("foi");
        

        let txtUsr = `<p>${inputusuario.value}</p>`;
        let dataHora = `<h6 class="data_hora">${sysTime.getHours+""}</h6>`;
        let boxMsg = `<div id="msg-box" class="msg_enviada d-flex flex-column" hidden><h5 class="nome_enviado">Nome</h5><div class="box_msg_enviada">${txtUsr}</div></div>`;
        let boxMsgElement = new DOMParser().parseFromString(boxMsg, "text/html").getElementById('msg-box');
        coproMsg.appendChild(boxMsgElement);

        inputusuario.value = "";
    }
}

inputusuario.addEventListener('keypress', function(e) {
    if (e.which == 13) {
        inserirMsg();   
    }
});

btnMsg.addEventListener('click', function(e) {
    e.preventDefault();
    inserirMsg();
});