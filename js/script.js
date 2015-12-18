/* js file */

(function( window, undefined ){

	$( function(){

		$(".crosscover").crosscover({
		   	inClass:'fadeInRightBig',
  			outClass:'fadeOutRightBig',
		    interval: 8000,
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

	$( function(){

		$(".dropdown").hide();

		$("#mobile-nav").on( "click", function(e){   //e is just an object that stores what happened.

	      	$(".dropdown").slideDown(500);
	      	e.stopPropagation();
		});

		$(window).on( "click", function(e){   //e is just an object that stores what happened.

	      	$(".dropdown").slideUp();

		});

		$("#main-nav").mouseover(function(e){   //e is just an object that stores what happened.

	      	$(".dropdown").slideDown(500);

		});

		$(".dropdown").mouseleave(function () {
			$(".dropdown").slideUp();
		});
	});

})( window, undefined );