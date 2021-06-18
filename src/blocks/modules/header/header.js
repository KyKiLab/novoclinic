import $ from "jquery";
import throttle from "lodash/throttle";

const refs = {
  $dropDownBtn: $('.js-dropdown-btn'),
  $dropDownContent: $('.js-dropdown-content'),
  burgerBtn: document.querySelector('.js-toggle-menu'),
  header: document.querySelector('#header'),
}

$(function () {

  $('a[href*=\\#goto]:not([href=\\#goto])').bind('click.smoothscroll', function (event) {

    event.preventDefault();
    var target = $(this).attr('href');
    var offset = $('#header').height();
    var marginTop = $(target).offset().top;
    $('html, body').animate({ scrollTop: marginTop - offset }, 800);
    window.location
    return false;
  })

  refs.$dropDownBtn.on('click', e => {
    $(e.target).toggleClass('is-active');
    refs.$dropDownContent.fadeToggle(100);
  })


  $(window).on('scroll', throttle(function () {

    if ($(this).scrollTop() > $('.about-slider').offset().top - 100) {
      // $('body').addClass('scrolled')
    }

    if ($(this).scrollTop() > 899) {
      $('#header').addClass("header-sticky");
    }
    else {
      $('#header').removeClass("header-sticky");
    }
  }, 250));


  const toggleMenu = (e) => {

    refs.burgerBtn.classList.toggle('toggle-menu--on');
    refs.header.classList.toggle('mob-menu-show');
    document.body.classList.toggle('scrolled');
  };


  refs.burgerBtn && refs.burgerBtn.addEventListener('click', toggleMenu);

});


// $(function () {

//   var scroller = {};
//   scroller.e = document.querySelector(".about-slider");

//   if (scroller.e.addEventListener) {
//     scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
//     scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
//   } else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

//   function MouseWheelHandler(e) {

//     // cross-browser wheel delta
//     var e = window.event || e;
//     var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

//     var pst = $('.about-slider').scrollLeft() + delta;

//     if (pst < 0) {
//       pst = 0;
//     } else if (pst > $('.about-slider__item').width()) {
//       pst = $('.about-slider__item').width();
//     }

//     $('.about-slider').scrollLeft(pst);

//     return false;
//   }
// });
