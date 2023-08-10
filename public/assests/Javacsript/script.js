(function ($) {
    'use strict';

    // Fixed header
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 70) {
        $('.site-navigation, .trans-navigation').addClass('navbar-white');
      } else {
        $('.site-navigation, .trans-navigation').removeClass('navbar-white');
      }
    });

    // SCROLL TO TOP
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.scroll-to-top').addClass('reveal');
        } else {
            $('.scroll-to-top').removeClass('reveal');
        }
    });


    // scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

})(jQuery);

const typed = new Typed('.multiple-text', {
    strings: ['Soccer Verse', 'Soccer Verse'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 700,
    loop: true
});
