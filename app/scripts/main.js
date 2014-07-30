$(document).ready(function() {
    $('#contact-form').hide;
	// $('#circulo').hover(function() {
	// 	$( this ).addClass('animated rubberBand');
	// }, function() {
	// 	$( this ).removeClass('animated rubberBand');
	// });
	$('#circulo').click(function(event) {
		/* Stuff to do when the mouse enters the element */
        $('#contact-form').show;
        $( '#circulo' ).animate({width: "8000px", height:"8000px", opacity:.94,right:"-4000px",bottom:"-4000px"}, 500);
    });

    $('#close').click(function() {
        $('#contact-form').hide;
		$( '#circulo' ).animate({width: "50px", height:"50px", opacity:.1,right:"80px",bottom:"55px"}, 500);
    });
    $('#lamparita').click(function() {
            $('body').css('-webkit-filter', 'invert(1)');
        });

});