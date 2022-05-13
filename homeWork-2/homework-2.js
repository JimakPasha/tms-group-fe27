'use strict'
//? Task 1
// let x = 20;
// let y = 58; 
// let z = 42; 
// console.log (x + y + z);

//? Task 2
// const minSec = 60;
// const minHour = 60;
// const hourDay = 24;
// const dayYear = 365;
// let myAge = 23;
// console.log(`${myAge} year in second:` + myAge * dayYear * hourDay * minHour * minSec);

//? Task 3
// let count = 42;
// let userName = '42';
// console.log(typeof(String(count)));
// console.log(typeof(count.toString()));
// console.log(typeof(+userName));
// console.log(typeof(Number(userName)));

//? Task 4
// let a = 1;
// let b = 2;
// let c = 'белых медведей';
// console.log(`${a}${b} ${c}`);

//? Task 5
//!1
// let arrayAnyWords = ['доступ', 'морпех', 'наледь', 'попрек', 'рубило'];
// let wordsLength = arrayAnyWords.length;
// console.log(wordsLength);

//!2
// let access = 'доступ';
// let soldier = 'морпех';
// let ice = 'наледь';
// let across = 'поперек';
// let chopped = 'рубило';

// let lengthWords = access.length + soldier.length + ice.length + across.length + chopped.length;
// console.log(`Всего ${lengthWords} букв`);

//? Task 6
let num = 101;
let string = 'hello';
let boolean = false;
console.log(`Variable: ${num} have type: ${typeof(num)}`);
console.log(`Variable: ${string} have type: ${typeof(string)}`);
console.log(`Variable: ${boolean} have type: ${typeof(boolean)}`);

//? Task 7
// let age = prompt(`Сколько тебе лет?`);
// if (age < 18) {
//     alert('Тебе еще рано!');
// }else {
//     alert('Доступ разрешен')
// }

// let age = prompt(`Сколько тебе лет?`);
// alert(`Тебе: ${age} лет.`);

//! ADVANCED level
//? Task 1 👨‍🏫 
let a = 4;
let b = 3;
a = b; //3
console.log(`value-a: ${a}`); //3
a = 4;
b = a; // 4
console.log(`value-b: ${b}`); //4

//? Task 2 👨‍🏫 
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

console.log(`${codeWord1.substr(1, 1)}${codeWord2.substr(1, 1)}${codeWord3.substr(1, 1)}${codeWord4.substr(1, 1)}${codeWord5.substr(1, 1)}`);