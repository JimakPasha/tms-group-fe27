import { styleButton, styleBtn } from "./styleButton.js";
import { generateDate } from "./generateDate.js";
import { generateId } from "./generateId.js";
import { updateLocalStorageTodo } from "./localStor.js";
import { containerStyle, controlPanelStyle, controlPanelInputStyle } from "./styleElements.js";
import { infoPanelStyle, infoPanelAllStyle, infoPanelCompletedStyle } from "./styleElements.js";
import { itemTodoPanelStyle, todoLabelStyle, todoTextStyle } from "./styleElements.js";
import { todoLabelCheckboxStyle, todoWrapperStyle, todoDateStyle } from "./styleElements.js";
import { infoPanellSearchStyle } from "./styleElements.js";


export function app() {
    
    const root = document.querySelector('#root');

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.cssText = containerStyle;



    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = controlPanelStyle;

    const controlPanelDelAll = document.createElement('button');
    controlPanelDelAll.innerText = 'Delete All';
    controlPanelDelAll.style.cssText = styleButton;
    controlPanelDelAll.style.width = '300px';

    const controlPanelDelLast = document.createElement('button');
    controlPanelDelLast.innerText = 'Delete Last';
    controlPanelDelLast.style.cssText = styleButton;
    controlPanelDelLast.style.width = '300px';

    const controlPanelInput = document.createElement('input');
    controlPanelInput.placeholder = 'Enter todo...';
    controlPanelInput.style.cssText = controlPanelInputStyle;

    const controlPanelAdd = document.createElement('button');
    controlPanelAdd.innerText = 'Add';
    controlPanelAdd.style.cssText = styleButton;
    controlPanelAdd.style.width = '300px';



    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = infoPanelStyle;

    const infoPanelAll = document.createElement('div');
    infoPanelAll.innerText = `All: 0`;
    infoPanelAll.style.cssText = infoPanelAllStyle;

    const infoPanelCompleted = document.createElement('div');
    infoPanelCompleted.innerText = 'Completed: 0';
    infoPanelCompleted.style.cssText = infoPanelCompletedStyle;

    const infoPanellShowAll = document.createElement('button');
    infoPanellShowAll.innerText = 'Show All';
    infoPanellShowAll.style.cssText = styleButton;
    infoPanellShowAll.style.width = '200px';

    const infoPanellShowCompleted = document.createElement('button');
    infoPanellShowCompleted.innerText = 'Show Completed';
    infoPanellShowCompleted.style.cssText = styleButton;
    infoPanellShowCompleted.style.width = '200px';

    const infoPanellSearch = document.createElement('input');
    infoPanellSearch.placeholder = 'Search...';
    infoPanellSearch.style.cssText = infoPanellSearchStyle;


    const listTodoPanel = document.createElement('div');

    
    root.append(container);
    container.append(controlPanel, infoPanel, listTodoPanel);
    controlPanel.append(controlPanelDelAll, controlPanelDelLast, controlPanelInput, controlPanelAdd);
    infoPanel.append(infoPanelAll, infoPanelCompleted, infoPanellShowAll, infoPanellShowCompleted, infoPanellSearch);


    styleBtn();
    let todos = [];
    let countChecked = 0;

    if (localStorage.getItem('todo')) {
        todos = JSON.parse(localStorage.getItem('todo'));
        todos.forEach((item) => {
            createItemTodoPanel(item);
            if(item.isChecked) {
                countChecked += 1;
            }
        });
    }

    infoPanelAll.innerText = `All: ${todos.length}`; 
    infoPanelCompleted.innerText = `Completed: ${countChecked}`;

    container.addEventListener('click', () => {
        if (localStorage.getItem('todo')) {
            countChecked = 0;
            infoPanelAll.innerText = `All: ${todos.length}`;
            todos = JSON.parse(localStorage.getItem('todo'));
            todos.forEach((item) => {
                if(item.isChecked) {
                    countChecked += 1;
                }  
            }); 
            infoPanelCompleted.innerText = `Completed: ${countChecked}`;
        }
    });

    infoPanellShowAll.addEventListener('click', () => {
        listTodoPanel.innerHTML = '';
        todos = JSON.parse(localStorage.getItem('todo'));
        todos.forEach((item) => {
            createItemTodoPanel(item);
        });           
    });

    infoPanellShowCompleted.addEventListener('click', () => {
        listTodoPanel.innerHTML = '';
        todos = JSON.parse(localStorage.getItem('todo'));
        todos.forEach((item) => {
            if(item.isChecked) {
                createItemTodoPanel(item);
            }  
        });   
    });

    infoPanellSearch.addEventListener('input', () => {
        const valueSearch = (infoPanellSearch.value).replaceAll(" ", "").toLowerCase();
    
        if (listTodoPanel.innerHTML && valueSearch) { 
            todos = JSON.parse(localStorage.getItem('todo'));
            todos.forEach((item) => {
                if(valueSearch === (item.text).replaceAll(" ", "").toLowerCase()) {
                    listTodoPanel.innerHTML = '';
                    infoPanellSearch.value = ''; 
                    createItemTodoPanel(item);
                }
            });  
        } 
    });

    controlPanelAdd.addEventListener('click', () => {
        const valueInput = controlPanelInput.value;

        if (valueInput) {
            const todo = {};
            todo.id = generateId();
            todo.date = generateDate();
            todo.text = valueInput;
            todo.isChecked = false;
            todos.push(todo);
            createItemTodoPanel(todo);
            updateLocalStorageTodo(todos);
            controlPanelInput.value = '';
        }   
    });

    controlPanelDelLast.addEventListener('click', () => {
        if (listTodoPanel.lastChild) {
            const qustion = confirm('Удалить последнее дело из списка?');
            if (qustion) {
                todos.pop();
                updateLocalStorageTodo(todos);
                listTodoPanel.removeChild(listTodoPanel.lastChild);
            }
        }
    });

    controlPanelDelAll.addEventListener('click', () => {
        if (listTodoPanel.innerHTML) {
            const qustion = confirm('Удалить список всех дел?');
            if (qustion) {
                todos.length = 0;
                updateLocalStorageTodo(todos);
                listTodoPanel.innerHTML = '';
            }
        }
    });

    function createItemTodoPanel(obj) {
        const itemTodoPanel = document.createElement('div');
        itemTodoPanel.classList.add('itemTodoPanel');
        itemTodoPanel.id = obj.id;
        itemTodoPanel.style.cssText = itemTodoPanelStyle;
        listTodoPanel.append(itemTodoPanel);
        
        const todoLabel = document.createElement('label');
        todoLabel.style.cssText = todoLabelStyle;
        
        const todoText = document.createElement('div');
        todoText.style.cssText = todoTextStyle;
        todoText.innerText = obj.text;
        itemTodoPanel.append(todoLabel, todoText);
        
        const todoLabelSpan = document.createElement('span');
        todoLabelSpan.classList.add('todoSpan');
        todoLabelSpan.style.cssText = styleButton;
        todoLabelSpan.style.width = '100%';
        todoLabelSpan.style.position = 'absolute';
        todoLabelSpan.style.top = '0';
        todoLabelSpan.style.left = '0';
        todoLabelSpan.innerHTML = '-';
        
        const todoLabelCheckbox = document.createElement('input');
        todoLabelCheckbox.type = 'checkbox';
        todoLabelCheckbox.checked = obj.isChecked;
        todoLabelCheckbox.classList.add('todoCheckbox');
        todoLabelCheckbox.style.cssText = todoLabelCheckboxStyle;
    
        if (todoLabelCheckbox.checked) {
            todoLabelSpan.innerHTML = '&#10003';
            itemTodoPanel.style.backgroundColor = 'grey';
            todoText.style.textDecoration = 'line-through';
        }
        todoLabel.append(todoLabelCheckbox, todoLabelSpan);
    
        todoLabelCheckbox.addEventListener('click', () => {
            if (todoLabelCheckbox.checked) {
                todoLabelSpan.innerHTML = '&#10003';
                itemTodoPanel.style.backgroundColor = 'grey';
                todoText.style.textDecoration = 'line-through';
            } else {
                todoLabelSpan.innerHTML = '-';
                itemTodoPanel.style.backgroundColor = '#d3d3d3';
                todoText.style.textDecoration = 'none';
            }
            todos = todos.map((item) => {
                if(item.id === obj.id) {
                item.isChecked = todoLabelCheckbox.checked;
                }
                return item;
            });
            updateLocalStorageTodo(todos);
        });
        
        const todoWrapper = document.createElement('div');
        todoWrapper.style.cssText = todoWrapperStyle;
    
        itemTodoPanel.append(todoWrapper);
        
        const todoClose = document.createElement('button');
        todoClose.innerHTML = 'X';
        todoClose.style.cssText = styleButton;
        todoClose.style.width = '60px';
        todoClose.style.height = '40px';
        todoClose.addEventListener('click', () => {
            const qustion = confirm('Вы уверены?');
            if (qustion) {
                todos.splice(todos.indexOf(obj), 1);
                updateLocalStorageTodo(todos);
                itemTodoPanel.remove();
            } 
        });
        
        const todoDate = document.createElement('div');
        todoDate.style.cssText = todoDateStyle;
        todoDate.innerHTML = obj.date;
        
        todoWrapper.append(todoClose, todoDate);
        styleBtn();
    }  
}
