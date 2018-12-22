$(document).ready(function () {
  $('.cbbtn').magnificPopup();
  // $('.submit').magnificPopup();
  $('.footer_policy_text_link').magnificPopup();
  $('.revbtn').magnificPopup();


  
  $('.policy_wrap').niceScroll({
          cursorcolor: "#575a60",
          background: "rgba(0,0,0,.1)",
          cursorwidth: "9px",
          cursorminheight: "89",
          cursorborder: "none",
          autohidemode: true,
          disablemutationobserver: true,
          emulatetouch: false
        });

  
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

  $('.priceList_pricesBlock_kindOfWorks_btn').on("click", function () {
      event.preventDefault();
      $(".priceList_pricesBlock_kindOfWorks_item").addClass('priceList_pricesBlock_kindOfWorks_item-show');
      $(".priceList_pricesBlock_kindOfWorks_btn").addClass('priceList_pricesBlock_kindOfWorks_btn-hide');
      $(".priceList_pricesBlock_kindOfWorks").addClass('priceList_pricesBlock_kindOfWorks-active');
      // $(".priceList_pricesBlock_kindOfWorks_btn").css("display", "none;");

  });

   $('.priceList_pricesBlock_kindOfWorks_more').on("click", function () {
      event.preventDefault();
      $(".priceList_pricesBlock_kindOfWorks_item").removeClass('priceList_pricesBlock_kindOfWorks_item-show');
      $(".priceList_pricesBlock_kindOfWorks_btn").removeClass('priceList_pricesBlock_kindOfWorks_btn-hide');
      $(".priceList_pricesBlock_kindOfWorks").removeClass('priceList_pricesBlock_kindOfWorks-active');
      // $(".priceList_pricesBlock_kindOfWorks_btn").css("display", "none;");

  });

  


  $(".owl-carousel").owlCarousel({
      autoWidth:true,
      dots: false,
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