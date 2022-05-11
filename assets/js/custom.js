
var params_car = new URLSearchParams(document.location.search);
var param_car = params_car.get("brandProduct");
var startProdCarousel;
if (param_car == 'cider') {
  startProdCarousel = 2;
}
if (param_car == 'light') {
  startProdCarousel = 1;
}

jQuery(document).ready(function ($) {

  $(".regular").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 700,
    mobileFirst: true,
    fade: true,
    infinite: true,
    initialSlide: startProdCarousel,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    respondTo: 'min',
    cssEase: 'linear',
    prevArrow: '<span class="icon-angle-left"></span>',
    nextArrow: '<span class="icon-angle-right"></span>'
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: startProdCarousel,
    draggable: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: startProdCarousel,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    autoplaySpeed: 2000,
    prevArrow: '<span class="icon-angle-left"></span>',
    nextArrow: '<span class="icon-angle-right"></span>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          dots: false,
          slidesToShow: 3,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]

  });

});


