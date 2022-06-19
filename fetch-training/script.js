'use strict';

const URL_API = 'https://jsonplaceholder.typicode.com';


const btnId = document.querySelector('.showId');
const btnTitle = document.querySelector('.showTitle');
const btnAll = document.querySelector('.showAll');

const list = document.querySelector('.list');

btnId.addEventListener('click', () => {
    if(list.children) {
        list.innerHTML = '';
    }
    printTodos('Id');
})
btnTitle.addEventListener('click', () => {
    if(list.children) {
        list.innerHTML = '';
    }
    printTodos('Title');
})
btnAll.addEventListener('click', () => {
    if(list.children) {
        list.innerHTML = '';
    }
    printTodos('All');
})


function getTodos() {
    return new Promise((resolve, reject) => {
        fetch(`${URL_API}/todos`).then(response => {
            if(response.status === 200) {
               resolve(response.json());
            } else {
                reject(new Error('Нет ответа'));
            }
        })
    })
}

function printTodos(btn) {
    getTodos().then((todos) => {
        todos.forEach(({id, title}) => {
            const itemTodos = document.createElement('li');
            if (btn === 'Id') {
                itemTodos.innerHTML = `ID: ${id}`;
            } else if (btn === 'Title') {
                itemTodos.innerHTML = `Title: ${title}`;
            } else if (btn === 'All') {
                itemTodos.innerHTML = `ID: ${id}, Title: ${title}`;
            }
            
            list.append(itemTodos);
        })
    })
}