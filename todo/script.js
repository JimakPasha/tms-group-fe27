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
    color: grey;
    border: 2px solid black;
    border-radius: 22px;
`;

const formText = `
    width: 430px;
    height: 75px;
    border: 2px solid;
    border-radius: 20px;
    font-size: 17px;
    text-align: center;
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

//formFirst
const formFirst = document.createElement('div');
formFirst.classList.add('formFirst');
formFirst.style.cssText = form;

const formBtn1 = document.createElement('button');
formBtn1.classList.add('formBtn');
formBtn1.innerHTML = '&#10004;';
formBtn1.style.cssText = formBtn ;

const formFirstText = document.createElement('input');
formFirstText.classList.add('formText');
formFirstText.placeholder = 'Todo text';
formFirstText.style.cssText = formText;

const formRight  = document.createElement ('div');
formRight.classList.add('formRight');
formRight.style.cssText = formRighStyle;


const formBtnClouse = document.createElement('button');
formBtnClouse.classList.add('btnClouse');
formBtnClouse.innerHTML = '	&#10006;';
formBtnClouse.style.cssText = formBtn;

const formDate = document.createElement ('input');
formDate.classList.add('formDate');
formDate.placeholder = 'Data';
formDate.style.cssText = `
    width: 80px;
    height: 36px;
    border-radius: 20px;
    border: 2px solid;
    font-size: 17px;
    text-align: center;
`;





//formTwo
const formTwo = document.createElement('div');
formTwo.classList.add('formTwo');
formTwo.style.cssText = form;

const formBtn2 = document.createElement('button');
formBtn2.classList.add('formBtn');
formBtn2.innerHTML = '&#10004;';
formBtn2.style.cssText = formBtn ;

const formTwoText = document.createElement('input');
formTwoText.classList.add('formText');
formTwoText.placeholder = 'Todo text';
formTwoText.style.cssText = formText;

const formRight2  = document.createElement ('div');
formRight2.classList.add('formRight');
formRight2.style.cssText = formRighStyle;


const formBtnClouse2 = document.createElement('button');
formBtnClouse.classList.add('btnClouse');
formBtnClouse2.innerHTML = '	&#10006;';
formBtnClouse2.style.cssText = formBtn;

const formDate2 = document.createElement ('input');
formDate2.classList.add('formDate');
formDate2.placeholder = 'Data';
formDate2.style.cssText = `
    width: 80px;
    height: 36px;
    border-radius: 20px;
    border: 2px solid;
    font-size: 17px;
    text-align: center;
`;




// appends elements
root.append(header,container);
header.append(title);
container.append(lineInput, searchInput, formFirst, formTwo);
lineInput.append(lineInputDelAll, lineInputDelLast, myPlans, lineInputAdd);
searchInput.append(searchInputAll, searchInputCompleted,searchInputBtnAll, searchInputBtnCompleted, searchInputSearch );
formFirst.append(formBtn1, formFirstText, formRight);
formRight.append(formBtnClouse, formDate);
formTwo.append(formBtn2, formTwoText,formRight2);
formRight2.append(formBtnClouse2, formDate2);


// Как обращаться к классом ?
//Как использовать hover в js?
// стр. 174 и 192 одинаковые кнопки, можно ли не создавать заново, а просто добавить? 
//Как это корректно сделать?(formBtn1-formBtn2)
//



