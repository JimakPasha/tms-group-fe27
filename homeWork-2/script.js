//task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

//task 2
const secondInMinute = 60;
const minuteInHour = 60;
const hourInDay = 24;
const dayInYear = 365;
let myAge = 29;
let myAgeInSeconds = myAge * dayInYear * hourInDay * minuteInHour * secondInMinute;
console.log(myAgeInSeconds);

//task 3
let count = 42;
let userName = '42';

console.log(typeof(String(count)));
console.log(typeof(count.toString()));
console.log(typeof(+userName));
console.log(typeof(Number(userName)));

//task 4
let a = 1;
let b = 2;
let c = 'белых медведей';
console.log(`${String(a)}${String(b)} ${c}`);

//task 5
let word1 = 'доступ';
let word2 = 'морпех';
let word3 = 'наледь';
let word4 = 'попрек';
let word5 = 'рубило';
let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
console.log(lengthWords);

//task 6
let age = 29;
let myName = 'Sasha';
let logic = true;
console.log(`Variable: ${age} have type: ${typeof(age)}`);
console.log(`Variable: ${myName} have type: ${typeof(myName)}`);
console.log(`Variable: ${logic} have type: ${typeof(logic)}`);

//task 7
const userName1 = prompt('Как вас зовут?', '');
alert(`Привет ${userName1}!`)
const userAge = prompt(`Сколько вам лет ${userName1}?`);

//task 8
let a1 = 4;
let b1 = 3;
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log(a1, b1);

//task 9
let codeWord1 = 'обернись';
let codeWord2 = 'неужели';
let codeWord3 = 'огурцы';
let codeWord4 = 'липкие';
let codeWord5 = '?!';
let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
console.log(cipher);