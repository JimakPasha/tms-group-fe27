'use strict'

// task 1

let a = 'true';
let b = false;
let c = 17;
let e = undefined;
let f = null;

console.log(typeof a, typeof b, typeof c, typeof e, typeof f);

// task 2

let height = 15
let width = 20

if (height > width) {
    console.log(height);
} else { 
    console.log(width);
}

// task 3

for (let task3 = 1; task3 <= 20; task3++) {
    if (task3 % 3 == 0) {
        console.log(task3);
    }
}

// task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = (key && documents && pen) && (apple || orange);
if (shouldGoToWork == false) {
    console.log('Взяли всё необходимое');
} else {
    console.log('Мы что-то забыли');
}

// task 5

let userNumber = prompt('Введите число');
if ((userNumber % 5 == 0) && (userNumber % 3 == 0)) {
    alert('FizBuz');
} else if (userNumber % 3 == 0) {
    alert('Buz');
} else if (userNumber % 5 == 0) {
    alert('Fiz');
}

// task 6

let age = prompt(`Введите ваш возраст:`);
if (age > 18) {
    alert('Попей пивка');
} else if (age < 16) {
    alert('Пей колу');
} else if (age = 16 && age <= 18) {
    alert('Можешь выкурить сигаретку, только маме не говори');
}

// task 7

let route = prompt('В какую сторону света вы хотели бы отправиться ?');
switch (route) {
    case 'Север':
        console.log('На Север пойдешь - много денег найдешь');
        break;
    case 'Юг':
        console.log('На Юг пойдешь - счастье найдешь');
        break;
    case 'Запад':
        console.log('На Запад пойдешь - верного друга найдешь');
        break;
    case 'Восток':
        console.log('На Восток пойдешь - разработчиком станешь');
        break;
    default: 
        console.log('Такого пути нет. Попробуйте ещё раз !');
    }