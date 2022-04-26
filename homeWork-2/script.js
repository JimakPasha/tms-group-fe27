"use strict";

// Task 1 

let x = 20,
   y = 58,
   z = 42;
console.log(x + y + z);

//Task 2

const oneMinute = 60,
   oneHour = 60,
   oneDay = 24,
   oneYear = 365;

let myAgeInSeconds = (34 * oneYear * oneDay * oneHour * oneMinute);
console.log(myAgeInSeconds);

//Task 3

let count = 42;

console.log(String(count));/*первый способ*/
console.log(typeof String(count));
console.log(count.toString());/*второй способ*/
console.log(typeof count.toString());

let userName = "42";

console.log(+userName);/*первый способ*/
console.log(typeof (+userName));
console.log(Number(userName));/*второй способ*/
console.log(typeof (Number(userName)));

//Task 4 

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(`${a}${b} ${c}`);

//Task 5

let lengthWords = {
   p: "доступ",
   o: "морпех",
   i: "наледь",
   u: "попрек",
   y: "рубило"
};

console.log(lengthWords.p.length + lengthWords.o.length + lengthWords.i.length + lengthWords.u.length + lengthWords.y.length)

//Task 6

const number = 1;
console.log("Variable:", number, "have type:", typeof number);

const text = "one"
console.log("Variable:", text, "have type:", typeof text);

const isTrue = true;
console.log("Variable:", isTrue, "have type:", typeof isTrue);

//Task 7 

const ask = prompt("Ваше имя?", ["ИМЯ"]);
alert(`Привет, ${ask}!!!`);
const age = prompt("Ваш возраст?", ["ЧИСЛО"]);
alert(age);

//Task 1.1

/*арифметически*/
let g = 4;
let h = 3;

g = g + h /*складываем числа =7*/
h = g - h /*говорим h, что оно = 4*/
g = g - h /*говорим g, что оно = 3*/

console.log(g)
console.log(h)

//Task 1.2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
console.log(cipher)