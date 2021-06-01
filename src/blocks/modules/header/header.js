import $ from "jquery";

$(function () {
  const refs = {
    $dropDownBtn: $('.js-dropdown-btn'),
    $dropDownContent: $('.js-dropdown-content'),
  }

  refs.$dropDownBtn.on('click', e => {
    $(e.target).toggleClass('is-active');
    refs.$dropDownContent.fadeToggle(100);
  })
});