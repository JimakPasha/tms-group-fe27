'use strict'
//task 1
let user = {
    name: 'Sasha',
    age: 29,
};
delete user.name;
delete user.age;

//task 2
let pet = {
    name: 'Kaif',
    color: 'grey',
};
console.log('name' in pet);

//task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true,
};
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

//task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',
    },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
};
salaries.andreyFirst = 500;
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
let averageSalary = sum / 5;
console.log(averageSalary);
// не нашла другого способа решения,кроме как добавить значение к ключу с другим именем

//task 6
let login = prompt('Введите ваш логин', '');
let password = prompt('Введите пароль', '');
let userData = {
    userLogin: login,
    userPassword: password,
    check: checkUser,
};
userData.check();

let approved;
function checkUser(login, password, approved) {
    approved = prompt(`Логин: ${this.userLogin}, Пароль: ${this.userPassword}. Всё верно?`, 'yes');
    if (approved === 'yes') {
        return alert('Добро пожаловать!');
    } else {
        return alert('Проверьте правильность ввода своих данных');
    }
}
checkUser(login, password, approved);

//ADVANCED
//task 1
let score = {
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
let firstComand = prompt('Сколько очков у первой команды?', '');
let secondComand = prompt('Сколько очков у второй команды?', '');
alert(`Счёт ${score[firstComand]} : ${score[secondComand]}`);
//or
let scoreMatch = {
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
let footbolScore = prompt('Какой счёт?', '2 : 5');
alert(`Счёт ${scoreMatch[footbolScore[0]]} : ${scoreMatch[footbolScore[0]]}`);

//task 2
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

//task 3
const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    },
};
for (let key in animals.bird) {
    console.log(key);
}
//or
if (animals.bird === undefined) {
        console.log('Этого свойства в объекте нет')
    }





