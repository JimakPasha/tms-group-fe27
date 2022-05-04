'use strict';
// Task 1 
let String = 'true';
let Boolean = false;
let Number = 17;
let Undefined = undefined;
let obj = null;
console.log(`Task 1`);
console.log( typeof(String), typeof(Boolean), typeof(Number), typeof(Undefined), typeof(obj) );
 
// Task 2
let height = 15;
let width = 20;
console.log(`Task 2`);
if (height > width) {
    console.log (height)
} else {console.log (width)}

// Task 3
console.log(`Task 3`);
for (let i = 1; i< 21; i++) {
    if ((i % 3) == 0){
    console.log (i); }
}

// Task 4
console.log(`Task 4`);
    let key = true;
    let documents = true;
    let pen = true;
    let apple = false;
    let orange = true;

    if (key && documents && pen || apple || orange == true){
    let shouldGoToWork = true;
    console.log(shouldGoToWork); 
} else {
    let shouldGoToWork = false;
    console.log(shouldGoToWork); 
}


// Task 5

let UserNumber = prompt("укажите число кратное 3, 5 или 15 ", 45);
if ((UserNumber % 5 && 3) == 0) {
    alert(`FizBuz`)
} else if ((UserNumber % 3) == 0) {
    alert(`Buz`)
} else if ((UserNumber % 5) == 0) {
    alert(`Fiz`)
}

// Task 6

let UserAge = prompt(`укажите ваш возраст`, 45);
if (UserAge > 18) {
    alert(`Попей пивка`)
} else if (16 >= UserAge <= 18) {
    alert(`Можешь выкурить сигаретку, только маме не говори`)
} else {
    alert(`Пей колу`)
}

// Task 7

let UserSide = prompt(`Напишите в какую сторону света хотели бы отправиться`, `юг`);
switch (UserSide) {
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
        alert('такой стороны света нет');
}
//ADVANCED level
// Task 8
let UserName = prompt("укажите name", 'пОлИнА нАбЕрЕжНаЯ');
let newUserName = UserName.toLowerCase();
alert(`Привет, ${newUserName.replace(/(^|\s)\S/gi, newUserName => newUserName.toUpperCase())}!`); 

// Task 9
let UserNumb = prompt("укажите число", 15);

let UserMinus = prompt("укажите сколько отнять от предыдущего результата?", 4);
let UserPlus =  + prompt("укажите сколько прибавить от предыдущего результата?", 4);
let UserMultiply = prompt("укажите на сколько умножить предыдущий результат?", 4);
let UserDivide = prompt("укажите на сколько разделить предыдущий результат?", 4);

alert ((UserNumb - UserMinus + UserPlus)* UserMultiply / UserDivide);

// Task 10
 let h = 0;
 let k = '#';
while ( h < 6) {
    console.log(k); 
    h++
    k = k +'#';
}