"use strict";

/************************************************************************************************************************************************************************
1) пометки оставлял себе, что бы проще ориенироваться мне было)))

2) не понимаю как на JS это написать, хотел скрыть и заменить на  "✓" (строчки с этим input на 182)

input[type=checkbox] {
   display: none;
}

input:checked + label:before{
   content: "✓";
}

3) не могу понять как изменить цвет (background-color) только в одном блоке Todo text (эти блоки в цикле - строчки на 158)
*******************************************************************/

const root = document.querySelector("#root");// точка входа


// wrapper обёртка сайта*****************************************************************************************

const wrapper = document.createElement("div");// создали div (wrapper)
root.append(wrapper);// добавили div (wrapper) в html
wrapper.classList.add("wrapper");// создали class

wrapper.style.cssText = `
   width: 800px;
   min-height: 160px;
   margin: 50px auto 0;
   border: 4px solid black;
   border-radius: 20px;
   background-color: rgb(213, 205, 205);
`;// стили для wrapper


// container контейнер программы*********************************************************************************

const container = document.createElement("div");// создали div (container)
wrapper.append(container);// добавили  div (container) в div (wrapper)
container.classList.add("container");// создали class


container.style.cssText = `
   font-family: "Open Sans";
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 150%;
   color: #151519;
`;// стили для container

container.style.padding = "20px 20px 0";// стили для container


// header**********************************************************************************************************

const header = document.createElement("div");// создали div (header) для div (container)
container.append(header);// добавили div (header) в div (container)
header.classList.add("header");// создали class

const buttonAll = document.createElement("button"),
   buttonLast = document.createElement("button"),
   inputEnter = document.createElement("input"),
   buttonAdd = document.createElement("button");// создали buttons и input в header

buttonAll.classList.add("duplicateBtn");
buttonLast.classList.add("duplicateBtn");
inputEnter.classList.add("duplicateInput");
buttonAdd.classList.add("duplicateBtn");// создали class для buttons и input

header.append(buttonAll, buttonLast, inputEnter, buttonAdd);// добавили buttons и input в header

header.style.cssText = `
   display: grid;
   grid-template-columns: 1fr 1fr 3fr 1fr;
   column-gap: 20px;
   padding-bottom: 20px;
`;// стили для header

inputEnter.placeholder = "Enter todo …";// добавили placeholder
buttonAll.innerText = "Delete All";
buttonLast.innerText = "Delete Last";
buttonAdd.innerHTML = "Add";// добавили текст для кнопок


//show********************************************************************************************************************

const show = document.createElement("div");// создали div (show) для div (container)
container.append(show);// добавили div (show) в div (container)
show.classList.add("show");// создали class

show.style.cssText = `
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   column-gap: 25px;
   align-items: center;
   padding-bottom: 30px;
`;// стили для show

// блок с текстом
const showQuantity = document.createElement("div");// добавили div (showQuantity) для div (show)
show.append(showQuantity);// добавили div (showQuantity) в div (show)
showQuantity.classList.add("showQuantity");// создали class

showQuantity.style.cssText = `
   display: flex;
   justify-content: space-around;
   align-items: center;
`;// стили для showQuantity

const allP = document.createElement("h4");
const completedP = document.createElement("h4");
showQuantity.append(allP, completedP);

allP.style.margin = "0";
completedP.style.margin = "0";

allP.classList.add("allP");
completedP.classList.add("completedP");

allP.innerText = "All: 2";
completedP.innerText = "Completed: 1";

// остальные buttons and input для блока show
const buttonShowAll = document.createElement("button"),
   buttonShowCompleted = document.createElement("button"),
   inputSearch = document.createElement("input");// создали buttons и input для header

buttonShowAll.classList.add("duplicateBtn");
buttonShowCompleted.classList.add("duplicateBtn");
inputSearch.classList.add("duplicateInput");// создали class для buttons и input

show.append(buttonShowAll, buttonShowCompleted, inputSearch);// добавили buttons и input в header

inputSearch.placeholder = "Search";// добавили placeholder
buttonShowAll.innerText = "Show All";
buttonShowCompleted.innerText = "Show Completed";// добавили текст для кнопок

// section notes*************************************************************************************************************************************************

const notes = document.createElement("section");// создали section (notes) для div (container)
container.append(notes);// добавили section (notes) в div (container)
notes.classList.add("notes");// создали class

notes.style.cssText = `
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`;// стили для notes

//цикл для notesItem**********************************************************************************************************************************************

const arrList = ["Todo text 1", "Todo text 2", "Todo text 3",];

for (let i = 0; i < arrList.length; i++) {
   const notesItem = document.createElement("div");// создали div (notesItem) для section (notes)
   notes.append(notesItem);// добавили div (notesItem) в section (notes)
   notesItem.classList.add("notesItem");// создали class

   notesItem.style.cssText = `
   width: 550px;
   height: 120px;
   border-radius: 20px;
   border: 2px solid black;
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background-color: rgb(193, 186, 186);
   `;// стили для notesItem

   const inputMark = document.createElement("input"),
      labelMark = document.createElement("label"),
      notesText = document.createElement("div"),
      notesDelDate = document.createElement("div");// создали элементы для notesItem

   notesItem.append(labelMark, notesText, notesDelDate);// добавили элементы для notesItem

   inputMark.type = "checkbox";// сделали checkbox из inputMark
   labelMark.append(inputMark);// добавили inputMark в labelMar

   // блок labelMark
   inputMark.classList.add("inputMark");
   labelMark.classList.add("labelMark");
   notesText.classList.add("notesText");
   notesDelDate.classList.add("notesDelDate");// создали class

   labelMark.style.cssText = `
      width: 45px;
      height: 30px;
      border-radius: 5px;
      border: 2px solid black;
      background-color: aqua;
      cursor: pointer;
   `;// стили labelMark

   // блок notesText
   notesText.style.cssText = `
      width: 380px;
      height: 60px;
      border-radius: 5px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
   `;// стили notesText

   notesText.innerText = arrList[i];// текст для notesText, берем из цикла

   // блок notesDelDate
   notesDelDate.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: end;
   `;// стили notesDelDate

   const notesDel = document.createElement("button"),
      notesDate = document.createElement("div");// создали элементы для notesDelDate

   notesDelDate.append(notesDel, notesDate);// добавили элементы в notesDelDate
   notesDel.classList.add("notesDel");
   notesDate.classList.add("notesDate");// создали class

   notesDel.style.cssText = `
      width: 45px;
      height: 30px;
      border-radius: 5px;
      border: 2px solid black;
      background-color: aqua;
      cursor: pointer;
   `;// стили notesDel

   notesDel.innerText = "X";// текст для notesDel

   notesDate.style.cssText = `
      width: 80px;
      height: 30px;
      margin-top: 30px;
      border-radius: 5px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
   `;// стили notesDate

   notesDate.innerText = "Date";// текст для notesDate
}


// стили buttons и input***************************************************************************************************************************************

const styleBlock = `
   font-family: "Open Sans";
   font-weight: 400;
   font-size: 14px;
   border-radius: 10px;
   border: 2px solid black;
`;// одинаковые стили

let btns = document.querySelectorAll(".duplicateBtn");// class "duplicateBtn" у которого одинаковый свойства

for (var i = 0; i < btns.length; i++) {
   btns[i].style.cssText = styleBlock + `
   height: 40px;
   background-color:aquamarine;
   cursor: pointer;
   `;
}// стили для class "duplicateBtn"

let inputs = document.querySelectorAll(".duplicateInput");// class "duplicateBtn" у которого одинаковый свойства

for (var i = 0; i < inputs.length; i++) {
   inputs[i].style.cssText = styleBlock + `
   height: 34px;
   display: block;
   text-align: center;
   outline:none;
   `;
}// стили для class "duplicateInput"


