$(document).ready(function() {

    if (!Modernizr.svg) {
      $(".logo img").attr("src", "images/logo.png");
    }


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
           // $('body').css('-webkit-filter', 'invert(1)');
        });

   
    // svg part
    // Now lets load external SVG file:
    var s = Snap("#bulb");
    Snap.load("../images/svg/bulb.svg", function (f) {
        // Note that we traversre and change attr before SVG
        // is even added to the page
        //f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
        //g = f.select("g");
        s.append(f);
        // Making croc draggable. Go ahead drag it around!
        //s.drag();
        // Obviously drag could take event handlers too
        // That’s better! selectAll for the rescue.
    });

});