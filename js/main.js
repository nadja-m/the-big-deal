var controller;

$(function(){
  // create main scroll controller
  controller = new ScrollMagic.Controller();

  // begin resize logic

  function resize() {
    $('.page').css('height', $(window).height());
  }

  $(window).on('resize', resize);
  resize();
});

$(function(){
	// Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	//show scroller after some time
	$('.scroller').delay(2000).fadeIn();

	//initialize scroll
	$('.scroller').click(function(){
		$('html, body').animate({scrollTop : 1000},800);
		return false;
	});

  $(window).scroll(function(){
		if ($(this).scrollTop() < 50) {
			$('.scroller').fadeIn();
		} else {
			$('.scroller').fadeOut();
		}
	});

});
