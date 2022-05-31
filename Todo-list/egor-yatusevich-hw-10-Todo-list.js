
'use strict'
const root = document.querySelector('#root');
root.classList.add('root');
root.style.cssText = `
border: 2px solid black;
border-radius: 10px;
max-width: 730px;
padding-top: 15px;
background-color: #D3D3D3;
margin: 0 auto;
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
margin-bottom: 30px;
`



const deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('deleteAllBtn')
deleteAllBtn.innerHTML = 'Delete All';
deleteAllBtn.style.cssText = `
width: 115px;
height: 50px;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);border: solid 2px;
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
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);border: solid 2px;
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
background:#0576ff;background:-moz-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-webkit-gradient(left bottom,right top,color-stop(0,#0576ff),color-stop(100%,#24f8ff));background:-webkit-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-o-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-ms-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:linear-gradient(45deg,#0576ff 0,#24f8ff 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0576ff',endColorstr='#24f8ff',GradientType=1)}

border: solid 2px black;
border-radius: 10px;
color: black;
cursor: pointer;
`
//actions

const actionsContainer = document.createElement('div');
actionsContainer.classList.add('actions');
actionsContainer.style.cssText = `
display: flex;
justify-content: space-around;
align-items: center;
padding: 0px 15px;
`

const allTasks = document.createElement('div');
allTasks.classList.add('allTasks');
allTasks.innerHTML = 'All: 3';
allTasks.style.cssText = `
color: #696969;
font-weight: 600;
`
const completedTasks = document.createElement('div');
completedTasks.classList.add('completedTasks');
completedTasks.innerHTML = 'Completed: 0';
completedTasks.style.cssText = `
color: #696969;
font-weight: 600;
`


const showAllBtn = document.createElement('button');
showAllBtn.classList.add('showAllBtn')
showAllBtn.innerHTML = 'Show All';
showAllBtn.style.cssText = `
width: 170px;
height: 50px;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);border: solid 2px;

border: solid 2px black;
border-radius: 10px;
color: black;
cursor: pointer;
`
const showCompletedBtn = document.createElement('button');
showCompletedBtn.classList.add('showCompletedBtn')
showCompletedBtn.innerHTML = 'Show Completed';
showCompletedBtn.style.cssText = `
width: 170px;
height: 50px;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);border: solid 2px;
border: solid 2px black;
border-radius: 10px;
color: black;
cursor: pointer;
`

const searchInput = document.createElement('input');
searchInput.classList.add('searchInput');
searchInput.placeholder = 'Search...';
searchInput.style.cssText = `
width: 180px;
height: 45px;
border: solid 2px black;
border-radius: 10px;
text-align: center;
`

//tasks


//appends

root.append(header);
header.append(headerContainer, actionsContainer)
headerContainer.append(deleteAllBtn, deleteLastBtn, enterInput, addBtn, );
actionsContainer.append(allTasks, completedTasks, showAllBtn, showCompletedBtn, searchInput)

//logics
    addBtn.addEventListener('click', () => {
    const containerTasks = document.createElement('div');
    containerTasks.classList.add('containerTasks');
    containerTasks.style.cssText = `
    max-width: 700px;
    margin: 0 auto;
    `
    const valueInput = enterInput.value;
 if (valueInput){
    const task = document.createElement('div');
    task.classList.add('task');
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
    
    
    const checkboxBtn = document.createElement('input');
    checkboxBtn.classList.add('checkboxBtn')
    checkboxBtn.type = 'checkbox';
    checkboxBtn.style.cssText = `
    width: 50px;
    height: 45px;
    cursor: pointer;
    `;
checkboxBtn.addEventListener('click', () => {

    if (checkboxBtn.checked) {
        task.style.textDecoration = 'line-through';
        task.style.backgroundColor = '#2F4F4F'
    } else {
        task.style.textDecoration = 'none';
        task.style.backgroundColor = '#D3D3D3'
        
    }
});
    

    const inputTask = document.createElement('div');
    inputTask.classList.add('inputTask');
    inputTask.innerText = valueInput;
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
    background:#ea6e48;
    background:-moz-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-webkit-gradient(left bottom,right top,color-stop(0,#ea6e48),color-stop(100%,#bc1a63));background:-webkit-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-o-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:-ms-linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);background:linear-gradient(45deg,#ea6e48 0,#bc1a63 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ea6e48',endColorstr='#bc1a63',GradientType=1)}
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
        
        task.remove();

    })
    
    const date = document.createElement('div');
    const newDate = new Date();
    date.classList.add('date');
    date.innerHTML = `${newDate.getHours()}: ${newDate.getMinutes()}: ${newDate.getSeconds()}`;
    date.style.cssText = `
    width: 65px;
    height: 22px;
    background-color: #fff;
    border-radius: 6px;
    text-align: center;
    color: #696969;
    `
    root.append(containerTasks);
    containerTasks.append(task);
    task.append(checkboxBtn, inputTask, bubble);
    bubble.append(exitBtn, date);
    
 }

 enterInput.value = '';

    deleteAllBtn.addEventListener('click', () => {
        containerTasks.remove();
    })
    

}); 
deleteLastBtn.addEventListener('click', () => {
    if (containerTasks.lastChild) {
        containerTasks.remove(containerTasks.lastChild);
    }

})




