$(document).ready(function() { 
    
    initMap();
    
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

function initMap() {
        var oakland = {lat: 40.438825, lng: -79.957155};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: oakland
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }