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

