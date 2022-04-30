'use strict';
// Task 1
const str = 'true';
const bool = false;
const number = 17;
const undef = undefined;
const nl = null;
console.log(typeof(str),typeof(bool), typeof(number), typeof(undef), typeof(nl));
// Task 2
let height = 15;
let width = 20;
if (height >= width) {
    console.log(height);
} else {
    console.log(width);
}
// Task 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
// Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = (key && documents && pen) && (apple || orange);
if (shouldGoToWork == true) {
    console.log('Все взяли');
} else {
    console.log('Что-то забыли');
}
// Task 5
let userNumber = prompt('введите число');
if ((userNumber % 5 == 0) && (userNumber % 3 == 0)) {
    alert('FizBuz');
} else if (userNumber % 3 == 0) {
    alert('Buz');
} else if (userNumber % 5 == 0) {
    alert('Fiz');
}
// Task 6
let userAge = prompt('Введите Ваш возраст');
if ((userAge >= 16) && (userAge <= 18)) {
    alert('Можешь выкурить сигаретку, только маме не говори');
} else if (userAge > 18) {
    alert('Попей пивка');
} else if (userAge < 18) {
    alert('Пей колу');
}
// Task 7
let route = prompt('В какую сторону света Вы бы хотели отправиться?');
switch (route) {
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
        console.log('Попробуйте ещё раз!');
}

// Advanced
// Task 1 (Cделал для любых имени и фамилии)
let usInfo = 'пОлИнА нАбЕрЕжНаЯ';
let usInfoLowC= usInfo.toLowerCase().split(' ');
let usName = usInfoLowC[0].slice(0,1).toUpperCase() + usInfoLowC[0].slice(1);
let usLastName = usInfoLowC[1].slice(0,1).toUpperCase() + usInfoLowC[1].slice(1);
alert(`Привет, ${usName} ${usLastName}!`);
// Task 2
let usNumber = prompt('Введите любое число');
let numSub = prompt('Сколько отнять?');
let numSum = prompt('Сколько прибавить?');
let numMult = prompt('На какое число умножить?');
let numSplit = prompt('На какое число разделить?');
let numResult = (((+usNumber - +numSub) + +numSum) * +numMult) / +numSplit;
alert(`((((${usNumber} - ${numSub}) + ${numSum}) * ${numMult}) / ${numSplit} = ${numResult})`);
// Task 3
let ladder = '#';
while (ladder.length < 7) {
    console.log(ladder);
    ladder += '#';
}
// or
for (let lad = '#'; lad.length < 7; lad += '#') {
    console.log(lad);
}