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


//3
let count = 42
let userName = '42'

let num = Number(userName);
console.log(typeof num);

let str = String(count);
console.log(typeof str);

//4
let a = 1
let b = 2
let c = "белых медведей"

let st = String(a);
console.log(typeof st);

console.log(st + b + ' ' + c);

//5
let array = ['доступ', 'морпех', 'наледь', 'попрек', 'рубило'];
console.log(array.length);

let q = 'доступ';
let d = 'морпех';
let f = 'наледь';
let g = 'попрек';
let h = 'рубило';

console.log(q.length + d.length + f.length + g.length + h.length);
//6

let p = 1;
let r = '1'
let u = false;

console.log(typeof (u));
console.log(typeof (p));
console.log(typeof (r));


//7
const username = prompt("Укажите своё имя:");
const age = prompt("Укажите свой возраст:");

alert(username + ' ' + age);

//8
let a1 = 4;
let b1 = 3;

a1 = a1 + b1;//7
b1 = a1 - b1;//4
a1 = a1 - b1;//3

console.log(a1, b1);