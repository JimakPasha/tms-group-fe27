'use strict'
import { generateDate } from "./helpers.js";
import { generateId } from "./helpers.js";
import { root, header, headerContainer, deleteAllBtn,
  deleteLastBtn, enterInput, addBtn,
  actionsContainer, allTasks, completedTasks,
  showAllBtn, showCompletedBtn, searchInput} from "./elements&styles.js"

root.append(header);
header.append(headerContainer, actionsContainer)
headerContainer.append(deleteAllBtn, deleteLastBtn, enterInput, addBtn);
actionsContainer.append(allTasks, completedTasks, showAllBtn, showCompletedBtn, searchInput)

const containerTasks = document.createElement('div');
containerTasks.classList.add('containerTasks');
containerTasks.style.cssText = `
  max-width: 700px;
  margin: 0 auto;
`
root.append(containerTasks);

let toDoArr = [];

if (localStorage.getItem('todo')) {
  toDoArr = JSON.parse(localStorage.getItem('todo'));
  toDoArr.forEach((item) => {
    createElement(item);
  });
}

addBtn.addEventListener('click', () => {
const valueInput = enterInput.value;
 if (valueInput){

  const newObj = {};
    newObj.id = generateId();
    newObj.date = generateDate();
    newObj.text = valueInput;
    newObj.isChecked = false;
    toDoArr.push(newObj);
    createElement(newObj);
    updateLocalStorageTodo(toDoArr);

 }
 
 enterInput.value = '';
 
 });


function createElement({id, date, text, isChecked}) {

    const task = document.createElement('div');
    task.classList.add('task');
    task.id = id;
    task.style.cssText = `
      max-width: 665px;
      height: 115px;
      border: 2px solid black;
      border-radius: 10px;
      box-shadow:10px 4px 4px #696969;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0px 15px;
    `
    
    containerTasks.append(task);

    const checkboxBtn = document.createElement('input');
    checkboxBtn.classList.add('checkboxBtn')
    checkboxBtn.type = 'checkbox';
    checkboxBtn.checked = isChecked;
    checkboxBtn.style.cssText = `
      width: 50px;
      height: 45px;
      cursor: pointer;
    `
    if (checkboxBtn.checked) {
      task.style.opascity = 0.6;
      task.style.backgroundColor = '#D8BFD8';
      inputTask.style.textDecoration = 'line-through';
  }


  task.addEventListener('click', () => {
    if (checkboxBtn.checked) {
      task.style.opacity = 0.6;
      task.style.backgroundColor = '#D8BFD8';
      inputTask.style.textDecoration = 'line-through';
    } else {
      task.style.backgroundColor = '#D3D3D3';
      task.style.opacity = 1;
      inputTask.style.textDecoration = 'none';
    }
    toDoArr = toDoArr.map((item) => {
        if(item.id === id) {
           item.isChecked = checkboxBtn.checked;
        }
        return item;
    });
    //  updateLocalStorageTodo(toDoArr);
  });

    const inputTask = document.createElement('div');
    inputTask.classList.add('inputTask');
    inputTask.innerText = text;
    inputTask.style.cssText = `
      text-align: center;
      width: 444px;
      height: 45px;
      border: none;
      border-radius: 7px;
    `
    const bubble = document.createElement('div');
    bubble.classList.add('parent');
    bubble.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 100%;
      justify-content: space-around;
    ` 
    
    const exitBtn = document.createElement('button');
    exitBtn.classList.add('exitBtn');
    exitBtn.innerHTML = 'X';
    exitBtn.style.cssText = `
      background:#ea6e48;background:-moz-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-webkit-gradient(left bottom,right top,color-stop(0,#ea6e48),color-stop(100%,#bc1a63));background:-webkit-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-o-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-ms-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ea6e48',endColorstr='#bc1a63',GradientType=1)}
      color: black;
      width: 37px;
      height: 25px;
      cursor: pointer;
      border: 2px solid black;
      border-radius: 6px;
      background-color: #AFEEEE;
      font-weight: 600;
    `

    exitBtn.addEventListener('click', () => {
      toDoArr = toDoArr.filter((i) => i.id !== id);
      updateLocalStorageTodo(toDoArr);
      task.remove();
    })

    const dateArea = document.createElement('div');
    dateArea.classList.add('date');
    dateArea.innerHTML = date;
    dateArea.style.cssText = `
      width: 99px;
      height: 22px;
      background-color: #fff;
      border-radius: 6px;
      text-align: center;
      color: #696969;
    `

    task.append(checkboxBtn, inputTask, bubble);
    bubble.append(exitBtn, dateArea);

    updateLocalStorageTodo(toDoArr);


  }

  function updateLocalStorageTodo(array){
   localStorage.setItem('todo', JSON.stringify(array))
  }


  deleteAllBtn.addEventListener('click', () => {
    containerTasks.remove();
    localStorage.clear();
  
    });

deleteLastBtn.addEventListener('click', () => {
  if (containerTasks.lastChild) {
      toDoArr.pop();
      updateLocalStorageTodo(toDoArr)
      containerTasks.removeChild(containerTasks.lastChild);  
  }
  });
