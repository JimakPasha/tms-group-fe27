import { generateDate } from './generateDate.js'
import { generateStorageDate } from './generateStorageDate.js';
import { generateId } from './generateId.js';

export function app() {
    
    const root = document.querySelector('#root');

    // appbody ----------------------------------------------------------------------------------------------

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.cssText = `
        height: 600px;
        width: 800px;
        border-radius: 4%;
        background: #8B008B;
        margin-top: 40px;
        border: 4px solid #DA70D6;
        box-shadow: 15px 15px #888888;
    `;

    // headerButtons ----------------------------------------------------------------------------------------

    const headerButtons = document.createElement('div');
    headerButtons.classList.add('headBtn');
    headerButtons.style.cssText = `
        display: flex;
        justify-content: center;
        margin-top: 25px;
        gap: 25px;
    `;

    const delBtn = document.createElement('button');
    delBtn.classList.add('delbtn')
    delBtn.innerText = 'Delete All';
    delBtn.style = `
        background: yellow;
        padding: 10px 4%;
        border-radius: 10px;
        font-size: 24px;
        border: 4px solid #DA70D6;
        color: #8B008B;
    `;

    const enterInput = document.createElement('input');
    enterInput.classList.add('enterInput')
    enterInput.innerText = 'Enter todo';
    enterInput.style = `
        border-radius: 10px;
        padding: 10px 5px;
        font-size: 24px;
        border: 4px solid #DA70D6;
        background-color: #800080;
    `;

    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn')
    addBtn.innerText = 'Add';
    addBtn.style = `
        background: yellow;
        padding: 10px 7%;
        border-radius: 10px;
        font-size: 24px;
        border: 4px solid #DA70D6;
        color: #8B008B;
    `;

    // appends Элементы -------------------------------------------------------------------------------------------------

    root.append(container);
    container.append(headerButtons);
    headerButtons.append(delBtn, enterInput, addBtn);

// создание логики -----------------------------------------------------------------------

    let todoArr = [];
    
    if (localStorage.getItem('todo')) {
        todoArr = JSON.parse(localStorage.getItem('todo'));
        todoArr.forEach((item) => {
            const el = document.createElement('li');
            el.innerText = item.text;
            container.append(el);
        });
    };

    

    // -----------------------------------------------------------------------------------

    addBtn.addEventListener('click', () => {

        const valueInput = enterInput.value;

        if (valueInput) {

            // local storage -------------------------------------------------------------

            const todoItem = {};
            todoItem.id = generateId();
            todoItem.date = generateStorageDate();
            todoItem.text = valueInput;
            todoItem.isChecked = false;
            todoArr.push(todoItem);

            localStorage.setItem('todo', JSON.stringify(todoArr));

            // local storage -------------------------------------------------------------

            const itemsProducts = document.createElement('div');
            itemsProducts.classList.add('item');
            itemsProducts.style.cssText = `
                height: 200px;
                background: #8B008B;
                display: flex;
                justify-content: space-between;
                border: 4px solid #DA70D6;
                border-radius: 15px;
                heigh: auto;
                margin: 35px;
            `;

            const task = document.createElement('div');
            task.innerText = valueInput;
            task.style.cssText = `
                color: yellow;
                background: purple;
                padding: 33px 45px;
                width: 300px;
                font-size: 24px;
                border: 4px solid #DA70D6;
                border-radius: 10px;
                margin: 50px 0px;
            `;

            const checkboxProduct = document.createElement('input');
            checkboxProduct.type = 'checkbox';
            checkboxProduct.style.margin = '30px';

            checkboxProduct.addEventListener('click', () => {
                if (checkboxProduct.checked) {
                    itemsProducts.style.opacity = 0.5;
                    itemsProducts.style.textDecoration = 'line-through';
                } else {
                    itemsProducts.style.opacity = 1;
                    itemsProducts.style.textDecoration = 'none';
                }
            });

            // Задняя часть окна (Х и Дата) ----------------------------------------------------------------------------

            const endOfWin = document.createElement('div');
            endOfWin.classList.add('endOfWin');

            const deleteItemBtn = document.createElement('button');
            deleteItemBtn.innerText = 'X';
            deleteItemBtn.style.cssText = `
                background: yellow;
                border: 4px solid #DA70D6;
                border-radius: 10px;
                font-size: 24px;
                color: #8B008B;
                padding: 0px 20px;
                margin: 10px 48px;
            `;

            deleteItemBtn.addEventListener('click', () => {
                itemsProducts.remove();
            });

            const dateEl = document.createElement('div');
            const date = new Date();
            dateEl.innerText = generateDate(date);
            dateEl.style.cssText = `
                color: yellow;
                background: purple;
                padding: 0px 28px;
                font-size: 20px;
                border: 4px solid #DA70D6;
                border-radius: 10px;
                margin: 102px 3px;
            `;

            container.append(itemsProducts);
            itemsProducts.append(checkboxProduct, task, endOfWin);
            endOfWin.append(deleteItemBtn, dateEl);

            enterInput.value = '';

            // Кнопка удаления всех элементов --------------------------------------

            delBtn.addEventListener('click', () => {
                itemsProducts.remove(itemsProducts);
            });
        };
    });
};