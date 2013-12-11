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
	// Create a div called Submit Section and append to .SBox
	$('<div id="submit-section"><h1>Tag your entry with #NBGladiator or upload from the options below</h1><div id="upload-methods"><img id="computer-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/upload.png" /><img id="facebook-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/facebook.png" /><img id="instagram-cta" class="social-cta" src="https://opop.cachefly.net/amazonnb/instagram.png" /></div></div>').insertAfter('#instructions');
});

// Pre-Populate Fields that aren't being used with dummy text

jQuery(function($){
	$('#caption').attr('value', 'Caption');
	$('#city').attr('value', 'City');
});

// Move form fields to modal div

jQuery(function($) {
	$('')
});

// On DOM Ready function to get rid of all the crap in the footer
jQuery(function($){

	$(document).ready(function(){
	
		$("div.CFooterDivider").next().hide();
		$("div.CFooter").prev().remove();
		
	});

});