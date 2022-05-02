'use strict';

//1

let string = 'true';
let boolean = false;
let num = 17;
let under = undefined;
let nul = null;
console.log(typeof(string), typeof(boolean), typeof(num), typeof(under), typeof(nul));


//2 использовал математические функции

let height = 15;
let width = 20;
//1 способ
let max = Math.max(height, width);
console.log(max);
//2 способ
if (width > height) {
    console.log(width);
} else{
    console.log(height);
}

//3
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

//4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = (key && documents && pen) && (apple || orange);
console.log(shouldGoToWork);

//5
let userNumber = prompt('Введите число');
if ((userNumber % 5 == 0) && (userNumber % 3 == 0)) {
    alert('FizBuz');
} else if (userNumber % 3 == 0) {
    alert('Buz');
} else if (userNumber % 5 == 0) {
    alert('Fiz');
}


//6
let age = prompt(`Сколько тебе лет?`);
if (age > 18) {
    alert('Попей пивка');
} else if (age < 16) {
    alert('Пей колу');
} else if (age = 16 && age <= 18) {
    alert('Можешь выкурить сигаретку, только маме не говори');
}

//7
let country = prompt('В какую сторону света Вы бы хотели отправиться?');
switch (сountry) {
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default:
        console.log('Выбери другое место отдыха!');
}

//ADVANCED level

//#### Task 1 👨‍🏫
//С этим заданием не справился


//#### Task 2 👨‍🏫

let ourNumber = prompt('Введите любое число');
let numMinus = prompt('Сколько отнять?');
let numSum = prompt('Сколько прибавить?');
let numMult = prompt('На какое число умножить?');
let numDivide = prompt('На какое число разделить?');
let numResult = (((+ourNumber - +numMinus) + +numSum) * +numMult) / +numDivide;
alert(`((((${ourNumber} - ${numMinus}) + ${numSum}) * ${numMult}) / ${numDivide} = ${numResult})`);
console.log(numResult);

//#### Task 3 👨‍🏫

let str = "#";
while (str.length <= 6) {
    console.log(str);
    str += "#";
}

