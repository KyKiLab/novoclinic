import $ from "jquery";
const refs = {
  $dropDownBtn: $('.js-dropdown-btn'),
  $dropDownContent: $('.js-dropdown-content'),
  burgerBtn: document.querySelector('.js-toggle-menu'),
  header: document.querySelector('#header'),

}

$(function () {
  refs.$dropDownBtn.on('click', e => {
    $(e.target).toggleClass('is-active');
    refs.$dropDownContent.fadeToggle(100);
  })
});

const toggleMenu = (e) => {

  refs.burgerBtn.classList.toggle('toggle-menu--on');
  refs.header.classList.toggle('mob-menu-show');
  document.body.classList.toggle('scrolled');
};


refs.burgerBtn && refs.burgerBtn.addEventListener('click', toggleMenu);




