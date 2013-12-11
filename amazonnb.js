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


//On DOM Ready function to get rid of all the crap in the footer
jQuery(function($){

	$(document).ready(function(){
	
		$("div.CFooterDivider").next().hide();
		$("div.CFooter").prev().remove();
		
	});	

});

//Function for pop up
jQuery(function($) {		   
	$('a.popup').click(function() {				
			var popuprel = $(this).attr('rel');
		$('#' + popuprel).fadeIn();
		$('#fadebg').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
			var topindent = ($('#' + popuprel).height() + 10) / 2;
			var leftindent = ($('#' + popuprel).width() + 10) / 2;
		$('#' + popuprel).css({
			'margin-top' : -topindent,
			'margin-left' : -leftindent
		});
	});
		
		$('#fadebg , .closebutton').click(function() {
				  
		$('#popbox1, #fadebg').fadeOut()
		return false;
	});
});




