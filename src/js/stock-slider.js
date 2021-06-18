import $ from 'jquery'
import 'slick-carousel'
import throttle from "lodash/throttle";

jQuery(function ($) {

  const $slick_slider = $('.stock-slider');
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

  const $slick_slider2 = $('.js-horizontal-slider');
  const settings_slider2 = {
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    fade: false,

    responsive: [

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
  }

  $slick_slider2.slick(settings_slider2);

  let blocked = false;
  let blockTimeout = null;
  let prevDeltaY = 0;

  $(window).on('scroll', throttle(function (e) {

    if ($(this).scrollTop() > $('.about-slider').offset().top - 95) {

      $slick_slider2.on('mousewheel DOMMouseScroll wheel', (function (e) {
        let slideIndex = $(this).find('.slick-current').data('slick-index');
        let lastSlide = $(this).find('.slick-slide').length - 1;
        let deltaY = e.originalEvent.deltaY;



        if (slideIndex + 1 == lastSlide) {

          return
        }


        e.preventDefault();
        e.stopPropagation();

        clearTimeout(blockTimeout);

        blockTimeout = setTimeout(function () {
          blocked = false;
        }, 100);


        if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) {
          blocked = true;
          prevDeltaY = deltaY;

          if (deltaY > 0) {
            $(this).slick('slickNext');

          } else {
            $(this).slick('slickPrev');
          }

        }

      }));
    }


  }, 200));




})

