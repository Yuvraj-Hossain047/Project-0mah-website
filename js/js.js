// part1 counter up
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});
// part4 slider
$('.cslider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="prev fa-solid fa-angle-left"></i>',
  nextArrow: '<i class="next fa-solid fa-angle-right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});