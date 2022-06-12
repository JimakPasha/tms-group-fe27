import { styleButton } from "./styleButton.js";
import { generateDate } from "./generateDate.js";
import { updateLocalStorageTodo } from "./localStorage.js";
import { generateId } from "./generateId.js";


export function app() {

    const root = document.querySelector('#root');

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
    infoPanelAll.innerText = 'All: ';
    infoPanelAll.style.cssText = `
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const infoPanelCompleted = document.createElement('div');
    infoPanelCompleted.innerText = 'Completed: ';
    infoPanelCompleted.style.cssText = `
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const infoPanellShowAll = document.createElement('button');
    infoPanellShowAll.innerText = 'Show All: ';
    infoPanellShowAll.style.cssText = styleButton;
    infoPanellShowAll.style.width = '200px';

    const infoPanellShowCompleted = document.createElement('button');
    infoPanellShowCompleted.innerText = 'Show Completed: ';
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


    const listTodoPanel = document.createElement('div');

 
    root.append(container);
    container.append(controlPanel, infoPanel, listTodoPanel);
    controlPanel.append(controlPanelDelAll, controlPanelDelLast, controlPanelInput, controlPanelAdd);
    infoPanel.append(infoPanelAll, infoPanelCompleted, infoPanellShowAll, infoPanellShowCompleted, infoPanellSearch);

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
            if (item.isChecked) {
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



    function createElement({ id, text, isChecked, date }) {
        const itemTodoPanel = document.createElement('div');
        itemTodoPanel.classList.add('itemTodoPanel');
        itemTodoPanel.id = id;
        itemTodoPanel.style.cssText = `
            height: 150px;
            width: 80%;
            display: flex;
            justify-content: space-between;
            column-gap: 15px;
            align-items: center;
            border: 2px solid black;
            border-radius: 20px;
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
        todoText.innerText = text;
        itemTodoPanel.append(todoLabel, todoText);

        const todoLabelSpan = document.createElement('span');
        todoLabelSpan.classList.add('todoSpan');
        todoLabelSpan.style.cssText = styleButton;
        todoLabelSpan.style.width = '100%';
        todoLabelSpan.style.position = 'absolute';


        const todoLabelCheckbox = document.createElement('input');
        todoLabelCheckbox.type = 'checkbox';
        todoLabelCheckbox.checked = isChecked;
        todoLabelCheckbox.classList.add('todoCheckbox');
        todoLabelCheckbox.style.cssText = `
            position: absolute;
            opacity: 0;
        `;
        if (todoLabelCheckbox.checked) {
            todoLabelSpan.innerHTML = '&#10003';
            itemTodoPanel.style.backgroundColor = 'green';
            todoText.style.textDecoration = 'line-through';
        }
        todoLabel.append(todoLabelCheckbox, todoLabelSpan);

        todoLabelCheckbox.addEventListener('click', () => {
            if (todoLabelCheckbox.checked) {
                todoLabelSpan.innerHTML = '&#10003';
                itemTodoPanel.style.backgroundColor = 'black';
                todoText.style.textDecoration = 'line-through';
            } else {
                todoLabelSpan.innerHTML = '';
                itemTodoPanel.style.backgroundColor = '#d3d3d3';
                todoText.style.textDecoration = 'none';
            }
            todos = todos.map((item) => {
                if (item.id === id) {
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
            itemTodoPanel.remove();

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
        todoDate.innerHTML = date;

        todoWrapper.append(todoClose, todoDate);
    }
}
