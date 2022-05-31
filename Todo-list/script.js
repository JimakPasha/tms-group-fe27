'use strict'

const root = document.querySelector('#root');

// appbody

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

// headerButtons

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

// bodyWindows

const bodyWin1 = document.createElement('div');
bodyWin1.classList.add('bodyWin1');
bodyWin1.style.cssText = `
    height: 200px;
    margin: 35px;
    border: 4px solid #DA70D6;
    border-radius: 15px;
    display: flex;
`;

const bodyWin2 = document.createElement('div');
bodyWin2.classList.add('bodyWin2');
bodyWin2.style.cssText = `
    height: 200px;
    margin: 35px;
    border: 4px solid #DA70D6;
    border-radius: 15px;
    display: flex;
`;

// bodyWin1 elements

const doneBtn1 = document.createElement('button');
doneBtn1.classList.add('doneBtn1');
doneBtn1.innerText = 'V';
doneBtn1.style.cssText = `
    background: yellow;
    padding: 10px 30px;
    margin: 10% 40px;
    border-radius: 10px;
    font-size: 24px;
    border: 4px solid #DA70D6;
    color: #8B008B;
`;

const winText1 = document.createElement('div');
winText1.classList.add('winText1');
winText1.innerText = 'Todo text ...';
winText1.style.cssText = `
    color: yellow;
    background: purple;
    padding: 33px 45px;
    width: 300px;
    font-size: 24px;
    border: 4px solid #DA70D6;
    border-radius: 10px;
    margin: 50px 0px;
`;

const endWin1 = document.createElement('div');
endWin1.classList.add('endWin1');

// endWin1 elements

const closeBtn1 = document.createElement('button');
closeBtn1.classList.add('closeBtn1');
closeBtn1.innerText = 'X';
closeBtn1.style.cssText = `
    background: yellow;
    border: 4px solid #DA70D6;
    border-radius: 10px;
    font-size: 24px;
    color: #8B008B;
    padding: 0px 20px;
    margin: 10px 48px;
`;

const endWinText1 = document.createElement('div');
endWinText1.classList.add('endWinText1');
endWinText1.innerText = '30.05.2022';
endWinText1.style.cssText = `
    color: yellow;
    background: purple;
    padding: 0px 28px;
    font-size: 20px;
    border: 4px solid #DA70D6;
    border-radius: 10px;
    margin: 109px 3px;
`;

// bodyWin2 elements

const doneBtn2 = document.createElement('button');
doneBtn2.classList.add('doneBtn2');
doneBtn2.innerText = 'V';
doneBtn2.style.cssText = `
    background: yellow;
    padding: 10px 30px;
    margin: 10% 40px;
    border-radius: 10px;
    font-size: 24px;
    border: 4px solid #DA70D6;
    color: #8B008B;
`;

const winText2 = document.createElement('div');
winText2.classList.add('winText2');
winText2.innerText = 'Todo text ...';
winText2.style.cssText = `
    color: yellow;
    background: purple;
    padding: 33px 45px;
    width: 300px;
    font-size: 24px;
    border: 4px solid #DA70D6;
    border-radius: 10px;
    margin: 50px 0px;
`;

const endWin2 = document.createElement('div');
endWin2.classList.add('endWin2');

// endWin2 elements

const closeBtn2 = document.createElement('button');
closeBtn2.classList.add('closeBtn2');
closeBtn2.innerText = 'X';
closeBtn2.style.cssText = `
    background: yellow;
    border: 4px solid #DA70D6;
    border-radius: 10px;
    font-size: 24px;
    color: #8B008B;
    padding: 0px 20px;
    margin: 10px 48px;
`;

const endWinText2 = document.createElement('div');
endWinText2.classList.add('endWinText2');
endWinText2.innerText = '30.05.2022';
endWinText2.style.cssText = `
    color: yellow;
    background: purple;
    padding: 0px 28px;
    font-size: 20px;
    border: 4px solid #DA70D6;
    border-radius: 10px;
    margin: 109px 3px;
`;

// appends Элементы

root.append(container);
container.append(headerButtons, bodyWin1, bodyWin2);
headerButtons.append(delBtn, enterInput, addBtn);
bodyWin1.append(doneBtn1, winText1, endWin1);
endWin1.append(closeBtn1, endWinText1);
bodyWin2.append(doneBtn2, winText2, endWin2);
endWin2.append(closeBtn2, endWinText2);

// создание логики

addBtn.addEventListener('click', () => {

    const valueInput = enterInput.value;

    if (valueInput) {
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

        // Задняя часть окна (Х и Дата)

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
            margin: 109px 3px;
        `;

        container.append(itemsProducts);
        itemsProducts.append(checkboxProduct, task, endOfWin);
        endOfWin.append(deleteItemBtn, dateEl);

        enterInput.value = '';

        // Кнопка удаления всех элементов

        delBtn.addEventListener('click', () => {
            itemsProducts.remove(itemsProducts);
        });
    };
});

function generateDate(date) {
    return `${date.getDay()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};


