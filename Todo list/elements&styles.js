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




const header = document.createElement('header');
header.classList.add('header');
header.style.cssText = `
  margin-bottom: 40px;
`

const headerContainer = document.createElement('div');
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
  background:#0576ff;background:-moz-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-webkit-gradient(left bottom,right top,color-stop(0,#0576ff),color-stop(100%,#24f8ff));background:-webkit-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-o-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:-ms-linear-gradient(45deg,#0576ff 0,#24f8ff 100%);background:linear-gradient(45deg,#0576ff 0,#24f8ff 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0576ff',endColorstr='#24f8ff',GradientType=1)};
  border: solid 2px black;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`



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

export { root, header, headerContainer, deleteAllBtn, deleteLastBtn, enterInput, addBtn,
  actionsContainer, allTasks, completedTasks, showAllBtn, showCompletedBtn, searchInput};
