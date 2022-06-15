const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');

let listArr = [];

if (localStorage.getItem('list')) {
    listArr = JSON.parse(localStorage.getItem('list'));

    listArr.forEach((item) => {
        createItemElemnt(item);
    });
}

button.addEventListener('click', () => {
    const itemObj = {};
    itemObj.value = input.value;
    itemObj.id = Math.floor(Math.random() * 10000);
    listArr.push(itemObj);
    localStorage.setItem('list', JSON.stringify(listArr));
    createItemElemnt(itemObj);
});

function createItemElemnt(obj) {
    const item = document.createElement('li');
    item.innerText = obj.value;
    list.append(item);
}