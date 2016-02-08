/* js file */

(function( window, undefined ){

	console.log(location.search)

	//CODE FOR SLIDER
	$( function(){ 
		$(".crosscover").crosscover({
		   	inClass:'fadeInRightBig',
  			outClass:'fadeOutLeftBig',
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

	//DROP DOWN ON HOVER OR ClICK 
	$(function(){

		$("#mobile-nav").on( "click", function(e){   
	      	$(".dropdown").slideToggle(300);
	      	e.preventDefault();
		});

		$("#main-nav").on('click', function(e) {
			$('.dropdown').slideToggle();
			e.preventDefault();
		});
	});

	function getQueryParameters(str) {
		return (str || document.location.search)
			.replace(/(^\?)/, '')
			.split('&')
			.reduce(function (a, x, i) {
				var n = x.split('='), y = n[0], z = n[1];
				try { z = JSON.parse(z); } catch(e) { }
				a[y] = a[y] ? typeof a[y] == 'object' ? (a[y].push(z) && a[y]) : [a[y], z] : z;
				return a;
			}, {});
	}

	
	$(".email-sent").hide();

	var queryParameters = getQueryParameters(location.search);
	
	if (queryParameters.email_sent === true) {
  		alert("Your message was sent. We will be in touch");
	}

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