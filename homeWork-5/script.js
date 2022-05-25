'use strict'

// task 1

let user = {
    name: 'Stepan',
    age: 26,
};
delete user.name;
delete user.age;

// task 2

let pet = {
    name: 'Alise',
    color: 'orange',
};
console.log('name' in pet);

// task 3

let student = {
    name: 'John',
    age: 19,
    isHappy: true,
};
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

// task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зелёный',
        blue: 'синий',
    },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    slava: 664,
    alexandra: 199,
};

let sum = 0;
let employers = 0;

for (let key in salaries) {
    sum += salaries[key];
    employers++;
};
let averageSalary = sum / employers;
console.log(averageSalary);

// task 6

let login = prompt('Введите логин', '');
let password = prompt('Введите пароль', '');
let userData = {
    userLogin: login,
    userPassword: password,
    check: checkUser,
};

let checkLogin = prompt('Подтвердите логин', '');
let checkPassword = prompt('Подтвердите пароль', '');

function checkUser() {
    if (login === checkLogin && password === checkPassword) {
        return alert('Добро пожаловать!');
    } else {
        return alert('Такой пользователь не зарегистрирован');
    }
}
userData.check();

// adv 1

let scoreNumbers = {
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
};

let teamReal = prompt('Количество голов Реала:', '');
let teamLiver = prompt('Количество голов Ливерпуля:', '');

alert(`Счёт игры: ${scoreNumbers[teamReal]} : ${scoreNumbers[teamLiver]}`);

// adv 2

let student1 = {
    name: 'Polina',
    age: 27,
};

let student2 = {
    name: 'Polina',
    age: 27,
};

student1 = student2;
console.log(student1 === student2);

// adv 3

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
};

for (let key in animals.bird) {
    console.log(animals.bird.name);
};