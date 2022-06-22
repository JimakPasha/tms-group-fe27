// Способы, чтобы получить статическую коллекцию
// querySelector
// querySelectorAll
// getElementById

// Способы добавить живую коллекцию
// getElementsByTagName
// getElementsByClassName
// getElementsByName

const static = document.querySelectorAll('.list__item');
const live = document.getElementsByClassName('list__item');

// console.log(static); // NODELIST
// console.log(live); // HTMLCOLLECTION

// Создаём новый html-объект
const list = document.querySelector('.list');
const newItem = document.createElement('li');
newItem.classList.add('list__item');
newItem.innerHTML = 'new item';
list.append(newItem);

console.log(static); // NODELIST
console.log(live); // HTMLCOLLECTION




// NODELIST - статичен
// HTMLCOLLECTION - динамически изменяется



if (live.length === 6) {
  alert('Игра закончена');
}
