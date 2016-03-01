$(document).ready(function(){
    var altura = $('.navbar-inverse').offset().top;
    
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.navbar-inverse').addClass('cambio');
        } else {
            $('.navbar-inverse').removeClass('cambio');
        }
    });
 
});
