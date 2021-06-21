import $ from 'jquery';

const activeClass = {
  mainNavBtn: 'tabs-nav-btn--active',
  innerTabsNavBtn: 'tabs-content-btn--active',
}

const refs = {
  $tabsMainContainer: $('.js-tabs'),
  $tabsMainNav: $('.js-tabs-nav'),
  $tabsMainNavBtn: $('.js-tab-btn'),
  $tabsMainContent: $('.js-tabs-content'),
  $innerTabsNav: $('.js-tabs-content-nav'),
  $innerTabsNavBtn: $('.js-tabs-content-btn'),
  $innerTabsContent: $('.js-tabs-content-inner'),
}

$(function () {

  refs.$tabsMainContainer.each((k, container) => {
    $(container)
      .find(refs.$tabsMainContent)
      .not(":first").hide();

    $(container)
      .find(refs.$tabsMainNav)
      .on('click', function (e) {
        if (e.target.nodeName !== 'BUTTON') return
        const $target = $(e.target);
        const $n = $target.data('targetTab');

        $target
          .closest($(this))
          .find(refs.$tabsMainNavBtn)
          .removeClass(activeClass.mainNavBtn);

        $target.addClass(activeClass.mainNavBtn)


        $target
          .closest(refs.$tabsMainContainer)
          .find(refs.$tabsMainContent)
          .hide().eq($n)
          .fadeIn('fast')
      })

    $(container)
      .find(refs.$tabsMainContent)
      .each((k, mainContent) => {

        $(mainContent)
          .find(refs.$innerTabsContent).not(":first")
          .hide();

        $(mainContent).find(refs.$innerTabsNav).on('click', function (e) {
          if (e.target.nodeName !== 'BUTTON') return
          const $target = $(e.target);
          const $n = $target.data('targetTab');

          $(this)
            .find(refs.$innerTabsNavBtn)
            .removeClass(activeClass.innerTabsNavBtn);

          $target
            .addClass(activeClass.innerTabsNavBtn)

          $(this)
            .siblings(refs.$innerTabsContent)
            .hide().eq($n).fadeIn('slow')
        })
      })

  })


  document.querySelectorAll('.service-list').forEach(list => {

    if (list.querySelectorAll('li').length > 5) {
      list.classList.add('service-list-columns')
    }
  })

  document.querySelectorAll('.price-tables').forEach(table => {
    if (table.querySelectorAll('.price-table').length == 1) {
      table.classList.add('price-tables--one-item')
    }
  })


})

