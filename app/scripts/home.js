$(document).ready(function() { 
    $('#title').fadeTo(500, 1).css("display", "table");
    
    $('.link').each(function(i) {
        $(this).delay((++i) * 400).fadeTo(500, 1);  
    });
    
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
            }, 500);
        $('#about-title').delay(500).fadeTo(500, 1).css("display", "table");
        });
        
     $("#projects").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects-page").offset().top
            }, 500);
        
        });
}); 