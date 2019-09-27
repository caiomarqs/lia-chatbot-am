//animação dos botoes do chat
let btnMic = document.getElementById('btn-mic');
let btnMsg = document.getElementById('btn-msg');
let btnMicI = document.getElementById('mic');
let btnMsgI = document.getElementById('msg');

btnMic.addEventListener('mouseover' || 'focus', function () {
    btnMicI.classList.add("btnonhover");
});

btnMic.addEventListener('mouseout' || 'blur', function () {
    btnMicI.classList.remove("btnonhover");
});

btnMsg.addEventListener('mouseover' || 'focus', function () {
    btnMsgI.classList.add("btnonhover");
});

btnMsg.addEventListener('mouseout' || 'blur', function () {
    btnMsgI.classList.remove("btnonhover");
});

//receber msg do usuario
let coproMsg = document.getElementById('corpo-msg');
let inputusuario = document.getElementById('input-user');

//tratamento de data e hora
let tratamentoDigitos = (digitos) =>{
    return digitos < 10 ? "0"+digitos : digitos;
};

//msg do usuario
function inserirMsg() {
    let sysTime = new Date();
    let horas = tratamentoDigitos(sysTime.getHours())+":"+ tratamentoDigitos(sysTime.getMinutes())+":"+tratamentoDigitos(sysTime.getSeconds());
    let dia = tratamentoDigitos(sysTime.getDay())+"/"+tratamentoDigitos(sysTime.getMonth())+"/"+tratamentoDigitos(sysTime.getFullYear());

    if (inputusuario.value == undefined || inputusuario.value == "") {
        inputusuario.classList.add('no-msg');
        setTimeout(function () {inputusuario.classList.remove('no-msg');}, 700 );

    }
    else {
        console.log("foi");


        let txtUsr = `<p>${inputusuario.value}</p>`;
        let dataHora = `<h6 class="data_hora">${horas + " | " + dia}</h6>`;
        let boxMsg = `<div id="msg-box" class="msg_enviada d-flex flex-column" hidden><h5 class="nome_enviado">Nome</h5><div class="box_msg_enviada">${txtUsr}</div>${dataHora}</div>`;
        let boxMsgElement = new DOMParser().parseFromString(boxMsg, "text/html").getElementById('msg-box');
        coproMsg.appendChild(boxMsgElement);

        inputusuario.value = "";

        scrollSmoothToBottom(coproMsg);

        horas = "";
        dia = "";

    }
}



inputusuario.addEventListener('keypress', function (e) {
    if (e.which == 13) {
        inserirMsg();
    }
});

btnMsg.addEventListener('click', function (e) {
    e.preventDefault();
    inserirMsg();
});



function scrollSmoothToBottom(scrollingElement) {
    $(scrollingElement).animate({
        scrollTop: scrollingElement.scrollHeight
    }, 500);
}

//sombra aptir do corpo de msgs
let navOnElement = function (element) {
    let nav = $('#navbar');
    element.addEventListener('scroll', function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("navbar-active");
        } else {
            nav.removeClass("navbar-active");
        }
    });
};

navOnElement(coproMsg);
