"use strict";

const root = document.querySelector("#root");// точка входа

// wrapper обёртка сайта*****************************************************************************************

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


// container контейнер программы*********************************************************************************

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
`;

container.style.padding = "20px 20px 0";


// header**********************************************************************************************************

const header = document.createElement("div");
container.append(header);
header.classList.add("header");

const buttonAll = document.createElement("button"),
   buttonLast = document.createElement("button"),
   inputEnter = document.createElement("input"),
   buttonAdd = document.createElement("button");

buttonAll.classList.add("duplicateBtn");
buttonLast.classList.add("duplicateBtn");
inputEnter.classList.add("duplicateInput");
buttonAdd.classList.add("duplicateBtn");

header.append(buttonAll, buttonLast, inputEnter, buttonAdd);

header.style.cssText = `
   display: grid;
   grid-template-columns: 1fr 1fr 3fr 1fr;
   column-gap: 20px;
   padding-bottom: 20px;
`;

inputEnter.placeholder = "Enter todo …";
buttonAll.innerText = "Delete All";
buttonLast.innerText = "Delete Last";
buttonAdd.innerHTML = "Add";

// события header****************************************************************************************************************************

// создание блока с информацией и действия в нем-------------------------

buttonAdd.addEventListener("click", () => {

   const valueInput = inputEnter.value;
   //console.log(valueInput);


   if (valueInput) {

      const notesItem = document.createElement("div");
      notes.append(notesItem);
      notesItem.classList.add("notesItem");

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

      const inputMark = document.createElement("input"),
         notesText = document.createElement("div"),
         notesDelDate = document.createElement("div");

      notesItem.append(inputMark, notesText, notesDelDate);

      inputMark.type = "checkbox";
      inputMark.style.cssText = `
         outline: none;
         cursor: pointer;
         zoom: 3.5;
      `;


      // блок labelMark---------------------------------

      inputMark.classList.add("inputMark");
      notesText.classList.add("notesText");
      notesDelDate.classList.add("notesDelDate");


      // блок notesText------------------------
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

      notesText.innerText = valueInput;// текст для notesText

      // блок notesDelDate---------------------
      notesDelDate.style.cssText = `
         display: flex;
         flex-direction: column;
         align-items: end;
      `;

      const notesDel = document.createElement("button"),
         notesDate = document.createElement("div");

      notesDelDate.append(notesDel, notesDate);
      notesDel.classList.add("notesDel");
      notesDate.classList.add("notesDate");

      notesDel.style.cssText = `
         width: 40px;
         height: 40px;
         border-radius: 10px;
         border: 3px solid grey;
         background-color: white;
         cursor: pointer;
      `;

      notesDel.innerText = "X";

      notesDate.style.cssText = `
         width: 85px;
         height: 30px;
         margin-top: 30px;
         border-radius: 10px;
         border: 3px solid grey;
         background-color: white;
         display: flex;
         flex-direction: column;
         justify-content: center;
         text-align: center;
      `;

      const data = new Date();
      notesDate.innerText = `${data.getUTCDate()}.${data.getMonth() + 1}.${data.getFullYear()}`;// текст для notesDate 

      // действия в notesItem---------------------------------

      notesDel.addEventListener("click", () => {
         notesItem.remove();
      });

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
      });

      inputEnter.value = ""; // обнуляем поле inputEnter в конце условия
   }
});

// действия с кнопками в header---------------------------------------

buttonAll.addEventListener("click", () => {
   notes.innerHTML = '';
});

buttonLast.addEventListener("click", () => {
   if (notes.lastChild) {
      notes.removeChild(notes.lastChild);
   }
});


//show********************************************************************************************************************

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

// блок с текстом-------------------------------------------------
const showQuantity = document.createElement("div");
show.append(showQuantity);
showQuantity.classList.add("showQuantity");

showQuantity.style.cssText = `
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

const allP = document.createElement("h4");
const completedP = document.createElement("h4");
showQuantity.append(allP, completedP);

allP.style.margin = "0";
completedP.style.margin = "0";

allP.classList.add("allP");
completedP.classList.add("completedP");

allP.innerText = "All: 2";
completedP.innerText = "Completed: 1";

// остальные buttons and input для блока show------------------------
const buttonShowAll = document.createElement("button"),
   buttonShowCompleted = document.createElement("button"),
   inputSearch = document.createElement("input");

buttonShowAll.classList.add("duplicateBtn");
buttonShowCompleted.classList.add("duplicateBtn");
inputSearch.classList.add("duplicateInput");

show.append(buttonShowAll, buttonShowCompleted, inputSearch);

inputSearch.placeholder = "Search";
buttonShowAll.innerText = "Show All";
buttonShowCompleted.innerText = "Show Completed";

// section notes*************************************************************************************************************************************************

const notes = document.createElement("section");
container.append(notes);
notes.classList.add("notes");

notes.style.cssText = `
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`;


// стили buttons и input***************************************************************************************************************************************

const styleBlock = `
   font-family: "Open Sans";
   font-weight: 400;
   font-size: 14px;
   border-radius: 10px;
   border: 2px solid black;
`;

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
















