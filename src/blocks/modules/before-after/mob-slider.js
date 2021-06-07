
import $ from 'jquery';
import 'slick-carousel';

jQuery(function ($) {
  // slider
  const $slick_slider = $('.js-gallery-mob-slider');
  const settings_slider = {
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
    // more settings
  }
  slick_on_mobile($slick_slider, settings_slider);

  // slick on mobile
  function slick_on_mobile(slider, settings) {
    $(window).on('load resize', function () {
      if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };
});