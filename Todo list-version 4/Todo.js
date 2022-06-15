

const root = document.querySelector("#root");


const wrapper = document.createElement("div");
root.append(wrapper);
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
   width: 800px;
   min-height: 160px;
   margin: 50px auto 0;
   border: 4px solid black;
   border-radius: 20px;
   background-color: rgb(213, 205, 205);
`;


const container = document.createElement("div");
wrapper.append(container);
container.classList.add("container");
container.style.cssText = `
   font-family: "Open Sans";
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 150%;
   color: #151519;
   padding: 20px 20px 0;
`;



const header = document.createElement("div");
container.append(header);
header.classList.add("header");
header.style.cssText = `
   display: grid;
   grid-template-columns: 1fr 1fr 3fr 1fr;
   column-gap: 20px;
   padding-bottom: 20px;
`;

const buttonAll = document.createElement("button");
buttonAll.classList.add("duplicateBtn");
buttonAll.innerText = "Delete All";

buttonAll.addEventListener("click", () => {
   notes.innerHTML = '';
});


const buttonLast = document.createElement("button");
buttonLast.classList.add("duplicateBtn");
buttonLast.innerText = "Delete Last";

buttonLast.addEventListener("click", () => {
   if (notes.lastChild) {
      notes.removeChild();
   }
});


const inputEnter = document.createElement("input");
inputEnter.classList.add("duplicateInput");
inputEnter.placeholder = "Enter todo …";

const buttonAdd = document.createElement("button");
buttonAdd.classList.add("duplicateBtn");
buttonAdd.innerHTML = "Add";

header.append(buttonAll, buttonLast, inputEnter, buttonAdd);



const show = document.createElement("div");
container.append(show);
show.classList.add("show");
show.style.cssText = `
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   column-gap: 25px;
   align-items: center;
   padding-bottom: 30px;
`;


const showQuantity = document.createElement("div");
show.append(showQuantity);
showQuantity.classList.add("showQuantity");
showQuantity.style.cssText = `
   display: flex;
   justify-content: space-around;
   align-items: center;
`;


const allP = document.createElement("h4");
allP.classList.add("allP");
allP.innerText = "All: 2";
allP.style.margin = "0";


const completedP = document.createElement("h4");
completedP.classList.add("completedP");
completedP.innerText = "Completed: 1";
completedP.style.margin = "0";

showQuantity.append(allP, completedP);



const buttonShowAll = document.createElement("button");
buttonShowAll.classList.add("duplicateBtn");
buttonShowAll.innerText = "Show All";

const buttonShowCompleted = document.createElement("button");
buttonShowCompleted.classList.add("duplicateBtn");
buttonShowCompleted.innerText = "Show Completed";

const inputSearch = document.createElement("input");
inputSearch.classList.add("duplicateInput");
inputSearch.placeholder = "Search";

show.append(buttonShowAll, buttonShowCompleted, inputSearch);



const notes = document.createElement("section");
notes.classList.add("notes");
container.append(notes);
notes.style.cssText = `
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`;



let todoArr = [];

if (localStorage.getItem('todo')) {
   todoArr = JSON.parse(localStorage.getItem('todo'));
   todoArr.forEach((item) => {
      createElement(item);
   });
}

buttonAdd.addEventListener('click', () => {

   const valueInput = inputEnter.value;

   if (valueInput) {
      const newObj = {};
      newObj.id = generateId();
      newObj.date = generateDate();
      newObj.text = valueInput;
      newObj.isChecked = false;
      todoArr.push(newObj);
      createElement(newObj);
      updateLocalStorageTodo(todoArr);
   }

   inputEnter.value = '';
});



buttonAll.addEventListener('click', () => {
   todoArr.length = 0;
   updateLocalStorageTodo(todoArr);
   notes.innerHTML = '';
});

buttonLast.addEventListener('click', () => {
   if (notes.lastChild) {
      todoArr.pop();
      updateLocalStorageTodo(todoArr);
      notes.removeChild(notes.lastChild);
   }
});



function createElement({ id, isChecked, text, date }) {
   const notesItem = document.createElement("div");

   notesItem.classList.add("item");
   notesItem.id = id;
   notes.append(notesItem);
   notesItem.style.cssText = `
      width: 570px;
      height: 120px;
      border-radius: 20px;
      border: 2px solid black;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #9e9e9e;
   `;

   const inputMark = document.createElement("input");
   inputMark.type = "checkbox";
   inputMark.checked = isChecked;
   inputMark.classList.add("inputMark");
   inputMark.style.cssText = `
      outline: none;
      cursor: pointer;
      zoom: 3.5;
   `;

   const notesText = document.createElement("div");
   notesText.classList.add("notesText");
   notesText.innerText = text;// текст для notesText
   notesText.style.cssText = `
      width: 380px;
      height: 60px;
      border-radius: 10px;
      border: 3px solid grey;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
   `;

   const notesDelDate = document.createElement("div");
   notesDelDate.classList.add("notesDelDate");
   notesDelDate.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: end;
   `;

   notesItem.append(inputMark, notesText, notesDelDate);


   const notesDel = document.createElement("button");
   notesDel.classList.add("notesDel");
   notesDel.innerText = "X";
   notesDel.style.cssText = `
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 3px solid grey;
      background-color: white;
      cursor: pointer;
   `;

   const notesDate = document.createElement("div");
   notesDate.classList.add("notesDate");
   notesDate.innerText = date;
   notesDate.style.cssText = `
      width: 85px;
      height:50px;
      margin-top: 10px;
      border-radius: 10px;
      border: 3px solid grey;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
   `;

   notesDelDate.append(notesDel, notesDate);



   notesDel.addEventListener("click", () => {
      notesItem.remove();
   });

   if (inputMark.checked) {
      notesText.style.textDecoration = "line-through";
      notesItem.style.backgroundColor = "rgb(201 192 192)";
      notesDate.style.textDecoration = "line-through";
   }

   inputMark.addEventListener("click", () => {
      if (inputMark.checked) {
         notesText.style.textDecoration = "line-through";
         notesItem.style.backgroundColor = "rgb(201 192 192)";
         notesDate.style.textDecoration = "line-through";
      } else {
         notesText.style.textDecoration = "none";
         notesItem.style.backgroundColor = "#9e9e9e";
         notesDate.style.textDecoration = "none";
      }

      todoArr = todoArr.map((item) => {
         if (item.id === id) {
            item.isChecked = inputMark.checked;
         }
         return item;
      });

      updateLocalStorageTodo(todoArr);
   });

   notesDel.addEventListener('click', () => {
      todoArr = todoArr.filter((i) => i.id !== id);
      updateLocalStorageTodo(todoArr);
      notesItem.remove();
   });
}



let btns = document.querySelectorAll(".duplicateBtn");
for (var i = 0; i < btns.length; i++) {
   btns[i].style.cssText = styleBlock + `
   height: 40px;
   background-color:aquamarine;
   cursor: pointer;
   `;
}

let inputs = document.querySelectorAll(".duplicateInput");
for (var i = 0; i < inputs.length; i++) {
   inputs[i].style.cssText = styleBlock + `
   height: 34px;
   display: block;
   text-align: center;
   outline:none;
   `;
}



import { generateId, generateDate } from "./date+id.js";
import { styleBlock } from "./style.js";
import updateLocalStorageTodo from "./local.js";
