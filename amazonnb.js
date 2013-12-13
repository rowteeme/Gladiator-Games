// Redirect users from Submit page to About page

jQuery(function($){
	if ($('.SDescription').length > 0){
	var enter = $('#cnav_submit').attr('href');
	window.open( enter , '_self');
	}
});

// Resize iframe height to content [code found online, does not work cross-domain]
$(function(){

    var iFrames = $('iframe');
  
	function iResize() {
	
		for (var i = 0, j = iFrames.length; i < j; i++) {
		  iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';
		}
	}
	    
	if ($.browser.safari || $.browser.opera) { 
	
	   iFrames.load(function(){
	       setTimeout(iResize, 0);
       });
    
	   for (var i = 0, j = iFrames.length; i < j; i++) {
			var iSource = iFrames[i].src;
			iFrames[i].src = '';
			iFrames[i].src = iSource;
       	}
           
    	} else {
    		iFrames.load(function() { 
    	       this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
			}
		);
	}
});


// Inserting and Moving Around Divs

jQuery(function($) {
	// Insert the Participate Instructions below .SBox
	$('<div id="participate"></div>').insertAfter('.SBox');
	// Create a div called Submit Section and insert after Instructions
	// $('<div id="submit-section"><h1>Tag your entry with #NBGladiator or upload from the options below</h1><div id="upload-methods"><img id="computer-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/upload.png" /><img id="facebook-upload" class="social-cta" src="https://opop.cachefly.net/amazonnb/facebook.png" /><img id="instagram-cta" class="social-cta" src="https://opop.cachefly.net/amazonnb/instagram.png" /></div></div>').insertAfter('#instructions');

	//Insert the Gallery beneath the Submit page
	$('<iframe src="https://offerpop.com/Contest.psp?c=512215&amp;u=54823&amp;a=281603285304794&amp;p=643783498974952&amp;rest=0&amp;v=View" id="bottomgallery" width="100%" height="auto"/>').insertBefore('.CFooterDivider'); 
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
				setTimeout(validateLinks, 2000);
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