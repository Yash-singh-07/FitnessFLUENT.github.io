$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

});
$(document).ready(function(){

    $('#sign-up').click(function(){
     $('.sign-in').css('margin-left','-34rem');
     $(this).css('margin-top','-5rem');
     $('.images > img ').css('margin-left','0rem');
    });

    $('#sign-in').click(function(){
     $('.sign-up').css('margin-left','0rem');
     $('#sign-up').css('margin-top','-5rem');
     $('.images > img ').css('margin-left','0rem');
    });
    
 });
