'use strict'
//task 1
let string = 'true';
let boolean = false;
let num = 17;
let nothing = undefined;
let zero = null;
console.log(typeof(string), typeof(boolean), typeof(num), typeof(nothing), typeof(zero));

//task 2
let height = 15;
let width = 20;
if (height > width) {
    console.log(height);
} else if (height < width) {
    console.log(width);
}

//task 3
let a = 1;
for (; a <= 20; ++a) {
    if (a % 3 == 0) {
        console.log(a);
    }
}

//task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = (key && documents && pen) && (apple || orange);
if (shouldGoToWork) {
    console.log('Супер, вы всё взяли!');
} else {
    console.log('Кажется что-то забыли');
}

//task 5
let number = prompt('Введите любое число', '');
if ((number % 3 == 0) && (number % 5 == 0)) {
    alert('FizBuz');
} else if (number % 5 == 0) {
    alert('Fiz');
} else if (number % 3 == 0) {
    alert('Buz');
}

//task 6
let userAge = prompt('Сколько вам лет?', '');
if ((userAge >= 16) && (userAge <= 18)) {
    alert('Можешь выкурить сигаретку, только маме не говори');
} 
if (userAge > 18) {
    alert('Попей пивка');
} else {
    alert('Пей колу');
}

//task 7
let sideOfTheWorld = prompt('В какую сторону света вы хотите отправиться?', '');
switch (sideOfTheWorld) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        alert('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert('попробуйте ещё раз');
}
//ADVANCED
//task 1
//task 2
let anyNumber = prompt('Введите число', '');
let subtraction = prompt('Сколько хотите отнять?', '');
let addition = prompt( 'Сколько хотите прибавить?', '');
let multiplication = prompt('На сколько умножить?', '');
let segmentation = prompt('На сколько разделить?', '');
alert((((+anyNumber - +subtraction) + +addition) * multiplication) / segmentation);

//task 3
let stairs = '#';
for (; stairs.length < 7; stairs += '#') {
    console.log(stairs);
}

