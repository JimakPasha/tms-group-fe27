import {styleBlock, styleBtnShow, content} from './styleBlock.js';
import { getLocalStorageTodo, setLocalStorageTodo } from './localstorage.js';
import { generateId } from './helpers/generateId.js';
import { generatedate } from './helpers/generateDate.js';
import { todos, setTodo } from './todo.js';
import { createElement } from './createElement.js';

export function app(){
    const  root = document.querySelector('#root');
    const header = document.createElement('header');
    header.classList.add('header');
    header.style.cssText = `
        height: 100px;
        background: rgb(75, 229, 157);
        border: 3px solid black;
        border-radius: 20px;
    `;

    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = 'Plans for today';
    title.style.cssText = `
        color: #fff;
        display: flex;
        justify-Content: center;
        align-Items: center;
        height: 100%;
        font-Size: 50px;
    `;

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.cssText = `
        margin: 16px  auto;
        width: 1200px; 
        text-align: center; 
        padding: 0 15px;
        background: #8080801f;
        border: 3px solid;
        border-radius: 20px
    `;
    
    const lineInput = document.createElement('div');
    lineInput.classList.add('lineInput');
    lineInput.style.cssText = content;

    const lineInputDelAll = document.createElement('button');
    lineInputDelAll.classList.add('lineInputDelAll');
    lineInputDelAll.innerText = 'Delete All';
    lineInputDelAll.style.cssText = styleBlock;
    
    const lineInputDelLast = document.createElement('button');
    lineInputDelLast.classList.add('lineInputDelLast');
    lineInputDelLast.innerText = 'Delete Last';
    lineInputDelLast.style.cssText = styleBlock;
    
    const myPlans = document.createElement ('input');
    myPlans.classList.add('myPlans');
    myPlans.placeholder = 'Enter todo …';
    myPlans.style.cssText = `
        width: 30%;
        height: 50px;
        border: 2px solid;
        border-radius: 10px;
        text-align: center;
        font-size: 17px;
    `;
    
    const lineInputAdd = document.createElement('button');
    lineInputAdd.classList.add('lineInputAdd');
    lineInputAdd.innerText = 'Add';
    lineInputAdd.style.cssText = styleBlock;
    
    const searchInput = document.createElement('div');
    searchInput.classList.add('searchInput');
    searchInput.style.cssText = content;
    
    const searchInputAll = document.createElement('div');
    searchInputAll.classList.add('searchInputAll');
    searchInputAll.innerText=`All: `;
    searchInputAll.style.cssText = `
        width: 120px;
        font-size: 20px;
        margin: 10px;
    `;
    
    const searchInputCompleted = document.createElement('div');
    searchInputCompleted.classList.add('searchInputCompletedl');
    searchInputCompleted.innerText=`Completed: `;
    searchInputCompleted.style.cssText = `
        width: 120px;
        font-size: 20px;
        margin: 10px;
    `;
    
    const searchInputBtnAll = document.createElement('button');
    searchInputBtnAll.classList.add('searchInputBtnAll');
    searchInputBtnAll.innerText = 'Show All';
    searchInputBtnAll.style.cssText = styleBtnShow;
    
    const searchInputBtnCompleted = document.createElement('button');
    searchInputBtnCompleted.classList.add('searchInputBtnCompleted');
    searchInputBtnCompleted.innerText = 'Show Completed';
    searchInputBtnCompleted.style.cssText = styleBtnShow;
    
    const searchInputSearch = document.createElement ('input');
    searchInputSearch.classList.add('searchInputSearch');
    searchInputSearch.placeholder = 'Search…';
    searchInputSearch.style.cssText = `
        width: 30%;
        height: 50px;
        border: 2px solid;
        border-radius: 10px;
        text-align: center;
        font-size: 17px;
    `;

    const todoList = document.createElement('div');
    
    root.append(header,container);
    container.append(
        lineInput,
        searchInput,
        todoList);
    header.append(title);
    
    lineInput.append(
        lineInputDelAll, 
        lineInputDelLast, 
        myPlans, 
        lineInputAdd);
    searchInput.append(
        searchInputAll,
        searchInputCompleted,
        searchInputBtnAll,
        searchInputBtnCompleted, 
        searchInputSearch );

    if (getLocalStorageTodo()) {
        setTodo(JSON.parse(getLocalStorageTodo()));
        todos.forEach((item) => {
            createElement(item, todoList);
        });
    }

    lineInputAdd.addEventListener('click', () => {
        const inputValue = myPlans.value;
    
        if(inputValue){
            const newTodoObj = {};
            newTodoObj.date = generatedate();
            newTodoObj.id = generateId();
            newTodoObj.text = inputValue; 
            newTodoObj.isChecked = false;
            todos.push(newTodoObj);
            createElement(newTodoObj, todoList);
            setLocalStorageTodo(todos);
        }
        myPlans.value = '';
    });

    lineInputDelAll.addEventListener('click', () => {
        todos.length = 0;
        setLocalStorageTodo(todos);
        todoList.innerHTML = '';
        });
    
    lineInputDelLast.addEventListener('click', () => {
        if (todoList.lastChild) {
            todos.pop();
            setLocalStorageTodo(todos);
            todoList.removeChild(todoList.lastChild);
        }
        });
    
        searchInputBtnAll.addEventListener('click', () => {
            todoList.innerHTML = '';
            todos.forEach((item) => {
                createElement(item, todoList);
            });
            });
        
        searchInputBtnCompleted.addEventListener('click', () => {
            todoList.innerHTML = '';
        todos.forEach((item)  => {
            if (item.isChecked) {
            createElement(item, todoList);
            }
        });
        });
    
        searchInputSearch.addEventListener('change', () => {
            let search = searchInputSearch.value;
            if(search != '' && search != null) {
                let elements = document.querySelectorAll('div .form');
                for(let i = 0; i < elements.length; i++){
                    if(!elements[i].childNodes[1].innerHTML.includes(search)){                    
                        elements[i].remove();  
                    }
                }
            }
        });
};