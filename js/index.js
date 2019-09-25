// Controlando sombra do menu 
let fun = function() {
    var nav = $('#navbar');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("navbar-active");
        } else {
            nav.removeClass("navbar-active");
        }
    });
};
fun();


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
