// Redirect users from Submit page to About page

jQuery(function($){
	//.SDescription only exists on default About Tab - Do Not Edit
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


