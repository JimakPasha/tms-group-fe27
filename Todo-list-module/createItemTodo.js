import { buttonStyle } from "./button&inputStyle.js";
import { todoArray, setTodo } from "./todoArray.js";
import { setTodoList } from "./localStorage.js";


export function createItemTodo({id, date, text, isChecked}, todoListPannel) {
    const itemTodoList = document.createElement('div');
    itemTodoList.id = id;
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
inputDone.checked = isChecked;
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
todoText.innerHTML = text;
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

btnClose.addEventListener('click', () => {
setTodo(todoArray.filter((item) => {
    return item.id !== id;
}));
setTodoList(todoArray);
itemTodoList.remove();
});

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
setTodo(todoArray.map((item) => {
    if (item.id === id) {
        item.isChecked = inputDone.checked;
    }
    return item;
}));
setTodoList(todoArray);
});

const dateBlock = document.createElement('div');
dateBlock.innerText = date;
dateBlock.style.cssText = `
    width: 120px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    margin-right: 40px;
    padding: 7px;
    font-size: 16px;
`;
todoClose.append(dateBlock);
}