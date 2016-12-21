$(document).ready(function() { 
    $('#title').fadeTo(500, 1).css("display", "table");
    
    $('.link').each(function(i) {
        $(this).delay((++i) * 400).fadeTo(500, 1);  
    });
    
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
            }, 500);
       aboutIn();
    });
        
     $("#projects").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects-page").offset().top
            }, 500);
        
     });
     
     $(document).on('scroll', function() {
        if($(this).scrollTop()>=$('#about-me').position().top){
            aboutIn();
        }
    });
});

function aboutIn() {
    $('#about-title').delay(500).fadeTo(500, 1).css("display", "table");
    $('#about-content').delay(1000).fadeTo(500,1);
    $('.button-link').each(function(i) {
        $(this).delay((i++) * 400 + 1500).fadeTo(500, 1);  
    });
}