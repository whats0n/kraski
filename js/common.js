head.ready(function() {

	$('.js-nav').each(function() {
		$('body').on('click', function() {
			$('.js-nav').removeClass('is-active');
			$('.js-nav-menu').removeClass('is-active');			
		});
		$('.js-nav-btn').on('click', function () {
			$('.js-nav').toggleClass('is-active');
			$('.js-nav-menu').toggleClass('is-active');
			event.stopPropagation();
		});
		$('.js-nav-menu').on('click', function(event) {
			event.stopPropagation();
		});
	});
});