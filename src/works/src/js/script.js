$(document).ready(function () {
    $('.logo__button').on("click", function () {
        $('.menu').toggleClass('menu_fullscreen');
        $('.logo__button').toggleClass('logo__button_active');
    });

    $('.menu__item').on("click", function (event) {
        $('.menu').removeClass('menu_fullscreen');
        $('.logo__button').removeClass('logo__button_active');

        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // $('.menu__item').on("click", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href');
    //     var top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);
    // });
});