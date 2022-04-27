'use strict'

// 1
let x = 20
let y = 58
let z = 42

console.log (x + y + z);

// 2
const sec = 60,
min = 60,
hour = 12,
day = 365;

let MyAgeInSeconds = (26 * sec * min * hour * day);

console.log (MyAgeInSeconds);

// 3
let count = 42
let userName = '42'

console.log (String(count));
console.log (typeof String(count));

console.log (count.toString());
console.log (typeof count.toString());

// userName
console.log (Number(userName));
console.log (typeof Number(userName));

console.log (+userName);
console.log (typeof (+userName));

// 4
let a = 1;
let b = 2;
let c = 'белых медведей'

a = String(a);

console.log (a + b + ' ' + c);

// 5
let word1 = 'доступ'; 
let word2 = 'морпех';
let word3 = 'наледь';
let word4 = 'попрек';
let word5 = 'рубило';
let letters = (word1 + word2 + word3 + word4 + word5);
console.log (letters.length);

// 6 - не понял ((
let textHolder = 'Stepan';
console.log (`Veriable: ${textHolder} have type: ${typeof textHolder}`);

let number = 123;
console.log (`Veriable: ${number} have type: ${typeof number}`);

let booleanText = true;
console.log (`Veriable: ${booleanText} have type: ${typeof booleanText}`);

// 7 
const username = prompt ('Ваше имя:');
const age = prompt ('Ваш возраст:');

alert (username + ' ' + age);

// adv1
let a1 = 4;
let b1 = 3;

a1 = b1 + a1;
b1 = a1 - b1;
a1 = a1 - b1; 

console.log (a1);
console.log (b1);

// adv2
const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";

let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
console.log (cipher);