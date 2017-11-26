$(document).ready(() => {

  //native js code
  let addListenerMenu = function() {
    let body = document.querySelector('body');
    let burger = document.querySelector('.burger-link');

    burger.addEventListener('click', function(e) {
      e.preventDefault();
      body.classList.toggle('is-clicked');
    });

    $('.navigation__link_burger').on('click', function(e) {
      e.preventDefault();
      $(body).removeClass('is-clicked');
    });

  };
  addListenerMenu();

  //передается число в пикселях, возвращается число в ремах (НЕ СТРОКИ)
  let calculateRem = function(px) {
    let htmlFontSize = parseInt($('html').css('font-size'));
    return px / htmlFontSize;
  }

  let removeVisible = function(item, contentClass) {
    $(item).removeClass('is-active');
    $(item).find(contentClass).animate({
      height: '0px',
    }, 500);
  };

  let addVisible = function(item, contentClass, value) {
    $(item).find(contentClass).animate({
      height: value + 'rem',
    }, 500, function() {
      $(item).addClass('is-active');
    });
  }

  let removeVisibleW = function(item, contentClass) {
    $(item).removeClass('is-active');
    $(item).find(contentClass).animate({
      width: '0px',
    }, 500);
  };

  let addVisibleW = function(item, contentClass, value) {
    $(item).find(contentClass).animate({
      width: value + 'rem',
    }, 500, function() {
      $(item).addClass('is-active');
    });
  }


  //acco team
  $('.accordeon__link_team').on('click', (e) => {

    const wideScreenHeight = calculateRem(100);
    const windowWidth = $(window).width();
    let currentItem = $(e.currentTarget).parent();

    let value = (windowWidth > 768) ?
      (wideScreenHeight) :
      (wideScreenHeight * 2);

    e.preventDefault();
    let contentClass = '.overview';
    //скрытие элемента несовпадающего по индексу с текущим
    $('.accordeon__item_team').each((index, item) => {
      if (index != currentItem.index()) {
        removeVisible(item, contentClass);
      }
    });

    if (currentItem.hasClass('is-active')) {
      removeVisible(currentItem, contentClass);
    } else {
      addVisible(currentItem, contentClass, value);
    }

  });



  //acco menu
  $('.accordeon__link_menu').on('click', (e) => {

    const wideScreenWidth = 540;
    const windowWidth = $(window).width();
    let linkWidth = $('.accordeon__link_menu').width();
    let linkNumber = $('.accordeon__link_menu').length;
    let currentItem = $(e.currentTarget).parent();

    let value = (windowWidth > 768) ?
      calculateRem(wideScreenWidth) :
      calculateRem((windowWidth - (linkWidth * linkNumber)));

    e.preventDefault();
    let contentClass = '.burg-descr';
    $('.accordeon__item_menu').each((index, item) => {
      if (index != currentItem.index()) {
        removeVisibleW(item, contentClass);
      }
    });

    if (currentItem.hasClass('is-active')) {
      removeVisibleW(currentItem, contentClass);
    } else {
      addVisibleW(currentItem, contentClass, value);
    }

  });




  //fancybox
  $("[data-fancybox]").fancybox({
    smallBtn: false,
    buttons: [],
    modal: true
  });





  //модальные окна
  // $('.feed__item').on('touchend', function(e) {
  //   console.log('done');
  //   if ($(e.currentTarget).hasClass('touched')) {
  //     // $(e.currentTarget).find('.feed__about').animate({
  //     //   opacity: 0,
  //     //   backgroundColor: 'rgba(20, 20, 20, 0)',
  //     // }, 700, function() {
  //     $(e.currentTarget).removeClass('touched');
  //     // });
  //
  //     //isOpen = true;
  //   } else {
  //     // $(e.currentTarget).find('.feed__about').animate({
  //     //   opacity: 1,
  //     //   backgroundColor: 'rgba(20, 20, 20, .5)',
  //     // }, 700, function() {
  //     $(e.currentTarget).addClass('touched');
  //     if ($(e.currentTarget).hasClass('touched')) {
  //       console.log('has');
  //     }
  //     // });
  //     //isOpen = false;
  //   }
  //   $('.feed__item').each((index, item) => {
  //     if (index != $(e.currentTarget).index()) {
  //       //   $(item).find('.feed__about').animate({
  //       //     opacity: 0,
  //       //     backgroundColor: 'rgba(20, 20, 20, 0)',
  //       //   }, 700, function() {
  //       $(item).removeClass('touched');
  //       // });
  //     }
  //   });
  // });
  // });



  //owl-carousel
  let slider = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["", ""],
    items: 1,
    center: true,
  });

  $(".arrow_right").on("click", function(e) {
    e.preventDefault();
    slider.trigger("next.owl.carousel")
  });

  $(".arrow_left").on("click", function(e) {
    e.preventDefault();
    slider.trigger("prev.owl.carousel");
  });


});



//onePageScroll(
let onePageScroll = () => {
  let inScroll = false;

  let defineSections = (sections) => {
    let curSection = $('.section').filter('.active');
    return {
      curSection: curSection,
      nextSection: curSection.next(),
      prevSection: curSection.prev(),
    }
  }

  let transformCSS = function(index) {
    let number = -(index * 100) + '%';
    $('.content').css({
      'transform': `translate(0, ${number})`,
      '-webkit-transform': `translate(0, ${number})`,
    });
  }

  let moveSection = (scrollValue) => {
    let sections = defineSections();
    let index = sections.curSection.index();

    if (!inScroll) {
      inScroll = true;
      if (scrollValue > 0 && sections.nextSection.length) {
        index++;
        transformCSS(index);
      }
      if (scrollValue < 0 && sections.prevSection.length) {
        index--;
        transformCSS(index);
      }

      setTimeout(() => {
        inScroll = false;
        if (scrollValue > 0 && sections.nextSection.length) {
          sections.nextSection.addClass('active');
          sections.curSection.removeClass('active');
        }
        if (scrollValue < 0 && sections.prevSection.length) {
          sections.prevSection.addClass('active');
          sections.curSection.removeClass('active');
        }
      }, 1300);
    }
  }

  $('.wrapper').on({
    wheel: e => {
      if (!$('body').hasClass('is-clicked')) {
        let scrollValue = e.originalEvent.deltaY;
        moveSection(scrollValue);
      }
    },
    touchmove: e => (e.preventDefault())
  });

  $('body').on('keydown', (e) => {
    let keyCode = e.keyCode;

    switch (keyCode) {
      case 40:
        moveSection(1);
        break;
      case 38:
        moveSection(-1);
        break;
      default:
        break;
    }
  });

  $('.navigation__link').on('click', (e) => {
    e.preventDefault;
    let index = $(e.currentTarget).parent().index();
    if (index === 5) index++;
    transformCSS(++index);
    $('.section').eq(0).removeClass('active');
    $('.section').eq(index).addClass('active');
  });

  $('.btn-order').on('click', (e) => {
    e.preventDefault;
    transformCSS(6);
    if ($(e.currentTarget).hasClass('btn-order_welcome')) {
      let initialIndex = $('.section').filter('.welcome').index();
      $('.section').eq(initialIndex).removeClass('active');
    }
    if ($(e.currentTarget).hasClass('btn-order_offer')) {
      let initialIndex = $('.section').filter('.offer').index();
      $('.section').eq(initialIndex).removeClass('active');
    }
    $('.section').eq(6).addClass('active');
  });

  $('.forward').on('click', (e) => {
    e.preventDefault();
    transformCSS(1);
    $('.section').eq(0).removeClass('active');
    $('.section').eq(1).addClass('active');

  });

  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  const isMobile = mobileDetect.mobile();

  if (isMobile) {
    console.log('true');
    $('body').swipe({
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        console.log(direction);
        if (direction === 'up') moveSection(1);
        if (direction === 'down') moveSection(-1);
      }
    });
  }
}
onePageScroll();


ymaps.ready(init);

let placemarks = [{
    latitude: 59.933994,
    longtitude: 30.339912,
    hintContent: 'Невский проспект, 62',
    // balloonContent: [
    //   '<div class="ya-map__balloon">',
    //   '<img src="./img/logo.png"/>',
    //   '</div>',
    // ],
  },
  {
    latitude: 59.929073,
    longtitude: 30.292358,
    hintContent: 'о. Новая Голландия',
    // balloonContent: [
    //   '<div class="ya-map__balloon">',
    //   '<img src="./img/logo.png"/>',
    //   '</div>',
    // ],
  }, {
    latitude: 59.951119,
    longtitude: 30.305777,
    hintContent: 'Кронверкский проспект, 73/39',
    // balloonContent: [
    //   '<div class="ya-map__balloon">',
    //   '<img src="./img/logo.png"/>',
    //   '</div>',
    // ],
  },
];



function init() {
  let initialZoom = 12;
  let scaledZoom = 16;
  let map = new ymaps.Map('ya-map', {
    center: [59.927270, 30.336667],
    zoom: initialZoom,
    //оставить только зум-кнопки
    controls: ['zoomControl'],
    //убрать приближение/отдаление по скроллу
    behaviors: ['drag'],
  });
  placemarks.forEach(function(item) {
    let placemark = new ymaps.Placemark(
      [item.latitude, item.longtitude], {
        hintContent: item.hintContent,
        // balloonContent: item.balloonContent.join(''),
      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        //смещение
        iconImageOffset: [-23, -57],
      },
    );
    placemark.events.add('click', (e) => {
      let point = [item.latitude, item.longtitude];
      let mapBlock = $('.ya-map');
      if (mapBlock.hasClass('active')) {
        map.setZoom(initialZoom);
        mapBlock.removeClass('active');
      } else {
        setTimeout(() => {
          map.setZoom(scaledZoom);
        }, 1000);
        mapBlock.addClass('active');
      }
      map.panTo(point, {
        flying: false
      });
      //map.setCenter(point, map.getZoom(), {duration: 1000});
    });
    map.geoObjects.add(placemark);
  });

}

$('.form__clear').on('click', (e) => {
  e.preventDefault();
  $('#form').trigger('reset');
})

$('#user-phone').inputmask("+7(999)999-99-99");

let ajaxForm = (form) => {

  //вытаскиваем адрес сервера по атрибуту 'action'
  let url = form.attr('action');
  //собираем все заполненные данные из формы методом jquery serialize()
  let data = form.serialize();

  //формируем и возвращаем объект типа ajax
  return $.ajax({
    type: "POST",
    url: url,
    data: data,
    dataType: "JSON",
  });

}

let submitForm = (e) => {

  e.preventDefault();

  //находим форму и формируем запрос
  let form = $('#form');
  let request = ajaxForm(form);
  let popupSuccess = $('.popup_success');
  let popupFailure = $('.popup_failure');


  request.done(function(msg) {
    switch (msg.status) {
      case 0:
        $.fancybox.open(
          popupSuccess, {
            type: 'inline',
            smallBtn: false,
            buttons: [],
            afterClose() {
              form.trigger('reset');
            }
          }
        );
        break;
      case 1:
        $.fancybox.open(
          popupSuccess, {
            type: 'inline',
            smallBtn: false,
            buttons: [],
            afterClose() {
              form.trigger('reset');
            }
          }
        );
        break;
      default:
        break;
    }
    // if (!msg.status) {
    //   // $.fancybox.open(
    //   //   popupSuccess, {
    //   //     type: 'inline',
    //   //     smallBtn: false,
    //   //     buttons: [],
    //   //     afterClose() {
    //   //       form.trigger('reset');
    //   //     }
    //   //   }
    //   // );
    // } else {
    //   // $.fancybox.open(
    //   //   popupSuccess, {
    //   //     type: 'inline',
    //   //     smallBtn: false,
    //   //     buttons: [],
    //   //     afterClose() {
    //   //       form.trigger('reset');
    //   //     }
    //   //   }
    //   // );
    // }
  });
  request.fail(function(msg) {
    alert('Не удалось связаться с сервером! Попробуйте позже');
  });

}

$('#form').on('submit', submitForm);


// $.fn.myPlugin = function() {
//   console.log('!!');
// }
// $('.link').myPlugin();
