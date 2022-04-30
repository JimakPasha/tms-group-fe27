
// Task1
let x = 20;
let y = 58;
let z = 42;
let f = (x + y + z);
console.log(f);

//Task2

let secondInMinute = 60;
let minuteInHour = 60;
let hourInDay = 24;
let dayInYear = 365;

let myAge = 28;
let myAgeInSeconds = 883008000;
console.log(myAge * dayInYear * hourInDay * minuteInHour * secondInMinute);

//Task3
let count = 42
let userName = '42'

console.log(String(count));
console.log(count + '');

console.log(+userName);
console.log(Number(userName));



//Task4
let a = 1;
let b = 2;
let c = "белых медведей";

console.log(a + '' + b + '' + ' ' + 'белых медведей');

//Task5

let one = 'доступ';
let two = 'морпех';
let three = 'наледь';
let four = 'попрек';
let five = 'рубило';
let lengthWords = (one + two + three + four + five);
console.log(lengthWords.length);

//Task6  ?????
const usName = 'Toni';
const number = 13;
const bool = true;

console.log(`Variable: ${usName} have type: ${typeof (usName)}`);
console.log(`Variable: ${number} have type: ${typeof (number)}`);
console.log(`Variable: ${bool} have type: ${typeof (bool)}`);

//Task7

const name1 = prompt('Как тебя зовут?');
console.log(`Привет, ${name1}!`);

const age = prompt('Сколько тебе лет?');
console.log(`Привет, ${age}!`);


//Task8

let a1 = 4;
let b1 = 3;
console.log(a1, b1);
[a1, b1] = [b1, a1];
console.log(a1, b1);

//Task9

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

