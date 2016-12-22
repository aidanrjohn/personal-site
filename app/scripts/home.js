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
          zoom: 15,
          center: oakland
        });
        $.ajax({url: "/api/map", success: function(result){
            $.each(result, function(i, mapMarker) {
                var lat = parseFloat(mapMarker.coords[0]);
                var long = parseFloat(mapMarker.coords[1]);
                var pos = {lat: lat, lng: long};
                var contentString = "<h3 class='text-center'>" + mapMarker.type + "</h3>";
                contentString += "<h4 class='text-center'>" + mapMarker.date[1] + "/" + mapMarker.date[0] + "/" + mapMarker.date[2] + "</h4>";
                contentString += "<p>" + mapMarker.desc + "</p>";
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            });
            
        }});
        
      }