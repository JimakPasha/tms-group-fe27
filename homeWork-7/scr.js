'use srtict'
const root = document.querySelector('#root');
//header
const header = document.createElement('header');


const styleBlock = `
dispaly: flex;
justify-content: space-around;
margin: 20px 0;
`;
header.classList.add('header');
header.style.cssText = `
   height: 100px;
   background: grey;

`;

//title
const title = document.createElement('h3');
title.classList.add('title');
title.innerText = 'Приложение по-добавлению продуктов в список';
title.style.color = '#fff';
title.style.display = 'flex';
title.style.justifyContent = 'center';
title.style.height = '100%';

//container
const container = document.createElement('div');
container.classList.add('container');


//infopamel
const infoPanel = document.createElement('div');
infoPanel.classList.add('infoPanel')
infoPanel.style.cssText = styleBlock;

const infoPanelAll = document.createElement('div');
infoPanelAll.classList.add('infoPanelAll')
infoPanelAll.innerText = 'Всего 3';

const infoPanelAdd = document.createElement('div');
infoPanelAll.classList.add('infoPanelAdd')
infoPanelAll.innerText = 'Уже добавили:1';

const infoPanelImportant = document.createElement('div');
infoPanelAll.classList.add('infoPanelImportant');
infoPanelAll.innerText = 'Важные:2';

//addPanel
const addPanel = document.createElement('div');
addPanel.style.cssText = styleBlock;

const addPanelBtn = document.createElement('button');
addPanelBtn.innerHTML = '+';
addPanelBtn.style.cssText = `
width: 100px;
height: 56px;
`;

const addinput = document.createElement('input');
addinput.style.cssText = `
width: 85%;
height: 56px;
`;

//listProducts
const arrProducts = ['бананы', 'йогурт', 'хлеб']
const listProducts = document.createElement('div');

// for (let i = 0; i < arrProducts.length; i++) {
//     const itemProduct = document.createElement('div');
//     product.innerHTML = arrProducts[i];

//     listProducts.append(itemProduct);

//     const checkbox = createElement = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.style.margin = '0 10px';

//     itemProduct.append(checkbox);
// }

//actions
const actions = document.createElement('div')
actions.style.cssText = styleBlock;

const actionsBtnDelete = document.createElement('button');
actionsBtnDelete.innerHTML = 'Удалить все продукты';

//appends elements
root.append(header, container);
container.append(infoPanel, addPanel, listProducts, actions);
infoPanel.append(infoPanelAll, infoPanelAdd, infoPanelImportant);
header.append(title);
addPanel.append(addPanelBtn, addinput)
listProducts.append(product);
actions.append(actionsBtnDelete);