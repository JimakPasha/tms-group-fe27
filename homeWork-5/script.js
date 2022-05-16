'use strict';

//task 1
let user = {
    name: 'Ivan',
    age: 21,
};
delete user.name;
delete user.age;

//task 2
let company = {
    owner: 'Vlad',
    city: 'Gomel',
};
console.log('city' in company);

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
    ivan: 664,
    alexandra: 199,
}
let avergeSalary = 0;
let numberofPeople = 0;
for (let key in salaries) {
    numberofPeople++;
    avergeSalary += salaries[key];
}
console.log(avergeSalary / numberofPeople);

//task 6

let client = {}
client.login = prompt(`Напишите ваш Логин`,);
client.password = prompt(`Напишите ваш Пароль`,);
let yourAccount = confirm(`Ваши данные для входа - ` + client.login + ` ` + client.password + `?`);
if (yourAccount) {
    alert(`Все верно , вы можите войти`);
}

//ADVANCED
//task 1

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
alert(`Счёт ${scoreMatch[footbolScore[0]]} : ${scoreMatch[footbolScore[4]]}`);

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

if (animals.bird === undefined) {
    console.log('Обьект не найден')
}

