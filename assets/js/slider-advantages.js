$(document).ready(function () {
  $('.slider-advantages').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 7000,
    swipe: true,
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  });
});
