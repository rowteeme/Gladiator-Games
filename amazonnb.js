// Redirect users from Submit page to About page

jQuery(function($){
	if ($('.SDescription').length > 0){
	var enter = $('#cnav_submit').attr('href');
	window.open( enter , '_self');
	}
});


// Inserting and Moving Around Divs

jQuery(function($) {
	$('#elimination').insertAfter('.CHeader');
	$('#cnav_submit').prependTo('.CNav');
});

//iFrame Gallery to bottom of experience



//On DOM Ready function to get rid of all the crap in the footer
jQuery(function($){

	$(document).ready(function(){
	
		$("div.CFooterDivider").next().hide();
		$("div.CFooter").prev().remove();
		
	});

});




