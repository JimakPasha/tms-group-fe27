'use strict';
// Task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);
// Task 2
const colSecInMin = 60;
const colMinInHour = 60;
const colHourInDay = 24;
const colDayInYear = 365;
const colSecInYear = (colSecInMin*colMinInHour*colHourInDay*colDayInYear);
const myAgeInYears = 34;
const myAgeInSeconds = (myAgeInYears*colSecInYear);
// Task 3
let count = 42;
let userName = '42';
let stringCount = (String(count));
console.log(stringCount);
let stringCount2 = (count.toString());
let numberUserName = (Number(userName));
let numberUserName2 = (+userName);
// Task 4
let a = 1;
let b = 2;
let c = 'белых медведей';
console.log(a.toString() + b.toString() + ' ' + c);
// Task 5
const word1 = 'доступ';
const word2 = 'морпех';
const word3 = 'наледь';
const word4 = 'попрек';
const word5 = 'рубило';
const lengthWords = (word1.length + word2.length + word3.length + word4.length + word5.length);
console.log(lengthWords);
// or
const lengthWords2 = ((`${word1}${word2}${word3}${word4}${word5}`).length);
console.log(lengthWords2);
// Task 6
const typeConst = 'typeConst have type: const';
let typeLet = 'typeLet have type: let';
var typeVar = 'typeVar have type: var';
console.log(`Variable: ${typeConst}`);
console.log(`Variable: ${typeLet}`);
console.log(`Variable: ${typeVar}`);
// Task 7
const yourName = prompt('Как тебя зовут?');
const yourAge = prompt('Сколько тебе лет?');
console.log(`Name: ${yourName}, Age: ${yourAge}.`);
// ADVANCED
// Task 1
let a1 = 4;
let b1 = 3;
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
// Task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = (`${codeWord1[1]}${codeWord2[1]}${codeWord3[1]}${codeWord4[1]}${codeWord5[1]}`);
console.log(cipher);