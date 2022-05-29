'use strict'
const root = document.querySelector('#root');
root.classList.add('root');
root.style.cssText = `
border: 2px solid black;
border-radius: 10px;
max-width: 730px;
padding-top: 15px;
margin: 0 auto;
background:black;
`
const background = document.querySelector('body');
background.style.cssText = `
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
background: grey;
` 

//header

const header = document.createElement('header');
header.classList.add('header');
header.style.cssText = `
margin-bottom: 40px;
`

const headerContainer = document.createElement('div')
headerContainer.classList.add('headerContainer');
headerContainer.style.cssText = `
margin: 0 auto;
max-width: 700px;
display: flex;
justify-content: space-around;
margin-bottom: 20px;
`



const deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('deleteAllBtn')
deleteAllBtn.innerHTML = 'Delete All';
deleteAllBtn.style.cssText = `
width: 115px;
height: 50px;
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(237,10,54,1) 100%);
border: solid 2px black;
border-radius: 10px;
color: black;
cursor: pointer;
`
const deleteLastBtn = document.createElement('button');
deleteLastBtn.classList.add('deleteLastBtn')
deleteLastBtn.innerHTML = 'Delete Last';
deleteLastBtn.style.cssText = `
width: 115px;
height: 50px;
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(237,10,54,1) 100%);
border: solid 2px black;
border-radius: 10px;
color: black;
cursor: pointer;
`

const enterInput = document.createElement('input');
enterInput.classList.add('enterInput');
enterInput.placeholder = 'Enter Todo';
enterInput.style.cssText = `
width: 300px;
height: 45px;
border: solid 2px black;
border-radius: 10px;
text-align: center;

`
const addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.innerHTML = 'Add';
addBtn.style.cssText = `
width: 115px;
height: 50px;
background:#0576ff;background:-moz-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-webkit-gradient(left bottom,right top,color-stop(0,#0576ff),color-stop(100%,#24f8ff));background:-webkit-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-o-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-ms-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:linear-gradient(45deg,#0576ff 0,#24f8ff 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0576ff',endColorstr='#24f8ff',GradientType=1);
border: solid 2px black;
border-radius: 10px;
color: black;
cursor: pointer;
`
//Actions Container
const actionsContainer = document.createElement('div');
actionsContainer.classList.add('actions');
actionsContainer.style.cssText = `
display: flex;
justify-content: space-around;
align-items: center;
padding: 0 15px;
`;
const allTasks = document.createElement('div');
allTasks.classList.add('allTasks');
allTasks.innerHTML = 'All: 3';
allTasks.style.cssText = `
color: #FFFFFF;
`;
const complitedTasks = document.createElement('div');
complitedTasks.classList.add('complitedTasks');
complitedTasks.innerHTML = 'Complited: 1';
complitedTasks.style.cssText = `
color:  #FFFFFF;
`;

const showAllBtn = document.createElement('button');
showAllBtn.classList.add('showAllBtn');
showAllBtn.innerText = 'Show All'
showAllBtn.style.cssText = `
width: 170px;
height: 50px;
background-color: #AFEEEE;
border: solid 2px black;
border-radius: 10px;
background: radial-gradient(circle, rgba(18,232,243,1) 0%, rgba(66,236,79,1) 100%);border: solid 2px black;
color: black;
cursor: pointer;
`
const showComplitedBtn = document.createElement('button');
showComplitedBtn.classList.add('showComplitedBtn');
showComplitedBtn.innerText = 'Show Complited'
showComplitedBtn.style.cssText = `
width: 170px;
height: 50px;
background-color: #AFEEEE;
border: solid 2px black;
border-radius: 10px;
background: radial-gradient(circle, rgba(18,232,243,1) 0%, rgba(66,236,79,1) 100%);border: solid 2px black;
color: black;
cursor: pointer;
`
const searchInput = document.createElement('input');
searchInput.classList.add('searchInput');
searchInput.placeholder = 'Search';
searchInput.style.cssText = `
width: 170px;
height: 45px;
border: solid 2px black;
border-radius: 10px;
text-align: center;
`
//tasks
const containerTasks = document.createElement('div');
containerTasks.classList.add('containerTasks');
containerTasks.style.cssText = `
width: 90%;
margin: 0 auto;
`
const toDo = [1, 2, 3];
for (let i=0; i < toDo.length; i++){

    
const task = document.createElement('div');
task.classList.add('task');
task.style.cssText = `
max-width: 665px;
height: 115px;
border: 2px solid black;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
padding: 0px 15px;
background: radial-gradient(circle, rgba(254,244,254,1) 0%, rgba(211,202,198,1) 100%);`


const checkboxBtn = document.createElement('input');
checkboxBtn.classList.add('checkboxBtn')
checkboxBtn.type = 'checkbox';
checkboxBtn.style.cssText = `
width: 50px;
height: 50px;
cursor: pointer;
`
const inputTask = document.createElement('input');
inputTask.classList.add('inputTask');
inputTask.placeholder = 'Todo text';
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
width: 37px;
height: 25px;
cursor: pointer;
border: 2px solid black;
border-radius: 6px;
background:#ea6e48;background:-moz-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-webkit-gradient(left bottom,right top,color-stop(0,#ea6e48),color-stop(100%,#bc1a63));background:-webkit-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-o-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-ms-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ea6e48',endColorstr='#bc1a63',GradientType=1)
color: black;
font-weight: 600;
`
const date = document.createElement('div');
date.classList.add('date');
date.innerHTML = 'date';
date.style.cssText = `
width: 65px;
height: 22px;
background-color: #fff;
border-radius: 6px;
text-align: center;
color: #696969;
`

containerTasks.append(task);
task.append(checkboxBtn, inputTask, bubble);
bubble.append(exitBtn, date);

}


//appends
root.append(header,containerTasks);
header.append(headerContainer, actionsContainer);
headerContainer.append(deleteAllBtn, deleteLastBtn, enterInput, addBtn);
actionsContainer.append(allTasks, complitedTasks, showAllBtn, showComplitedBtn, searchInput)