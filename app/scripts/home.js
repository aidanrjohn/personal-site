$(document).ready(function() { 
    
    initMap();
    
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
            }, 500);
    });
        
     $("#projects").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects-page").offset().top
            }, 500);
        
     });
     
});

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
                var image;
                if (mapMarker.type === 'burglary')
                    image = 'public/img/burglar.png';
                else
                    image = 'public/img/badge.png';
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: image
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            });
            
        }});
        
      }