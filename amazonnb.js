// Redirect users from Submit page to About page

jQuery(function($){
	if ($('.SDescription').length > 0){
	var enter = $('#cnav_submit').attr('href');
	window.open( enter , '_self');
	}
});



// Inserting and Moving Around Divs

jQuery(function($) {
	// Insert the Participate Instructions below .SBox
	$('<div id="participate"></div>').insertBefore('.SRules');
});

//Pre-Populate Fields that aren't being used with dummy text

jQuery(function($){
	$('#caption').attr('value', 'Caption');
	$('#city').attr('value', 'City');
});



//On DOM Ready function to get rid of all the crap in the footer
jQuery(function($){

	$(document).ready(function(){
	
		$("div.CFooterDivider").next().hide();
		$("div.CFooter").prev().remove();
		
	});

});




