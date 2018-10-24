$(document).ready(function () {
    $('.logo__button').on("click", function () {
        $('.menu').toggleClass('menu_fullscreen');
        $('.logo__button').toggleClass('logo__button_active');
    });

    $('.menu__item').on("click", function () {
        $('.menu').removeClass('menu_fullscreen');
        $('.logo__button').removeClass('logo__button_active');
    });
});