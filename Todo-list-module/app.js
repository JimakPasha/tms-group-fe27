import { generateId } from "./helpers/generateId.js";
import { generateDate } from "./helpers/generateDate.js";
import { getTodoList, setTodoList } from "./localStorage.js";
import { buttonStyle, inputStyle } from "./button&inputStyle.js";
import { todoArray, setTodo } from "./todoArray.js";
import { createItemTodo } from "./createItemTodo.js";
import { arrayCompleted, counterAll, counterCompleted } from "./helpers/counter.js";

export function app() {
    const root = document.querySelector('#root');

    const body = document.querySelector('body');
    body.style.cssText = `
        color:grey;
        background-color:#BDBDBD;
        font-family: 'Open sans', 'sans-serif';
        font-size: 24px;
        font-weight: 700;
    `;
    
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.cssText = `
        width: 1200px;
        margin: 0 auto;
        padding: 30px 15px;
    `;
    
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
    filterPannelAll.innerHTML = `All: ${counterAll()}`;
    filterPannelAll.style.cssText = `
        margin-left: 20px;
        width: 20%;
        margin-right: 30px;
    `;

    const filterPannelCompleted = document.createElement('div');
    filterPannelCompleted.classList.add('filterPannelCompleted');
    filterPannelCompleted.innerHTML = `Completed: ${counterCompleted()}`;
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

    const todoListPannel = document.createElement('div');

    root.append(container);
    container.append(mainPannel, filterPannel, todoListPannel);
    mainPannel.append(btnDeleteAll, btnDeleteLast, inputCreateTodo, btnAdd);
    filterPannel.append(filterPannelAll, filterPannelCompleted, btnShowAll, btnShowCompleted, inputSearch);

    if (getTodoList()) {
        setTodo(JSON.parse(getTodoList()));
        todoArray.forEach((item) => {
            createItemTodo(item, todoListPannel);
        })
    }
    btnAdd.addEventListener('click', () => {
    const valueInput = inputCreateTodo.value;
    if (valueInput) {
        const itemTodo = {};
        itemTodo.id = generateId();
        itemTodo.date = generateDate();
        itemTodo.text = valueInput;
        itemTodo.isChecked = false;
        todoArray.push(itemTodo);
        createItemTodo(itemTodo, todoListPannel);
        setTodoList(todoArray);
    }
    inputCreateTodo.value = '';
    });

    btnDeleteAll.addEventListener('click', () => {
    todoArray.length = 0;
    setTodoList(todoArray);
    if (todoListPannel.lastChild) {
        todoListPannel.innerHTML = '';
    }
    });

    btnDeleteLast.addEventListener('click', () => {
    if (todoListPannel.lastChild) {
        todoArray.pop();
        setTodoList(todoArray);
        todoListPannel.removeChild(todoListPannel.lastChild);
    }
    });

    btnShowAll.addEventListener('click', () => {
    todoListPannel.innerHTML = ''
    todoArray.forEach((item) => {
        createItemTodo(item, todoListPannel);
    });
    });

    btnShowCompleted.addEventListener('click', () => {
    todoListPannel.innerHTML = '';
    todoArray.forEach((item)  => {
        if (item.isChecked) {
            createItemTodo(item, todoListPannel);
        }
    });
    });

    let search;
    inputSearch.addEventListener('keydown', () => {
    const valueSearch = inputSearch.value;
    const searchObj = {};
    searchObj.text = valueSearch;
    if (getTodoList()) {
        setTodo(JSON.parse(getTodoList()));
        search = todoArray.find((item) => {    
            if (item.text === searchObj.text.toLowerCase()) {
                todoListPannel.innerHTML = '';
                inputSearch.value = '';
                return search = createItemTodo(item, todoListPannel);

            } else if (searchObj.text === '') {
                todoListPannel.innerHTML = '';
                todoArray.forEach((item) => {
                    createItemTodo(item, todoListPannel);
                });
            }
        });
    }
    });

}











