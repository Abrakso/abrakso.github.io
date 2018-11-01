$(document).ready(function () {
	$('.info__works').text($('.element').length + " works");
	var lpc = $(".main__landing-pages").find(".element").length;
	var mpc = $(".main__multi-pasges").find(".element").length;
	var shc = $(".main__shops").find(".element").length;
	$(".main__landing-pages").find(".type__count").text("("+ lpc +" works)");
	$(".main__multi-pasges").find(".type__count").text("("+ mpc +" works)");
	$(".main__shops").find(".type__count").text("("+ shc +" works)");

	$('.menu_button').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('menu_button_active');
		$('.menu').toggleClass('menu_active');
	});

	$('.item__button').on('click', function(event){
		event.preventDefault();
		$('.menu_button').removeClass('menu_button_active');
		$('.menu').removeClass('menu_active');
	});

});