//1)
// Через атрибут HTML
function sayHi() {
  alert('Hiiii!!!');
}
//2)
// Использование свойства DOM-объекта
const btn1 = document.querySelector('.btn1');

btn1.onclick = function () {
  alert('НА МЕНЯ НАЖАЛИ!');
};

// не можем с назначить несколько функций на один обработчики
btn1.onclick = function () {
  alert('Упс я перезаписал, прошлую функцию');
};
//3)
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
  alert('Первый alert');
});
// или функци стрелка
// btn2.addEventListener('click', () => {
//   alert('addEventListener самый лучший обрабочтик событий!');
// });

// показать, что можно несколько обработчиков

btn2.addEventListener('click', () => {
  alert('Второй alert');
});

// -----------------------
// ---- Подробно про addEventListener

// target.addEventListener(event, callback)

// В качестве целевого элемента может выступать любой
const btn3 = document.querySelector('.btn3');
btn3.style.cssText = `
  width: 200px;
  height: 50px
`;

btn3.addEventListener('click', () => {
  alert('click');
});

// демонстрируем разные события
// события мыши
// click, contextmenu, mouseover / mouseout, mousedown / mouseup

// Клавиатурные события позже, когда изучим Объект event
// keydown и keyup

// -----------------------
// ---- Объект event
// Когда происходит событие, браузер создаёт объект события, записывает в
// него детали и передаёт его в качестве аргумента функции-обработчику.
const btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.target);
});

// Клавиатурные события

document.body.addEventListener('keydown', (event) => {
  // console.log(event);
  //console.log(event.key);
  // console.log(event.keyCode);
  if (event.key === 'Escape') {
    alert('Выходим из приложения');
  }
});

// отличия event.target и event.currentTarget
const btn5 = document.querySelector('.btn5');
btn5.addEventListener('click', (e) => {
  console.log('Это e.target', e.target);
  console.log('Это e.currentTarget', e.currentTarget);
});

const box = document.querySelector('.box');
box.addEventListener('click', (e) => {
  // console.log('Это e.target', e.target);
  console.log('Это e.currentTarget', e.currentTarget);
});
// target: элемент, вызвавший событие.
// currentTarget: элемент, связанный с событием.

// -----------------------
// ---- Высплытие и погружение

// картинка eventFlow
// события отрабатывают на всплытии
// код в html
// прекратить всплытие event.stopPropagation()

const form1 = document.querySelector('.form1');
const div1 = document.querySelector('.div1');
const p1 = document.querySelector('.p1');

form1.addEventListener('click', (e) => {
  alert('form');
});

div1.addEventListener('click', (e) => {
  alert('div');
});

p1.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('p1');
});

// stopImmediatePropagation(); если несколько обработчиков на одном событии