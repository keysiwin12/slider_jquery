$(document).ready(function () {     
    $('p:last').insertBefore('p:first');
    $('.slider').css({marginLeft: '-100%'});

    $('#despues').on('click', function () {
        $('.slider').animate({marginLeft : '-200%'},1500,function() {
            $('p:first').insertAfter('p:last');
            $('.slider').css({marginLeft: '-100%'});
        })    
                
    });

    $('#antes').on('click', function () {
        $('.slider').animate({marginLeft : '0%'},1500,function() {
            $('p:last').insertBefore('p:first');
            $('.slider').css({marginLeft: '-100%'});
        }) 
      
    });


    
});