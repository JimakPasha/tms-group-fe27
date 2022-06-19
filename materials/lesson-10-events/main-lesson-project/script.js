// Вёрстка
// Общие стили для блоков
const styleBlock = `
display: flex;
justify-content: space-around;
margin: 20px 0;
`;

// точка входа
const root = document.querySelector('#root');

// header
const header = document.createElement('header');
header.classList.add('header');
header.style.cssText = `
    height: 100px;
    background: grey;
`;

const title = document.createElement('h3');
title.classList.add('title');
title.innerText = 'ПРИЛОЖЕНИЕ ПО ДОБАВЛЕНИЮ ПРОДУКТОВ В СПИСОК ПОКУПОК';
title.style.color = '#fff';
title.style.display = 'flex';
title.style.justifyContent = 'center';
title.style.alignItems = 'center';
title.style.height = '100%';

// container
const container = document.createElement('div');
container.classList.add('container');

// infoPanel
const infoPanel = document.createElement('div');
infoPanel.classList.add('infoPanel');
infoPanel.style.cssText = styleBlock;

const infoPanelAll = document.createElement('div');
infoPanelAll.classList.add('infoPanelAll');
infoPanelAll.innerHTML = 'Всего: 3';

const infoPanelAdd = document.createElement('div');
infoPanelAdd.classList.add('infoPanelAdd');
infoPanelAdd.innerHTML = 'Уже добавили: 1';

const infoPanelImportant = document.createElement('div');
infoPanelImportant.classList.add('infoPanelImportant');
infoPanelImportant.innerHTML = 'Важных: 2';

// filtersPanel
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

// addedPanel
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

// listProducts
const listProducts = document.createElement('div');

// actionsBtnsList
const actionsBtnsList = document.createElement('div');
actionsBtnsList.classList.add('actionsBtnsList');
actionsBtnsList.style.cssText = styleBlock;
actionsBtnsList.style.justifyContent = 'start';

const actionBtnDeleteList = document.createElement('button');
actionBtnDeleteList.innerHTML = 'Удалить все продукты';
actionBtnDeleteList.style.marginRight = '20px';

const actionBtnDeleteLastElementList = document.createElement('button');
actionBtnDeleteLastElementList.innerHTML = 'Удалить последний добавленный продукт';

// appends elements
root.append(header, container);
container.append(infoPanel, filtersPanel, addedPanel, listProducts, actionsBtnsList);
infoPanel.append(infoPanelAll, infoPanelAdd, infoPanelImportant);
header.append(title);
filtersPanel.append(buttonAll, buttonAdd, buttonImportant, searchInput);
addedPanel.append(addedPanelBtn, addedInput);
actionsBtnsList.append(actionBtnDeleteList, actionBtnDeleteLastElementList);

// Создание логики
addedPanelBtn.addEventListener('click', () => {
    const valueInput = addedInput.value;

    if (valueInput) {
        const itemProducts = document.createElement('div');
        itemProducts.classList.add('item');
        itemProducts.style.cssText = `
            display: flex;
            justify-content: space-between;
            border: 1px solid #000;
            margin: 10px 0;
            height: auto;
        `;
        listProducts.append(itemProducts);
        const product = document.createElement('div');
        product.innerHTML = valueInput;

        const checkboxProduct = document.createElement('input');
        checkboxProduct.type = 'checkbox';
        checkboxProduct.style.margin = '3px 10px';
        checkboxProduct.addEventListener('click', () => {
            if (checkboxProduct.checked) {
                itemProducts.style.opacity = 0.2;
                itemProducts.style.textDecoration = 'line-through';
            } else {
                itemProducts.style.opacity = 1;
                itemProducts.style.textDecoration = 'none';
            }
        });

        const deleteItemBtn = document.createElement('button');
        deleteItemBtn.innerText = 'Удалть';
        deleteItemBtn.addEventListener('click', () => {
            itemProducts.remove();
        });

        const dateEl = document.createElement('div');
        const date = new Date();
        dateEl.innerHTML = `${date.getMonth()+1}.${date.getFullYear()}`;

        itemProducts.append(checkboxProduct, product, dateEl, deleteItemBtn);
    }

    addedInput.value = '';
    
});

actionBtnDeleteList.addEventListener('click', () => {
    listProducts.innerHTML = '';
});

actionBtnDeleteLastElementList.addEventListener('click', () => {
    if (listProducts.lastChild) {
        listProducts.removeChild(listProducts.lastChild);
    }
});
