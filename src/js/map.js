// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

ymaps.ready(init);

function init() {
  // Создание карты.
  // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
  var myMap = new ymaps.Map(document.getElementById('contactsMap'), {
    // Координаты центра карты.
    // Порядок по умолчнию: «широта, долгота».
    center: [59.94, 30.33],
    zoom: 12,
    // Элементы управления
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
    controls: []
  });

  // myMap.behaviors.disable('scrollZoom');
  // Добавление метки
  // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
  var myPlacemark = new ymaps.Placemark([59.903065, 30.315131], {
    hintContent: 'Ст. м. Фрунзенская, Красуцкого д. 3 лит. М',
    balloonContentFooter: 'Режим работы: с 10 до 21:00, без выходных',
  }, {
    // Опции.

    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',

    // // Своё изображение иконки метки.
    // iconImageHref: '../img/Vector.svg',
    // // Размеры метки.
    // iconImageSize: [60, 79],
    // // Смещение левого верхнего угла иконки относительно
    // // её "ножки" (точки привязки).
    // iconImageOffset: [-100, -16],
  });
  var myPlacemark2 = new ymaps.Placemark([59.968394, 30.304981], {
    hintContent: 'Ст. м. Петроградская, Ординарная д .21/22',
    balloonContentFooter: 'Режим работы: с 10 до 21:00, без выходных',
  }, {
    // Опции.

    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',

    // // Своё изображение иконки метки.
    // iconImageHref: '../img/Vector.svg',
    // // Размеры метки.
    // iconImageSize: [60, 79],
    // // Смещение левого верхнего угла иконки относительно
    // // её "ножки" (точки привязки).
    // iconImageOffset: [-100, -16],
  });

  // // После того как метка была создана, добавляем её на карту.
  myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark2);

}