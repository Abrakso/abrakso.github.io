$(document).ready(function () {
    $('.logo__button').on("click", function () {
        event.preventDefault();
        $('.menu').toggleClass('menu_fullscreen');
        $('.logo__button').toggleClass('logo__button_active');
    });

    $('.menu__item').on("click", function (event) {
        event.preventDefault();
        $('.menu').removeClass('menu_fullscreen');
        $('.logo__button').removeClass('logo__button_active');
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});