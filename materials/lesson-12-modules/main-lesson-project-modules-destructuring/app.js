import { styleBlock } from './commonStyles.js';
import { getLocalStorageTodo, setLocalStorageTodo } from './localstorage.js';
import { generateId } from './helpers/generateId.js';
import { generateDate } from './helpers/generateDate.js';
import { todo, setTodo } from './todo.js';
import { createItemProducts } from './createItemProducts.js';

export function app() {
    const root = document.querySelector('#root');
    let countTodo = JSON.parse(getLocalStorageTodo()).length;
    
    const header = document.createElement('header');
    header.classList.add('header');
    header.style.cssText = `
        height: 100px;
        background: grey;
    `;
    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = 'ПРИЛОЖЕНИЕ ПО ДОБАВЛЕНИЮ ПРОДУКТОВ В СПИСОК ПОКУПОК';
    title.style.cssText = `
        color: #fff;
        display: flex,
        justifyContent: center;
        alignItems center;
        height: 100%;
    `;
    
    const container = document.createElement('div');
    container.classList.add('container');
    
    const infoPanel = document.createElement('div');
    infoPanel.classList.add('infoPanel');
    infoPanel.style.cssText = styleBlock;
    const infoPanelAll = document.createElement('div');
    infoPanelAll.classList.add('infoPanelAll');
    infoPanelAll.innerHTML = `Всего: ${countTodo}`;
    const infoPanelAdd = document.createElement('div');
    infoPanelAdd.classList.add('infoPanelAdd');
    infoPanelAdd.innerHTML = 'Уже добавили: 1';
    const infoPanelImportant = document.createElement('div');
    infoPanelImportant.classList.add('infoPanelImportant');
    infoPanelImportant.innerHTML = 'Важных: 2';

    const filtersPanel = document.createElement('div');
    filtersPanel.classList.add('filtersPanel');
    filtersPanel.style.cssText = styleBlock;
    const buttonAll = document.createElement('button');
    buttonAll.innerHTML = 'Все';
    const buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = 'Добавленные';
    const buttonImportant = document.createElement('button');
    buttonImportant.innerHTML = 'Важные';
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'поиск...';
    searchInput.style.cssText = `
        width: 200px;
    `;

    const addedPanel = document.createElement('div');
    addedPanel.style.cssText = styleBlock;
    const addedPanelBtn = document.createElement('button');
    addedPanelBtn.innerHTML = '+';
    addedPanelBtn.style.width = '100px';
    addedPanelBtn.style.height = '56px';
    const addedInput = document.createElement('input');
    addedInput.placeholder = 'Добавить новый продукт...';
    addedInput.style.cssText = `
        width: 85%;
        height: 50px;
    `;

    const listProducts = document.createElement('div');
    
    const actionsBtnsList = document.createElement('div');
    actionsBtnsList.classList.add('actionsBtnsList');
    actionsBtnsList.style.cssText = styleBlock;
    actionsBtnsList.style.justifyContent = 'start';
    const actionBtnDeleteList = document.createElement('button');
    actionBtnDeleteList.type = 'button';
    actionBtnDeleteList.innerHTML = 'Удалить все продукты';
    actionBtnDeleteList.style.marginRight = '20px';
    const actionBtnDeleteLastElementList = document.createElement('button');
    actionBtnDeleteLastElementList.innerHTML =
      'Удалить последний добавленный продукт';
    
    root.append(header, container);
    container.append(
      infoPanel,
      filtersPanel,
      addedPanel,
      listProducts,
      actionsBtnsList
    );
    infoPanel.append(infoPanelAll, infoPanelAdd, infoPanelImportant);
    header.append(title);
    filtersPanel.append(buttonAll, buttonAdd, buttonImportant, searchInput);
    addedPanel.append(addedPanelBtn, addedInput);
    actionsBtnsList.append(actionBtnDeleteList, actionBtnDeleteLastElementList);

    if (getLocalStorageTodo()) {
        setTodo(JSON.parse(getLocalStorageTodo()));
        todo.forEach((item) => {
            createItemProducts(item, listProducts);
        });
    }

    addedPanelBtn.addEventListener('click', () => {
    const valueInput = addedInput.value;
    if (valueInput) {
        const newObj = {};
        newObj.id = generateId();
        newObj.date = generateDate();
        newObj.text = valueInput;
        newObj.isChecked = false;
        todo.push(newObj);
        createItemProducts(newObj, listProducts);
        setLocalStorageTodo(todo);
    }
    addedInput.value = '';
    });

    actionBtnDeleteList.addEventListener('click', () => {
    todo.length = 0;
    setLocalStorageTodo(todo);
    listProducts.innerHTML = '';
    });

    actionBtnDeleteLastElementList.addEventListener('click', () => {
    if (listProducts.lastChild) {
        todo.pop();
        setLocalStorageTodo(todo);
        listProducts.removeChild(listProducts.lastChild);
    }
    });
}