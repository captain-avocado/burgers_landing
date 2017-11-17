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


  $('.accordeon__link').on('click', (e) => {
    e.preventDefault();
    $('.accordeon__item').each((index, item) => {
      if (index != $(e.currentTarget).parent().index()) {
        $(item).removeClass('is-active');
      }
    });
    $(e.currentTarget).parent().toggleClass('is-active');
  });


})









// var begin = "Start point";
// console.log(begin);
//
// var person = new Object();
// person.name = "Alloha";
// person.age = 24;
// console.log(person.name + " with age " + person.age);
//
// var userArr = [{
//     name: "Andrew",
//     salary: 1200,
//   },
//   {
//     name: "Max",
//     salary: 120,
//   },
//   {
//     name: "Diana",
//     salary: 2000,
//   }
// ];
//
// function getTopEmployers(users) {
//   var res = [];
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].salary >= 1000) {
//       res.push(users[i].name);
//     }
//   }
//   return res;
// }
//
// console.log(getTopEmployers(userArr));









// let addListenerDropdown = function() {
//   let link = document.querySelector('avatar-part__compound-link');
//   let dropdown = document.querySelector('ingredients__item');
//
//   link.addEventListener('click', function(e) {
//     // dropdown.style.left = 100 + '%';
//     // dropdown.style.top = 0;
//
//
//
//
//   });
//
//
// }




// let nav = document.querySelectorAll('.navigation__item_burger');
// console.log(nav);
// console.log(Array.isArray(nav));
//
// nav = [].slice.call(nav);
// console.log(nav);
// console.log(Array.isArray(nav));
//
// let size = nav.length;
// for (let i = 0; i < size; i++) {
//   nav[i].classList.add('will-appear');
// }


// if (document.clientWidth < 768) {
//   addListenerDropdown();
// }
