//? Task1
// let str = 'true';
// let denial = false;
// let age = 17;
// let und = undefined;
// let empty = null;
// console.log(`Type: ${typeof(str)} value: ${str}`);
// console.log(`Type: ${typeof(denial)} value: ${denial}`);
// console.log(`Type: ${typeof(age)} value: ${age}`);
// console.log(`Type: ${typeof(und)} value: ${und}`);
// console.log(`Type: ${typeof(empty)} value: ${empty}`);

//? Task2
// let height = '15';
// let width = 20;
// if (width > height) {
//     //! доп защита 
//     // console.log(`Width bigger than height: value height ${typeof(+height)}`);
//     console.log(`Width bigger than height: value height ${+height}`);
// }else if (width === height) {
//     console.log(`Width and Height equals`);
// }else {
//     console.log(`Height bigger than width: value width ${+width}`);
// }

//? Task3 
// for (let i = 1; i < 20; i++) {
//     if(i % 3 === 0) {
//         console.log(i);
//     }     
// }

//? Task4
// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// function checkGoWork () {
//     if (key === true && documents === true) {
//         console.log(`ключи:${key} документы:${documents}`);
//     }else if (key === !true || documents === !true) {
//         console(`Проверь ты все взял! ключи, документы?`);
//     }if (apple === true || orange === true) {
//         console.log ('Молодец ты не забыл ПП');
//     }
// }
// let shouldGoToWork = checkGoWork();

//? Task5 
// function checkInputValue () {
//     if (inputNum % 3 === 0 && inputNum % 5 === 0) {
//         alert ('FizBuz');
//     }else if (inputNum % 5 === 0) {
//         alert('Fiz');
//     }else if (inputNum % 3 === 0) {
//         alert('Buz');
//     }
// }
// let inputNum = +prompt('Введите любой число от 0 до 100', [1]);
// checkInputValue();
// // switch (inputNum) {
// //     case inputNum % 5 === 0:
// //         console.log('Fiz');
// //         break;
// // }

//? Task6 
// function checkUserAge () {
//     if (userAge >= 12 && userAge <= 16) {
//         console.log('Можешь смотреть фильм 12+ и 16+')
//     }else if(userAge >= 18) {
//         console.log('Можешь смотреть фильмы с рецензии R');
//     }else if (userAge < 18) {
//         console.log('Тебе нельзя смотреть фильмы с рецензии R');
//     }
// }
// let userAge = +prompt ('Сколько тебе лет?');
// checkUserAge();

//? Task7 
// function whereHolidayPlace () {
//     switch (holidayPlace) {
//         case south:
//             console.log('на юг пойдешь счастье найдешь');
//             break;
//         case north: 
//             console.log('на север пойдешь много денег найдешь');
//             break;
//         case westSide: 
//             console.log('запад на запад пойдешь верного друга найдешь');
//             break; 
//         case eastSide:
//             console.log('восток на восток пойдешь разработчиком станешь');
//             break;
//         default: 
//             console.log ('Простите но таких мест я не знаю');    
//     }
// }
// let holidayPlace = prompt('Введите куда хотите отправиться', ['восток'] );
// const south = 'юг';
// const north = 'север';
// const westSide = 'запад';
// const eastSide = 'восток';
// whereHolidayPlace();

//! ADVANCED level
//Task 1 👨‍🏫 
//!1
// const name = 'flavio lorem'
// const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(nameCapitalized);

//!2
// let userName = prompt('Как вас зовут', 'пОлИнА нАбЕрЕжНаЯ');
// userName = userName.toLowerCase();
// const arr = userName.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// const str2 = arr.join(" ");
// console.log(`Привет ${str2}!`);

//Task 2 👨‍🏫 
// function numMath (num1, num2, num3, num4, num5) {
//     arguments[0] = num1;
//     arguments[1] = num2;
//     arguments[2] = num3;
//     arguments[3] = num4;
//     arguments[4] = num5;
//     console.log('Result: ' + ((((num1 - num2) + num3) * num4)) / num5);
//     console.log(`Formula: ((((${num1} - ${num2}) + ${num3}) * ${num4})) / ${num5}`);
// }
// let num1 = +prompt('Введите любой число num1', [6]);
// let num2 = +prompt('Введите любой число num2', [10]);
// let num3 = +prompt('Введите любой число num3', [5]);
// let num4 = +prompt('Введите любой число num4', [20]);
// let num5 = +prompt('Введите любой число num5', [2]);
// numMath(num1, num2, num3, num4, num5); 

//! Task 3  👨‍🏫
// let line = 6;
// let sym = '#';
// let str = ' ';
// for(let i = 0; i < line; i++) {
//     str += sym;
//     console.log(str);
// }