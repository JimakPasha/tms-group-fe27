'use strict';

const items = document.querySelectorAll('.item');



// for(let i = 0; i < items.length; i++) {
//   items[i].addEventListener('click', () => {
//     items[i].classList.toggle('black'); // показать toggle
//   });
// }

// используем делегирование
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) => {
  console.log(event.target);
  event.target.classList.toggle('black');
  // add, remove, toggle, contains
});