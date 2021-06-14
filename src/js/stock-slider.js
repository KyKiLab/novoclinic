import $ from 'jquery'
import 'slick-carousel'

jQuery(function ($) {
  const $slick_slider = $('#stockSlider');
  const settings_slider = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  $slick_slider.slick(settings_slider);
})

