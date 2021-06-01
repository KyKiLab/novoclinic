import $ from 'jquery'
import 'slick-carousel'

jQuery(function ($) {
  const $slick_slider = $('#topBannerSlider');
  const settings_slider = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  $slick_slider.slick(settings_slider);
})

