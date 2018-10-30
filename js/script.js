$(document).ready(function () {
	$('.userbar__works').text($('.element').length + " works");
	var lpc = $(".main__landing-pages").find(".element").length;
	$(".main__landing-pages").find(".type__count").text("("+ lpc +" works)");
});