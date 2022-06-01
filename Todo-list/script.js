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
const arrTodoList = ['Learn JS', 'Do Homework', 'Solve task Codewars'];
for (let i = 0; i < arrTodoList.length; i++) {
    const itemTodoList = document.createElement('div');
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
    todoText.innerHTML = arrTodoList[i];
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

    const date = document.createElement('div');
    date.classList.add('date');
    date.innerHTML = 'Date';
    date.style.cssText = `
        width: 120px;
        height: 40px;
        background-color: white;
        border-radius: 10px;
        text-align: center;
        margin-right: 40px;
        padding: 5px;
    `;
    todoClose.append(date);

    inputDone.setAttribute('onchange','activeCheckbox()');
}
function activeCheckbox() {
    for (let a = 0; a < arrTodoList.length; a++) {
        let checkedCheckbox = document.getElementsByClassName('inputDone');
        let spanAfter = document.getElementsByClassName('spanDone');
        let changeTodoPanel = document.getElementsByClassName('itemTodoList');
            if (checkedCheckbox[a].checked) {
                spanAfter[a].innerHTML = '&#10004';
                spanAfter[a].style.paddingLeft = '20px';
                spanAfter[a].style.color = 'black';
                spanAfter[a].style.transition = 'all .2s ease';
                changeTodoPanel[a].style.backgroundColor = 'dimgray';
            } else {
                spanAfter[a].innerHTML = '';
                changeTodoPanel[a].style.backgroundColor = '#BDBDBD';
            }
    }
}
    
//appends elements
root.append(container);
container.append(mainPannel, filterPannel, todoListPannel);
mainPannel.append(btnDeleteAll, btnDeleteLast, inputCreateTodo, btnAdd);
filterPannel.append(filterPannelAll, filterPannelCompleted, btnShowAll, btnShowCompleted, inputSearch);