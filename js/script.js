/* js file */

(function( window, undefined ){

	//CODE FOR SLIDER
	$( function(){ 
		$(".crosscover").crosscover({
		   	inClass:'fadeInRightBig',
  			outClass:'fadeOutRightBig',
		    interval: 6000,
		    startIndex: 0,
		    autoPlay: true,
		    dotsNav: true,
		    controller: false,
		    controllerClass: 'crosscover-controller',
		    prevClass: 'crosscover-prev',
		    nextClass: 'crosscover-next',
		    playerClass: 'crosscover-player',
		    playerInnerHtml: '<span class="crosscover-icon-player"></span>',
		    prevInnerHtml: '<span class="crosscover-icon-prev"></span>',
		    nextInnerHtml: '<span class="crosscover-icon-next"></span>'
		});
	});

	$(function () {

	    var counter = 0,
	        divs = $('#it, #data, #sound, #voip, #security');

	    function showDiv () {
	        divs.hide() // hide all divs
	            .filter(function (index) { 
	            	return index == counter; }) // figure out correct div to show
	            .fadeIn('slow'); // and show it
	        counter++;
	    }; // function to loop through divs and show correct div
	    showDiv(); // show first div    

	    setInterval(function () {
	        showDiv(); // show next div
	    }, 10 * 600); // do this every 10 seconds    

	});


	//DROP DOWN ON HOVER AND CLICK
	$(function(){

		$(".dropdown").hide();

		$("#mobile-nav").on( "click", function(e){   
	      	$(".dropdown").slideToggle(300);
	      	
		});

		$("#main-nav").mouseover(function(e){  
	      	$(".dropdown").slideDown(300);

		});

		$(".dropdown").mouseleave(function () {
			$(".dropdown").slideUp();
		});
	});



	//CONTACT FORM JAVASCRIPT
	(function() {

	// Create input element for testing
	var inputs = document.createElement('input');
	
	// Create the supports object
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {
		
	}
	
	// Fallback for required attribute
	if(!supports.required) {
		
	}

	// Fallback for placeholder attribute
	if(!supports.placeholder) {
		
	}
	
	// Change text inside send button on submit
	var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			this.innerHTML = '...Sending';
		}
	}

})();

})( window, undefined );