jQuery(function($){
	// Redirect users from Submit page to About page
	if ($('.SDescription').length > 0){
		var enter = $('#cnav_submit').attr('href');
		window.open( enter , '_self');
	}

	// On DOM Ready function to get rid of all the crap in the footer
	$("div.CFooterDivider").next().hide();
	$("div.CFooter").prev().remove();

		// Pre-Populate Fields that aren't being used with dummy text
		$('#caption').attr('value', 'LET THE GAMES BEGIN! The NB Gladiator Games are underway – unleash your inner gladiator for a chance to win a 10-day VIP experience to Rome for two, plus entries to run the legendary Rome Marathon, courtesy of @newbalance. Enter now.');
		$('#city').attr('value', 'City');
		// Inserting and Moving Around Divs
		// Insert the Participate Instructions below .SBox
		$('<div id="participate"></div>').insertAfter('.SBox');
		// Create a div called Submit Section and insert after Instructions
		// $('<div id="submit-section"><h1>Tag your entry with #NBGladiator or upload from the options below</h1><div id="upload-methods"><img id="computer-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/upload.png" /><img id="facebook-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/facebook.png" /><img id="instagram-cta" class="social-cta" src="https://opop.cachefly.net/amazonnb/instagram.png" /></div></div>').insertAfter('#instructions');
		
		//Insert the Gallery beneath the Submit page
		$('<iframe src="https://offerpop.com/Contest.psp?c=512215&amp;u=54823&amp;a=281603285304794&amp;p=643783498974952&amp;rest=0&amp;v=View" id="bottomgallery" width="100%" height="600"/>').insertAfter('#participate'); 
		
		//Insert Submit button
		$('#form_submit_button').html('<img src="https://opop.cachefly.net/amazonnb/submit.png" />');

			//Hide the Tab image on the Gallery page and style changes
			if ($('#gallery-controls').length > 0) {
					$('.CHeader').hide();
				} else if ($('#sharebar').length > 0) {
					$('.CHeader').hide();
					$('.CSub').css('color', 'white');
					$('.TInstructions').css('color', 'white');
					$('.bitlyLink').css('color', 'white');
					$('#share-option-facebook a').css('color', 'white');
					$('#share-option-twitter a').css('color', 'white');
					$('#share-option-email a').css('color', 'white');
			}

	// Elimination Round
	$('.playerThumb a').mouseenter(function(){
			$(this).next().show();
	});

	$('.playerThumb a').mouseleave(function(){
			$(this).next().hide();
	});

	//Create Back to Gallery Button
	var galleryPage = $('#cnav_view').attr('href');
	$('<div id="goBack"><a href="' + galleryPage + '" target="_self"><p>Back to Gallery</p></a></div>').insertAfter('#sharebar');

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
		if (popuprel !== 'popbox3'){
			var topindent = ($('#' + popuprel).height() + 10) / 2;
		}else{
			var topindent = 850;
		}
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
				setTimeout(validateLinks, 2000);
			} else{
				$('#popbox1, #fadebg').fadeIn();
			}
		}
		validateLinks()
	});

	$('#fadebg , .closebutton').click(function() {  
		$('#popbox1, #fadebg, #popbox2, #popbox3').fadeOut()
		return false;
	});
});

jQuery(function($){
//Resize Modal based on user image size
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
