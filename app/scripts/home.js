$(document).ready(function() { 
    $('#title').fadeTo(500, 1).css("display", "table");
    $('.link').each(function(i) {
        $(this).delay((++i) * 400).fadeTo(500, 1);  
    });
}); 