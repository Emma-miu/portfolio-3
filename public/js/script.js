$(function () {


	//header menu
	//--------------------------

	var clicks = 0;

	$(".header__nav-toggle").on("click", function () {
		
		$(".header__nav-toggle").toggleClass("js-nav-close js-open");
		$(".header__logo").toggleClass("js-open");
		$("body").toggleClass("fixed");

		if (clicks == 0) {
			$(".header__menu").removeClass("js-menu-trans");
			$(".header__menu").addClass("js-menu-open");
			clicks++;
		} else {
			$(".header__menu").addClass("js-menu-trans");
			clicks = 0;
		}
	});

	//current 
	var title = ["About", "News", "Contact", "Work"];
  if (title.includes($('.js-current').text())) {
		$(`.js-link-name:contains(${$('.js-current').text()})`).addClass('isCurrent');
	}


});

$(document).ready(function() {
	//inview
	//--------------------------
	$(".js-inview").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).stop().addClass("js-is-show");
		}
	});

});




