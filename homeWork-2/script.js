'use strict';
//1
let x = 20
let y = 58
let z = 42

console.log(x + y + z);

//2
const sec_in_min = 60;
const min_in_hour = 60;
const hour_in_day = 24;
const day_in_year = 365;

let myAgeInSeconds = (21 * day_in_year * hour_in_day * min_in_hour * sec_in_min);
console.log(myAgeInSeconds);


//3
let count = 42
let userName = '42'

let num = Number(userName);//1
console.log(typeof num);

console.log(+userName);//2
console.log(typeof (+userName));

let str = String(count);//1
console.log(typeof str);

console.log(count.toString());//2
console.log(typeof count.toString());


//4
let a = 1;
let b = 2;
let c = "белых медведей";

let st = String(a);
console.log(typeof st);

console.log(st + b + ' ' + c);

//5
let q = 'доступ';
let d = 'морпех';
let f = 'наледь';
let g = 'попрек';
let h = 'рубило';

console.log(q.length + d.length + f.length + g.length + h.length);

//6
let number = 1;
console.log('Variable:', number, 'have type:', typeof number);

let text = "text";
console.log('Variable:', text, 'have type:', typeof text);

let False = false;
console.log('Variable:', isTrue, 'have type:', typeof False);


//7
const username = prompt('Укажите своё имя:');
const age = prompt('Укажите свой возраст:');

alert(username + ' ' + age);

//8
let a1 = 4;
let b1 = 3;

a1 = a1 + b1;//7
b1 = a1 - b1;//4
a1 = a1 - b1;//3

console.log(a1, b1);

//9
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
console.log(cipher);