
// global. currently active menu item 
var current_item = 0;

// show content settings
var section_hide_time = 500;
var section_show_time = 500;

// jQuery stuff
jQuery(document).ready(function($) {
	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});


//Gets Tooltipsters on My Music Section

$(document).ready(function() {
$('.tooltip-song1').tooltipster({
    content: $('<iframe width="520" height="415" src="https://www.youtube.com/embed/xWcN229VAXA?autoplay=1" frameborder="0" allowfullscreen></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
   
   $('.tooltip-song2').tooltipster({
    content: $('<iframe width="520" height="415" src="https://www.youtube.com/embed/jEor0qgdjD0?autoplay=1" frameborder="0" allowfullscreen></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
  
  
  $('.tooltip-song3').tooltipster({
    content: $('<iframe width="520" height="415" src="https://www.youtube.com/embed/jEor0qgdjD0?autoplay=1" frameborder="0" allowfullscreen></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
  
  $('.tooltip-song4').tooltipster({
    content: $('<iframe width="520" height="415" src="https://www.youtube.com/embed/6Tak68-JGbU?autoplay=1" frameborder="0" allowfullscreen></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
  });