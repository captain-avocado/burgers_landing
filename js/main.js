$(document).ready(() => {

  //native js code
  let addListenerMenu = function() {
    let body = document.querySelector('body');
    console.log(body);
    let burger = document.querySelector('.burger-link');
    console.log(burger);

    burger.addEventListener('click', function() {
      body.classList.toggle('is-clicked');
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







// $.fn.myPlugin = function() {
//   console.log('!!');
// }
// $('.link').myPlugin();


// let sliderList = $('.slider__item');
// let sliderSize = $('.slider__item').length;
// for (let j = 1; j < sliderSize; j++) {
//   sliderList[j].style.display = 'none';
// }
// let i = 0;
// $('.arrow').on('click', (e) => {
//   e.preventDefault();
//   sliderList[i].style.display = 'none';
//   if ($(e.currentTarget).hasClass('arrow_left')) {
//     i--;
//   } else {
//     i++;
//   }
//   if (i < 0) {
//     i = sliderSize - 1;
//   }
//   if (i == sliderSize) {
//     i = 0;
//   }
//   sliderList[i].style.display = '';
//   // if ($(e.currentTarget).hasClass('arrow_left')) {
//   //   sliderList[i].style.animation = 'fadeInRight 1.5s'
//   // } else {
//   //   sliderList[i].style.animation = 'fadeInLeft 1.5s';
//   // }
// });
// });

// //недослайдер v2
// let wh = window.outerWidth;
// let sliderList = $('.slider__item');
// let sliderSize = $('.slider__item').length;
// let cont = document.querySelector('.container_info');
// cont.style.position = 'relative';
//
// for (let j = 0; j < sliderSize; j++) {
//   sliderList[j].style.position = 'absolute';
//   sliderList[j].style.left = (wh * j) + 'px';
// }
// let i = 0;
// $('.arrow').on('click', (e) => {
//   e.preventDefault();
//
//   if ($(e.currentTarget).hasClass('arrow_left')) {
//     sliderList[i].style.left = -wh + 'px';
//     sliderList[i].style.opacity = 0;
//     sliderList[i].style.transition = 'left 2s, opacity 2s';
//     i--;
//
//   } else {
//     sliderList[i].style.left = wh + 'px';
//     sliderList[i].style.transition = 'left 2s';
//     sliderList[i].style.opacity = 0;
//     sliderList[i].style.transition = 'left 2s, opacity 2s';
//     i++;
//   }
//
//   if (i < 0) {
//     i = sliderSize - 1;
//   }
//   if (i == sliderSize) {
//     i = 0;
//   }
//   sliderList[i].style.left = 0;
//   sliderList[i].style.opacity = 1;
//   sliderList[i].style.transition = 'left 2s, opacity 2s';
//
// });
// });
//недослайдер v2

// let wh = window.outerWidth;
// let sliderList = $('.slider__item');
// let sliderSize = $('.slider__item').length;
// let cont = document.querySelector('.container_info');
// cont.style.position = 'relative';
//
// for (let j = 0; j < sliderSize; j++) {
//   sliderList[j].style.position = 'absolute';
//   sliderList[j].style.left = (wh * j) + 'px';
// }
// let i = 0;
// $('.arrow').on('click', (e) => {
//   e.preventDefault();
//
//   if ($(e.currentTarget).hasClass('arrow_left')) {
//     sliderList[i].style.left = -wh + 'px';
//     sliderList[i].style.opacity = 0;
//     sliderList[i].style.transition = 'left 2s, opacity 2s';
//     i--;
//
//   } else {
//     sliderList[i].style.left = wh + 'px';
//     sliderList[i].style.transition = 'left 2s';
//     sliderList[i].style.opacity = 0;
//     sliderList[i].style.transition = 'left 2s, opacity 2s';
//     i++;
//   }
//
//   if (i < 0) {
//     i = sliderSize - 1;
//   }
//   if (i == sliderSize) {
//     i = 0;
//   }
//   sliderList[i].style.left = 0;
//   sliderList[i].style.opacity = 1;
//   sliderList[i].style.transition = 'left 2s, opacity 2s';
//
// });
