import $ from 'jquery';

const activeClass = {
  mainNavBtn: 'tabs-nav-btn--active',
  innerTabsNavBtn: 'tabs-content-btn--active',
}

const refs = {
  // $tabsMainContainer: $('.js-tabs'),
  $tabsMainNav: $('.js-tabs-nav'),
  $tabsMainNavBtn: $('.js-tab-btn'),
  $tabsMainContent: $('.js-tabs .js-tabs-content'),
  $innerTabsNav: $('.js-tabs-content-nav'),
  $innerTabsNavBtn: $('.js-tabs-content-btn'),
  $innerTabsContent: $('.js-tabs-content-inner'),
}

$(function () {

  refs.$tabsMainContent.not(":first").hide();

  refs.$tabsMainNav.on('click', function (e) {
    if (e.target.nodeName !== 'BUTTON') return
    const $target = $(e.target);

    const $n = $target.data('targetTab');

    refs.$tabsMainNavBtn.removeClass(activeClass.mainNavBtn)
    $target.addClass(activeClass.mainNavBtn)

    refs.$tabsMainContent.hide().eq($n).fadeIn('slow')
  })

  refs.$tabsMainContent.each((k, mainContent) => {

    $(mainContent).find(refs.$innerTabsContent).not(":first").hide();

    $(mainContent).find(refs.$innerTabsNav).on('click', function (e) {
      if (e.target.nodeName !== 'BUTTON') return
      const $target = $(e.target);
      const $n = $target.data('targetTab');

      $(this).find(refs.$innerTabsNavBtn).removeClass(activeClass.innerTabsNavBtn)
      $target.addClass(activeClass.innerTabsNavBtn)
      $(this).siblings(refs.$innerTabsContent).hide().eq($n).fadeIn('slow')
    })
  })


  document.querySelectorAll('.service-list').forEach(list => {

    if (list.querySelectorAll('li').length > 5) {
      list.classList.add('service-list-columns')
    }
  })


})

