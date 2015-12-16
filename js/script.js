/* js file */

(function( window, undefined ){

	$( function(){

		$(".crosscover").crosscover({
		   	inClass:'fadeInLeftBig',
  			outClass:'fadeOutLeftBig',
		    interval: 7000,
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

	});

})( window, undefined );