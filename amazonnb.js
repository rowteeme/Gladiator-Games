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
	$('<div id="participate"></div>').insertAfter('.SBox');
	// Create a div called Submit Section and insert after Instructions
	// $('<div id="submit-section"><h1>Tag your entry with #NBGladiator or upload from the options below</h1><div id="upload-methods"><img id="computer-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/upload.png" /><img id="facebook-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/facebook.png" /><img id="instagram-cta" class="social-cta" src="https://opop.cachefly.net/amazonnb/instagram.png" /></div></div>').insertAfter('#instructions');
});

// Pre-Populate Fields that aren't being used with dummy text

jQuery(function($){
	$('#caption').attr('value', 'Caption');
	$('#city').attr('value', 'City');
});


	

// Placeholder Text for Form Fields

jQuery(function($){

	// Reorder inputs and Placeholders for Submit Form
	$('#sfield_name').insertAfter('#sfield_lastname');
	$("#email").attr('placeholder', 'Email address');
	$("#firstname").attr('placeholder', 'First name');
	$("#lastname").attr('placeholder', 'Last name');
	$("#zip").attr('placeholder', 'Zip code');
	$("#name").attr('placeholder', 'Username');
	$("#surname").attr('placeholder', 'Phone number');

	//Fix Placeholders
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
	    var input = $(this);
	    if (input.val() == input.attr('placeholder')) {
	      input.val('');
	    }
  	})
});
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();
});




// On DOM Ready function to get rid of all the crap in the footer
jQuery(function($){

	$(document).ready(function(){
	
		$("div.CFooterDivider").next().hide();
		$("div.CFooter").prev().remove();
		

	});	

});



jQuery(function($) {   
	// Move Form into the PopBox
	$('#crop_area').appendTo('#popbox1');
	$('.SBox').appendTo('#popbox1');
	$('#entry_submit').prependTo('#popbox1');
	$('#UserMessage').prependTo('#popbox1');


	//Create positionPopBox function for reuse
	var positionPopBox = function(elem){
		var popuprel = $(elem).attr('rel');
		$('#' + popuprel).fadeIn();
		$('#fadebg').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
		var topindent = ($('#' + popuprel).height() + 10) / 2;
		var leftindent = ($('#' + popuprel).width() + 10) / 2;
		$('#' + popuprel).css({
		'margin-top' : -topindent,
		'margin-left' : -leftindent
		});
	}

	//If the error message exists
	if($('.Invalid').length > 0) {
		var that = $('.social-cta').first();
		positionPopBox(that)
	}

	$('.social-cta').click(function() {
		var that = this;
		positionPopBox(that)
	});

		$('.from_facebook_button.fancybox_link').click(function(){
		var firstLink = $('#cropbox').attr('src');
		$('#popbox1, #fadebg').fadeOut();

		var validateLinks = function(){
			var secondLink = $('#cropbox').attr('src');
			if (firstLink === secondLink){
				setTimeout(validateLinks, 1500);
			} else{
				$('#popbox1, #fadebg').fadeIn();
			}
		}
		validateLinks()
	});

	$('#fadebg , .closebutton').click(function() {  
		$('#popbox1, #fadebg').fadeOut()
		return false;
	});
});


jQuery(function($){
if ($('#frmSignUp').length > 0 ) {

	//Take height of cropbox & resize modal
	var resize = function(){
		var nheight = parseInt(document.getElementById('cropbox').style.height);
		if (nheight < 250){
			nheight = 250;
		}
		var rheight = 380 + nheight;

		$('#popbox1').css('height',rheight + 'px');
	}

		//Validate image links from facebook Click event
		var validation = function(){
			var nimgLink = $('#cropbox').attr('src');
				if (imgLink === nimgLink){
					setTimeout( validation, 1500)
				} 
				else{
					resize();
				}
		}

		var blankLink = '//s3.amazonaws.com/com.offerpop.static/images/white.gif'
			,freshLink = $('#cropbox').attr('src');

				if (freshLink !== blankLink){
					resize();
				}

		$('.CFile .from_facebook_button.fancybox_link').click(function(){
			imgLink = $('#cropbox').attr('src');
			setTimeout(validation, 1000);
		});

		$('#file_data').change(function(){
			imgLink = $('#cropbox').attr('src');
			setTimeout(validation, 1000);
		});


}
});