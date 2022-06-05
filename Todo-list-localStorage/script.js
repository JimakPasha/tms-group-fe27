'use strict'
const root = document.querySelector('#root');

const buttonStyle = `
    width:30% ;
    height:70px ;
    background-color: darkcyan;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Open sans', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
`;
const inputStyle = `
    height: 70px;
    background-color: white;
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Open sans', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
    color:#BDBDBD;
    text-align: center;
`;
//body
const body = document.querySelector('body');
body.style.cssText = `
    color:grey;
    background-color:#BDBDBD;
    font-family: 'Open sans', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
`;
//container
const container = document.createElement('div');
container.classList.add('container');
container.style.cssText = `
    width: 1200px;
    margin: 0 auto;
    padding: 30px 15px;
`;
//mainPannel
const mainPannel = document.createElement('div');
mainPannel.classList.add('mainPannel');
mainPannel.style.cssText = `
    display: flex;
    column-gap: 30px;
    margin: 0 auto;
    margin-bottom: 30px;
`;

const btnDeleteAll = document.createElement('button');
btnDeleteAll.classList.add('btnDeleteAll');
btnDeleteAll.innerHTML = 'Delete All';
btnDeleteAll.style.cssText = buttonStyle;
btnDeleteAll.style.marginRight = '30px';

const btnDeleteLast = document.createElement('button');
btnDeleteLast.classList.add('btnDeleteLast');
btnDeleteLast.innerHTML = 'Delete Last';
btnDeleteLast.style.cssText = buttonStyle;
btnDeleteLast.style.marginRight = '30px';

const inputCreateTodo = document.createElement('input');
inputCreateTodo.placeholder = 'Enter todo...';
inputCreateTodo.style.cssText = inputStyle;
inputCreateTodo.style.width = '70%';

const btnAdd = document.createElement('button');
btnAdd.classList.add('btnAdd');
btnAdd.innerHTML = 'Add';
btnAdd.style.cssText = buttonStyle;

//filterPannel
const filterPannel = document.createElement('div');
filterPannel.classList.add('filterPannel');
filterPannel.style.cssText = `
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 50px;
`;
const filterPannelAll = document.createElement('div');
filterPannelAll.classList.add('filterPannelAll');
filterPannelAll.innerHTML = 'All: 2';
filterPannelAll.style.cssText = `
    margin-left: 20px;
    width: 20%;
    margin-right: 30px;
`;
const filterPannelCompleted = document.createElement('div');
filterPannelCompleted.classList.add('filterPannelCompleted');
filterPannelCompleted.innerHTML = 'Completed: 1';
filterPannelCompleted.style.cssText = `
    width: 20%;
    margin-right: 30px;
`;
const btnShowAll = document.createElement('button');
btnShowAll.classList.add('btnShowAll');
btnShowAll.innerHTML = 'Show All';
btnShowAll.style.cssText = buttonStyle;
btnShowAll.style.marginRight = '30px';

const btnShowCompleted = document.createElement('button');
btnShowCompleted.classList.add('btnShowCompleted');
btnShowCompleted.innerHTML = 'Show Completed';
btnShowCompleted.style.cssText = buttonStyle;
btnShowCompleted.style.marginRight = '30px';

const inputSearch = document.createElement('input');
inputSearch.placeholder = 'Search...';
inputSearch.style.cssText = inputStyle;
inputSearch.style.width = '30%';

//todoListPannel
const todoListPannel = document.createElement('div');

//построение логики
let todoArray = [];

if (localStorage.getItem('todos')) {
    todoArray = JSON.parse(localStorage.getItem('todos'));
    todoArray.forEach((item) => {
        createItemTodo(item);
    })
}
btnAdd.addEventListener('click', () => {
    const valueInput = inputCreateTodo.value;
    if (valueInput) {
        const itemTodo = {};
        itemTodo.id = generateId();
        itemTodo.date = generateDate();
        itemTodo.text = valueInput;
        itemTodo.isChecked = false;
        todoArray.push(itemTodo);
        createItemTodo(itemTodo);
        setTodoList(todoArray);
    }
    inputCreateTodo.value = '';
});

//подключение кнопок Delete All и Delete Last
btnDeleteAll.addEventListener('click', () => {
    todoArray.length = 0;
    setTodoList(todoArray);
    if (todoListPannel.lastChild) {
            todoListPannel.innerHTML = '';
    }
});

btnDeleteLast.addEventListener('click', () => {
    if (todoListPannel.lastChild) {
        todoArray.pop();
        setTodoList(todoArray);
        todoListPannel.removeChild(todoListPannel.lastChild);
    }
});

//function helper
function generateId() {
    return Math.floor(Math.random() * 100000);
}

function generateDate() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minute = currentDate.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    let day = currentDate.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = dictionaryMonth[currentDate.getMonth() + 1];

    return `${hours}:${minute} ${day} ${month}`;
}
const dictionaryMonth = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december',
}
function setTodoList(array) {
    localStorage.setItem('todos', JSON.stringify(array));
}
function createItemTodo(obj) {
        const itemTodoList = document.createElement('div');
        itemTodoList.id = obj.id;
        itemTodoList.classList.add('itemTodoList');
        itemTodoList.style.cssText = `
            width: 70%;
            height: 150px;
            display: flex;
            justify-content: space-around;
            margin: 0 auto;
            margin-bottom: 20px;
            border: 2px solid black;
            border-radius: 20px;
        `;

    todoListPannel.append(itemTodoList);

    const todoListDone = document.createElement('div');
    todoListDone.classList.add('todoListDone');
    todoListDone.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 80%;
            margin: 0 auto;
        `;
    itemTodoList.append(todoListDone);
    
    const labelDone = document.createElement('label');
    labelDone.style.cssText = `
            position: relative;
            margin-right: 40px;
        `;
    todoListDone.append(labelDone);
    
    const inputDone = document.createElement('input');
    inputDone.checked = obj.isChecked;
    inputDone.type = 'checkbox';
    inputDone.classList.add('inputDone');
    inputDone.style.cssText = `
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        `;
    labelDone.append(inputDone);
        
    const spanDone = document.createElement('span');
    spanDone.classList.add('spanDone');
    spanDone.style.cssText = `
            position: absolute;
            width: 60px;
            height: 40px;
            top:-20px;
            left: 10px;
            background-color: darkcyan;
            border: 2px solid black;
            border-radius: 10px;
        `;
    labelDone.append(spanDone);
    
    const todoText = document.createElement('div');
    todoText.classList.add('todoText');
    todoText.innerHTML = obj.text;
    todoText.style.cssText = `
            width: 80%;
            height: 70px;
            background-color: white;
            border-radius: 10px;
            text-align: center;
            padding: 20px;
        `;
    todoListDone.append(todoText);

    const todoClose = document.createElement('div');
    todoClose.classList.add('todoClose');
    todoClose.style.cssText = `
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-end;
    `;
    itemTodoList.append(todoClose);

    const btnClose = document.createElement('button');
    btnClose.classList.add('btnClose');
    btnClose.innerHTML = '&#10006';
    btnClose.style.cssText = buttonStyle;
    btnClose.style.width = '60px';
    btnClose.style.height = '40px';
    btnClose.style.fontSize = '18px';
    btnClose.style.borderRadius = '10px';
    btnClose.style.marginRight = '40px';
    todoClose.append(btnClose);
//При нажатии на клавишу Х удалять именно ту карточку, на которой произошел клик по кнопке, перезаписать LS
    btnClose.addEventListener('click', () => {
        todoArray = todoArray.filter((item) => {
            return item.id !== obj.id;
        })
        setTodoList(todoArray);
        itemTodoList.remove();
    });
//При нажатии на checkbox менять цвет карточки и зачеркивать текст внутри него,перезаписать и сохранить в LS
    if (inputDone.checked) {
        spanDone.innerHTML = '&#10004';
        spanDone.style.paddingLeft = '20px';
        spanDone.style.color = 'black';
        spanDone.style.transition = 'all .2s ease';
        itemTodoList.style.backgroundColor = 'dimgray';
        todoText.style.textDecoration = 'line-through';
    }
    inputDone.addEventListener('click', () => {
        if (inputDone.checked) {
            spanDone.innerHTML = '&#10004';
            spanDone.style.paddingLeft = '20px';
            spanDone.style.color = 'black';
            spanDone.style.transition = 'all .2s ease';
            itemTodoList.style.backgroundColor = 'dimgray';
            todoText.style.textDecoration = 'line-through';
        } else {
            spanDone.innerHTML = '';
            itemTodoList.style.backgroundColor = '#BDBDBD';
            todoText.style.textDecoration = 'none';
        }
        todoArray = todoArray.map((item) => {
            if (item.id === obj.id) {
                item.isChecked = inputDone.checked;
            }
            return item;
        })
        setTodoList(todoArray);
    });
//Автоматическое генерирование поля с датой
    const date = document.createElement('div');
    date.innerText = obj.date;
    date.style.cssText = `
        width: 120px;
        height: 40px;
        background-color: white;
        border-radius: 10px;
        text-align: center;
        margin-right: 40px;
        padding: 7px;
        font-size: 16px;
    `;
    todoClose.append(date);
}

//appends elements
root.append(container);
container.append(mainPannel, filterPannel, todoListPannel);
mainPannel.append(btnDeleteAll, btnDeleteLast, inputCreateTodo, btnAdd);
filterPannel.append(filterPannelAll, filterPannelCompleted, btnShowAll, btnShowCompleted, inputSearch);