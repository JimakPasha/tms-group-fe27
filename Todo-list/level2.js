'use strict';

// Общие стили для блоков
const styleButton = `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: 2px solid #000;
    border-radius: 10px;
    background-color: aquamarine;
    cursor: pointer;
`;

// точка входа
const root = document.querySelector('#root');

// container
const container = document.createElement('div');
container.classList.add('container');
container.style.cssText = `
    width: 1000px;
    background-color: #d3d3d3;
    border: 2px solid #000000;
    border-radius: 20px;
    padding: 15px;
    margin: 0 auto;
    text-align: center;
`;

// controlPanel
const controlPanel = document.createElement('div');
controlPanel.style.cssText = `
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-atems: center;
    column-gap: 10px;
    margin-bottom: 20px;
`;

const controlPanelDelAll = document.createElement('button');
controlPanelDelAll.innerText = 'Delete All';
controlPanelDelAll.style.cssText = styleButton;
controlPanelDelAll.style.width = '300px';

const controlPanelDelLast = document.createElement('button');
controlPanelDelLast.innerText = 'Delete Last';
controlPanelDelLast.style.cssText = styleButton;
controlPanelDelLast.style.width = '300px';

const controlPanelInput = document.createElement('input');
controlPanelInput.placeholder = 'Enter todo...';
controlPanelInput.style.cssText = `
    height: 90%;
    width: 100%;
    font-size: 20px;
    text-align: center;
    border: 2px solid #000000;
    border-radius: 15px;
`;

const controlPanelAdd = document.createElement('button');
controlPanelAdd.innerText = 'Add';
controlPanelAdd.style.cssText = styleButton;
controlPanelAdd.style.width = '300px';


// infoPanel
const infoPanel = document.createElement('div');
infoPanel.style.cssText = `
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-atems: center;
    font-size: 20px;
    margin-bottom: 40px;
`;

const infoPanelAll = document.createElement('div');
infoPanelAll.innerText = `All: 0`;
infoPanelAll.style.cssText = `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const infoPanelCompleted = document.createElement('div');
infoPanelCompleted.innerText = 'Completed: 0';
infoPanelCompleted.style.cssText = `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const infoPanellShowAll = document.createElement('button');
infoPanellShowAll.innerText = 'Show All';
infoPanellShowAll.style.cssText = styleButton;
infoPanellShowAll.style.width = '200px';

const infoPanellShowCompleted = document.createElement('button');
infoPanellShowCompleted.innerText = 'Show Completed';
infoPanellShowCompleted.style.cssText = styleButton;
infoPanellShowCompleted.style.width = '200px';


const infoPanellSearch = document.createElement('input');
infoPanellSearch.placeholder = 'Search...';
infoPanellSearch.style.cssText = `
    height: 90%;
    font-size: 25px;
    text-align: center;
    border: 2px solid #000000;
    border-radius: 15px;
`;

// listTodoPanel
const listTodoPanel = document.createElement('div');

// appends elements
root.append(container);
container.append(controlPanel, infoPanel, listTodoPanel);
controlPanel.append(controlPanelDelAll, controlPanelDelLast, controlPanelInput, controlPanelAdd);
infoPanel.append(infoPanelAll, infoPanelCompleted, infoPanellShowAll, infoPanellShowCompleted, infoPanellSearch);


// Создание логики

let todos = [];

if (localStorage.getItem('todo')) {
    todos = JSON.parse(localStorage.getItem('todo'));
    todos.forEach((item) => {
        createElement(item);
    });
}

infoPanellShowAll.addEventListener('click', () => {
    listTodoPanel.innerHTML = '';
    todos = JSON.parse(localStorage.getItem('todo'));
    todos.forEach((item) => {
        createElement(item);
    });           
});

infoPanellShowCompleted.addEventListener('click', () => {
    listTodoPanel.innerHTML = '';
    todos = JSON.parse(localStorage.getItem('todo'));
    todos.forEach((item) => {
        if(item.isChecked) {
            createElement(item);
        }  
    });   
});

controlPanelAdd.addEventListener('click', () => {
    const valueInput = controlPanelInput.value;

    if (valueInput) {
        const todo = {};
        todo.id = generateId();
        todo.date = generateDate();
        todo.text = valueInput;
        todo.isChecked = false;
        todos.push(todo);
        createElement(todo);
        updateLocalStorageTodo(todos);

        controlPanelInput.value = '';
    }   
});

controlPanelDelLast.addEventListener('click', () => {
    if (listTodoPanel.lastChild) {
        todos.pop();
        updateLocalStorageTodo(todos);
        listTodoPanel.removeChild(listTodoPanel.lastChild);
    }
});

controlPanelDelAll.addEventListener('click', () => {
    todos.length = 0;
    updateLocalStorageTodo(todos);
    listTodoPanel.innerHTML = '';
});



// functions
function generateId() {
    return String(
      Math.random() * 10000 + (Math.random() * 10000) / (Math.random() * 100)
    ).replace('.', '0');
}
  
function generateDate() {
  const date = new Date();
  let d = '0';
  if ((date.getDate()) < 10) {
    d = `${d}${date.getDate()}`;
  } else {
    d = date.getDate();
  }
  return `${date.getHours()}:${date.getMinutes()} ${d} ${
    dictionaryMonth[date.getMonth() + 1]
  }`;
}
  
const dictionaryMonth = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'Aug',
  9: 'Sept',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};


function updateLocalStorageTodo(arr) {
    localStorage.setItem('todo', JSON.stringify(arr));
}

function createElement(obj) {
    const itemTodoPanel = document.createElement('div');
    itemTodoPanel.classList.add('itemTodoPanel');
    itemTodoPanel.id = obj.id;
    itemTodoPanel.style.cssText = `
        height: 150px;
        width: 75%;
        display: flex;
        justify-content: space-between;
        column-gap: 15px;
        align-items: center;
        border: 2px solid #000000;
        border-radius: 15px;
        padding: 15px;
        margin: 0 auto;
        margin-bottom: 30px;
    `;
    listTodoPanel.append(itemTodoPanel);
    
    const todoLabel = document.createElement('label');
    todoLabel.style.cssText = `
        height: 40px;
        width: 70px;
        position: relative;
        cursor: pointer;
    `;
    
    const todoText = document.createElement('div');
    todoText.style.cssText = `
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        background: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 15px;
    `;
    todoText.innerText = obj.text;
    itemTodoPanel.append(todoLabel, todoText);
    
    const todoLabelSpan = document.createElement('span');
    todoLabelSpan.classList.add('todoSpan');
    todoLabelSpan.style.cssText = styleButton;
    todoLabelSpan.style.width = '100%';
    todoLabelSpan.style.position = 'absolute';
    todoLabelSpan.style.top = '0';
    todoLabelSpan.style.left = '0';
    
    const todoLabelCheckbox = document.createElement('input');
    todoLabelCheckbox.type = 'checkbox';
    todoLabelCheckbox.checked = obj.isChecked;
    todoLabelCheckbox.classList.add('todoCheckbox');
    todoLabelCheckbox.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 0 px;
        height: 0px;
        opacity: 0;
    `;
    if (todoLabelCheckbox.checked) {
        todoLabelSpan.innerHTML = '&#10003';
        itemTodoPanel.style.backgroundColor = 'grey';
        todoText.style.textDecoration = 'line-through';
    }
    todoLabel.append(todoLabelCheckbox, todoLabelSpan);

    todoLabelCheckbox.addEventListener('click', () => {
        if (todoLabelCheckbox.checked) {
            todoLabelSpan.innerHTML = '&#10003';
            itemTodoPanel.style.backgroundColor = 'grey';
            todoText.style.textDecoration = 'line-through';
        } else {
            todoLabelSpan.innerHTML = '';
            itemTodoPanel.style.backgroundColor = '#d3d3d3';
            todoText.style.textDecoration = 'none';
        }
        todos = todos.map((item) => {
            if(item.id === obj.id) {
               item.isChecked = todoLabelCheckbox.checked;
            }
            return item;
        });
        updateLocalStorageTodo(todos);
    });
    
    
    const todoWrapper = document.createElement('div');
    todoWrapper.style.cssText = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    `;
    itemTodoPanel.append(todoWrapper);
    
    const todoClose = document.createElement('button');
    todoClose.innerHTML = 'X';
    todoClose.style.cssText = styleButton;
    todoClose.style.width = '60px';
    todoClose.style.height = '40px';
    todoClose.addEventListener('click', () => {
        const qustion = confirm('Вы уверены?');
        if (qustion) {
            todos.splice(todos.indexOf(obj), 1);
            updateLocalStorageTodo(todos);
            itemTodoPanel.remove();
        } 
    });
    
    const todoDate = document.createElement('div');
    todoDate.style.cssText = `
        height: 50px;
        width: 120px;
        padding: 5px;
        font-size: 25px;
        background-color: #fff;
        border: 2px solid #fff;
        border-radius: 10px;
    `;
    todoDate.innerHTML = obj.date;
    
    todoWrapper.append(todoClose, todoDate);
}

