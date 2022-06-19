const example1 = document.querySelector('.example');
console.log(example1.parentElement);
console.log(example1.previousElementSibling);
console.log(example1.nextElementSibling);
console.log(example1.children);
console.log(example1.firstElementChild);
console.log(example1.lastElementChild);

// доп метод создать текстовую ноду

const title = document.createElement('h1');
// document.body.append(title); // в конец добавим элемент
document.body.prepend(title); // в начало добавим элемент

// title.innerHTML = 'some text';
// // или
const text = document.createTextNode('some text');
title.append(text);
// // зачем createTextNode может понадобиться? Если мы будем переиспользовать ещё это ноду несколько раз

// удалять элемент remove();
// заменять другим
// const el = document.querySelector('.example');
// el.replaceWith(document.createElement('div'));
// вставлять перед и после
// el.before(document.createElement('div'));