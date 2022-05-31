'use strict';

// Общие стили для блоков
const styleButton = `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border: 2px solid #000;
    border-radius: 20px;
    background: aquamarine;
    cursor: pointer;
`;


const root = document.querySelector('#root');

//container
const container = document.createElement('div');
container.classList.add('container');
container.style.cssText = `
    width: 850px;
    background-color: grey;
    border: 2px solid #000000;
    border-radius: 20px;
    padding: 30px 30px;
    margin: 0 auto;
    text-align: center;
`;

// controlPanel
const controlPanel = document.createElement('div');
controlPanel.classList.add('controlPanel');
controlPanel.style.cssText = `
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-atems: center;
    font-size: 30px;
    margin-bottom: 50px;
`;

const controlPanelDel = document.createElement('button');
controlPanelDel.classList.add('controlPanelDel');
controlPanelDel.innerText = 'Delete All';
controlPanelDel.style.cssText = styleButton;
controlPanelDel.style.width = '200px';

const controlPanelInput = document.createElement('input');
controlPanelInput.classList.add('controlPanelInput');
controlPanelInput.placeholder = 'Enter todo ...';
controlPanelInput.style.cssText = `
    height: 90%;
    font-size: 25px;
    text-align: center;
    border: 2px solid #000000;
    border-radius: 20px;
`;
const controlPanelAdd = document.createElement('button');
controlPanelAdd.classList.add('controlPanelAdd');
controlPanelAdd.innerText = 'Add';
controlPanelAdd.style.cssText = styleButton;
controlPanelAdd.style.width = '200px';

// listTodoPanel
const listTodoPanel = document.createElement('div');
const arrayTodo = ['Do homework', 'Learn js', 'Get a diploma','Dont join the army'];

for (let i = 0; i < arrayTodo.length; i++) {
    const itemTodoPanel = document.createElement('div');
    itemTodoPanel.style.cssText = `
        height: 150px;
        display: flex;
        justify-content: space-between;
        column-gap: 15px;
        align-items: center;
        border: 2px solid #000000;
        border-radius: 15px;
        padding: 15px;
        margin-bottom: 35px;
    `;
    listTodoPanel.append(itemTodoPanel);

    const todoLabel = document.createElement('label');
    todoLabel.style.cssText = `
        height: 40px;
        width: 70px;
        position: relative;
        cursor: pointer;
    `;
    itemTodoPanel.append(todoLabel);

    const todoLabelCheckbox = document.createElement('input');
    todoLabelCheckbox.type = 'checkbox';
    todoLabelCheckbox.classList.add('todoCheckbox');
    todoLabelCheckbox.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 0 px;
        height: 0px;
        opacity: 0;
    `;

    const todoLabelSpan = document.createElement('span');
    todoLabelSpan.classList.add('todoSpan');
    todoLabelSpan.innerHTML = '&#10003;';
    todoLabelSpan.style.cssText = styleButton;
    todoLabelSpan.style.backgroundColor = 'aquamarine';
    todoLabelSpan.style.width = '100%';
   
   
    todoLabelCheckbox.setAttribute('onchange', 'checkCheckbox()');
    todoLabel.append(todoLabelCheckbox, todoLabelSpan);
   
    
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
    todoText.innerText = arrayTodo[i];
    itemTodoPanel.append(todoText);

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

    const todoDate = document.createElement('div');
    todoDate.innerHTML = 'Date';
    todoDate.style.cssText = `
        height: 40px;
        width: 100px;
        padding: 5px;
        font-size: 30px;
        background-color: #fff;
        border: 2px solid #fff;
        border-radius: 10px;
    `;
    todoWrapper.append(todoClose, todoDate)
}

// appends 
root.append(container);
container.append(controlPanel, listTodoPanel);
controlPanel.append(controlPanelDel, controlPanelInput, controlPanelAdd);