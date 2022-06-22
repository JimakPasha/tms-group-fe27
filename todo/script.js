'use strict';

const  root = document.querySelector('#root');
const styleBlock =`
    width: 145px;
    height: 73px;
    background: rgb(75, 229, 157);
    font-size: 19px;
    margin: 10px;
    color: grey;
    border: 2px solid black;
    border-radius: 22px;
`;

const styleBtnShow = `
    width: 200px;
    height: 73px;
    background: rgb(75, 229, 157);
    font-size: 20px;
    margin: 10px;
    color: grey;
    border: 2px solid black;
    border-radius: 22px;
`;

const content = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const form = `
    width: 700px;
    height: 170px;
    background: gray;
    border: 2px solid;
    border-radius: 20px;
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
const formBtn = `
    width: 60px;
    height: 60px;
    background: rgb(75, 229, 157);
    font-size: 20px;
    margin: 10px;
    color: #3e3a3a;
    border: 2px solid black;
    border-radius: 22px;
`;

const formText = `
    width: 430px;
    height: 75px;
    border: 2px solid;
    border-radius: 20px;
    font-size: 25px;
    background: white;
    padding: 20px;
`;

const formRighStyle = `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 90%;
margin-left: 40px;

`;

// header
const header = document.createElement('header');
header.classList.add('header');
header.style.cssText = `
    height: 100px;
    background: rgb(75, 229, 157);
    border: 3px solid black;
    border-radius: 20px;
`;

// title
const title = document.createElement('h3');
title.classList.add('title');
title.innerHTML = 'Plans for today';
title.style.color = '#fff';
title.style.display = 'flex';
title.style.justifyContent = 'center';
title.style.alignItems = 'center';
title.style.height = '100%';
title.style.fontSize = '50px';

//container
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

// lineInput
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

//searchInput
const searchInput = document.createElement('div');
searchInput.classList.add('searchInput');
searchInput.style.cssText = content;


const searchInputAll = document.createElement('div');
searchInputAll.classList.add('searchInputAll');
searchInputAll.innerText='All: 2';
searchInputAll.style.cssText = `
    width: 120px;
    font-size: 20px;
    margin: 10px;
`;

const searchInputCompleted = document.createElement('div');
searchInputCompleted.classList.add('searchInputCompletedl');
searchInputCompleted.innerText='Completed: 1';
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


// appends elements
root.append(header,container);
header.append(title);
container.append(
    lineInput,
    searchInput,
);
lineInput.append(lineInputDelAll, lineInputDelLast, myPlans, lineInputAdd);
searchInput.append(searchInputAll, searchInputCompleted,searchInputBtnAll, searchInputBtnCompleted, searchInputSearch );

// создание логики
let todos = [];

if (localStorage.getItem('todo')) {
    todos = JSON.parse(localStorage.getItem('todo'));
    todos.forEach((item) => {
    createElement(item);
    });
};

lineInputAdd.addEventListener('click', () => {
    const inputValue = myPlans.value;

    if(inputValue){
        const newTodoObj = {};
        newTodoObj.date = generatedate();
        newTodoObj.id = generateId();
        newTodoObj.text = inputValue; 
        newTodoObj.isChecked = false;
        todos.push(newTodoObj);
        createElement(newTodoObj);
        updateLocalStorageTodo(todos);
    }
    myPlans.value = '';
});

lineInputDelAll.addEventListener('click', () => {
    todos.length = 0;
    updateLocalStorageTodo(todos);
    // let formElements = document.querySelectorAll("div.form"); 

    // for(let i = 0; i < formElements.length; i++){
    //     let element = document.querySelector('div.form');
    //     element.remove();
    // }    
});

// lineInputDelLast.addEventListener('click', () => {
//     if (listProducts.lastChild) {
//         todoArr.pop();
//         updateLocalStorageTodo(todoArr);
//         listProducts.removeChild(listProducts.lastChild);
//     }
// });

function generateId() {
    return String(
        Math.random() * 10000 + (Math.random() * 10000) / (Math.random() * 100)
    ).replace('.', '0');
    };

    function generatedate () {
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()} 
        ${date.getMonth() + 1}`;
    };
    
    const dictionaryMonth = {
        1: 'янв',
        2: 'фев',
        3: 'март',
        4: 'апр',
        5: 'май',
        6: 'июнь',
        7: 'июль',
        8: 'авг',
        9: 'сен',
        10: 'окт',
        11: 'нояб',
        12: 'дек',
    };

    function createElement(obj) {
        let taskForm = document.createElement('div');
        taskForm.classList.add('form');
        taskForm.id = obj.id;
        taskForm.style.cssText = form;

        let checkboxForm = document.createElement('input');
        checkboxForm.classList.add('checkbox');
        checkboxForm.type = 'checkbox';
        checkboxForm.checked = obj.isChecked;
        checkboxForm.style.cssText = `
        width: 40px;
        height: 40px;
        margin: 10px;
        cursor: pointer;
        ` ;
        
        let taskFormDate = document.createElement ('div');
        let date = new Date();
        taskFormDate.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        taskFormDate.innerHTML = obj.date;
        //let date = new Date();
        taskFormDate.style.cssText = `
            width: 100%;
            height: 36px;
            border-radius: 20px;
            border: 2px solid;
            background: white;
            padding: 10px;
        `;

        checkboxForm.addEventListener('click', () => {
            if (checkboxForm.checked) {
                taskFormText.style.opacity = 0.2;
                taskFormText.style.textDecoration = 'line-through';
            } else {
                taskFormText.style.opacity = 1;
                taskFormText.style.textDecoration = 'none';
            }
            todos = todos.map((item) => {
                if (item.id === obj.id) {
                item.isChecked = checkboxForm.checked;
                }
                return item;
            });
            updateLocalStorageTodo(todos);
        });


        let taskFormText = document.createElement('div');
        taskFormText.classList.add('formText');
        taskFormText.innerHTML = obj.text;    
        taskFormText.style.cssText = formText;

        let taskFormRight  = document.createElement ('div');
        taskFormRight.classList.add('formRight');
        taskFormRight.style.cssText = formRighStyle;


        let taskFormBtnClose = document.createElement('button');
        taskFormBtnClose.classList.add('btnClose');
        taskFormBtnClose.innerHTML = '	&#10006;';
        taskFormBtnClose.style.cssText = formBtn;

        taskFormBtnClose.addEventListener('click', () => {
            todos = todos.filter((i) => i.id !== obj.id);
            updateLocalStorageTodo(todos);
            taskForm.remove();
        });        


        container.append(taskForm);
        taskForm.append(checkboxForm, taskFormText, taskFormRight);
        taskFormRight.append(taskFormBtnClose, taskFormDate);
    };

    function updateLocalStorageTodo(array) {
        localStorage.setItem('todo', JSON.stringify(array));
    }