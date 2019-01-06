$(document).ready(function () {
  $('.cbbtn').magnificPopup();
  // $('.submit').magnificPopup();
  $('.footer_policy_text_link').magnificPopup();
  $('.revbtn').magnificPopup();
  $('.citybtn').magnificPopup();

  // avatar();


  
  $('.discount_btn').on('click', function(){
    event.preventDefault();
    $('.discount').toggleClass('discount-close');
  });
  $('.menuBtn').on("click", function () {
      event.preventDefault();
      $('.menuBtn_line').toggleClass('menuBtn_line-active');
      $(".nav").slideToggle("slow", function() {});
  });
  $('.hcbtn').on("click", function () {
      event.preventDefault();
      $(".headerContacts").slideToggle("slow", function() {});
  }); 

  $('.priceBlock_content_menu_btn').on("click", function () {
      event.preventDefault();
      $(".priceBlock_content_menu_item").addClass('priceBlock_content_menu_item-show');
      $(".priceBlock_content_menu_btn").addClass('priceBlock_content_menu_btn-hide');
      $(".priceBlock_content_menu").addClass('priceBlock_content_menu-active');
      // $(".priceBlock_content_menu_btn").css("display", "none;");

  });

 $('.faq_list_question_name').on("click", function () {
    event.preventDefault();
    $('.faq_list_question_answer').removeClass('faq_list_question_answer-active');
    $(this).parent().find('.faq_list_question_answer').addClass('faq_list_question_answer-active');
  });

 $('.priceBlock_content_menu_more').on("click", function () {
    event.preventDefault();
    $(".priceBlock_content_menu_item").removeClass('priceBlock_content_menu_item-show');
    $(".priceBlock_content_menu_btn").removeClass('priceBlock_content_menu_btn-hide');
    $(".priceBlock_content_menu").removeClass('priceBlock_content_menu-active');
    // $(".priceBlock_content_menu_btn").css("display", "none;");

  });

  


  $(".owl-carousel").owlCarousel({
      autoWidth:true,
      dots: false,
      navText: ["",""],
      rewindNav : true,
      responsive:{
          320:{
              loop: true,
              items:1,
              mouseDrag: true,
              autoplay: true,
              autoplayTimeout: 2000,
              center:true
          },
          768:{
              mouseDrag: false
          },
          1200:{
              mouseDrag: false
          }
      }
  });

  $(".features_slider").owlCarousel({
      autoWidth:false,
      nav: true,
      dots: false,
      // autoplay: true,
      autoplayTimeout: 2000,
      loop:true,
      // navContainerClass: 'sliderNav',
      // navClass: [$('sliderNav_arrow-left'),$('sliderNav_arrow-right')],
      // rewindNav: true,
      responsive:{
          320:{
              // loop: true,
              items:1,
              // mouseDrag: true,
              // autoplay: true,
              // autoplayTimeout: 2000,
              center:true
          },
          768:{
              mouseDrag: false
          },
          1200:{
            items:5,
            mouseDrag: true,
            // margin: 146
          }
      }
  });

  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');
  });
});

// function avatar(){
//     var cs = $('.comments_slider_item_info_name').map(function(){return $(this).text()}).get();
//     var ava = $('.comments_slider_item_logo');
//     var i;
//     for(i=0;i<cs.length;i++){
//       ava.text(cs[i]);
      
//     }
//     // var cs = $('.comments_slider_item_info_name').text();
//     console.log(ava);
//   };