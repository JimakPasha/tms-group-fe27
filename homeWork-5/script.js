'use strict'

// Task 1 
let cup = {
    color: `green`,
    weght: 150,
}
delete cup.color
delete cup.weght
console.log(cup)

// Task 2

let bed = {
    color: `brown`,
    weght: 80,
} 
    console.log(`color` in bed)

// Task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for(const key in student) {
    console.log(key);
}
for(const key in student) {
    console.log(student[key]);
}
// Task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors[`ru pum pu ru rum`].red + ` ` + colors[`ru pum pu ru rum`].blue);

// Task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    inga: 664,
    alexandra: 199,
}
let avergeSalary = 0;
let numberPeople = 0;
for(let key in salaries) {
numberPeople++;
avergeSalary += salaries[key]; 
}
console.log(avergeSalary / numberPeople);

// Task 6

let account = {}
account.login = prompt(`Напишите ваш Логин`, `Игорь`);
account.password = prompt(`Напишите ваш Пароль`,`123456`);
let trueAccount = confirm(`Ваши данные для входа - ` + account.login + ` ` + account.password + `?`);
if(trueAccount) {
    alert(`Добро пожаловать`); 
}

//ADVANCED level

// Task 1

let wordNumber = {
    1: `Один`,
    2: `Два`,
    3: `Три`,
    4: `Четыре`,
    5: `Пять`,
    6: `Шесть`,
    7: `Семь`,
    8: `Восемь`,
    9: `Девять`,
}
let score = prompt(`Напишите счёт`, `2:5`);
alert(wordNumber[score[0]] +` ` + wordNumber[score[2]]);
console.log(wordNumber[score[0]] +` ` + wordNumber[score[2]]);

// Task 2
let a;
let b;
let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}
for(let key in student1) {
a += key + student1[key];
}
for(let key in student2) {
    b += key + student2[key];
    }
console.log(a == b);

// Task 3

const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    }
 }
 let beast =  prompt(`введите животное`,`bird`);
      if(animals[beast] == null) { 
        while(animals[beast] == null) {
        beast = prompt(`введите животное`,`bird`);
    }
    } else {
  alert(animals[beast].name);
} 
alert(animals[beast].name);