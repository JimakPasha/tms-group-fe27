'use strict';

// Task 1
let car = {
    audi: 'A8',
    mersedes: 'w140',
};
console.log(car); // проверка свойств объекта
delete car.audi;
delete car.mersedes;
console.log(car); // проверка свойств объекта после удаления


// Task 2
const motorcycle = {
    kawasaki: 'Z1000 SX',
    bmw: 's1000rr',
};
console.log(motorcycle.honda === undefined); // true, => 'honda' нет в motorcycle.
console.log('kawasaki' in motorcycle); // true, => 'kawasaki' есть в motorcycle.


// Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
};
console.log()
for (let key in student) {
    console.log(key);       // все ключи объекта
}
for (let key in student) {
    console.log(student[key]);  // все значения ключей объекта
}
// 
for (let key in student) {
    console.log(`${key}: ${student[key]}`); // просто проверил как работает здесь интерполяция
}
// 


// Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum']['red']); // красный
console.log(colors['ru pum pu ru rum'].blue); // синий


// Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199,
};
let sumSalaries = 0; // суммарная ЗП сотрудников
let i = 0; // счетчик количества сотрудников
for (let worker in salaries) {
    i += 1;
    sumSalaries += salaries[worker];
}
let middleSalaryWorker = sumSalaries / i; // средняя ЗП сотрудников
console.log(middleSalaryWorker);


// Task 6 (не совсем понятно условие)
let userLogin = prompt('Введите логин');
let userPassword = prompt('Введите пароль');
let userInfo = {};
userInfo.login = userLogin;
userInfo.password = userPassword;
console.log(userInfo);
let userLogin2 = prompt('Подтвердите логин');
let userPassword2 = prompt('Подтвердите пароль');
(userLogin === userLogin2 && userPassword === userPassword2) ?
alert('Добро пожаловать') : alert('Не верный логин или пароль');
// or
function validator() {
    let userLogin = prompt('Введите логин');
    let userPassword = prompt('Введите пароль');
    let userInfo = {
        login: userLogin,
        password: userPassword,
    };
    let userLogin2 = prompt('Подтвердите логин');
    let userPassword2 = prompt('Подтвердите пароль');
    ((userLogin === userLogin2) && (userPassword === userPassword2)) ?
    alert('Добро пожаловать') : alert('Не верный логин или пароль');
}
validator();


// Advanced
//  
// Task1
function getSoccerScore(goalTim1, goalTim2) {
    let numberString = {
        1: 'one', 2: 'two', 3: 'three',
        4: 'fhour', 5: 'five', 6: 'six',
        7: 'seven', 8: 'eight', 9: 'nine',
        0: 'zero',
    };
    for (let num in numberString) { 
        if (goalTim1 == num && goalTim2 == num) {
            goalTim1 = goalTim2 = numberString[num];
        } else if (goalTim1 == num) {
            goalTim1 = numberString[num];
        } else if (goalTim2 == num) {
            goalTim2 = numberString[num];
        } 
    }
    return console.log(`${goalTim1} : ${goalTim2}`);
}
getSoccerScore(0, 0); // zero : zero
getSoccerScore(5, 1); // five : one

// посмотрел видео c лекции и упростил код))
function getSoccerScore2(goalTim1, goalTim2) {
    let numberString = {
        1: 'one', 2: 'two', 3: 'three',
        4: 'fhour', 5: 'five', 6: 'six',
        7: 'seven', 8: 'eight', 9: 'nine',
        0: 'zero',
    };
    return console.log(`${numberString[goalTim1]} : ${numberString[goalTim2]}`);
}
getSoccerScore2(0, 0); // zero : zero
getSoccerScore2(5, 1); // five : one


// Task 2 (не совсем понятно условие)
let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(`${student1}` == `${student2}`); // true
// or
console.log(!(student1 === student2)); // true
// or
student1 = student2;
console.log(student1 === student2); // true 


// Task 3
function checkAnimal(kindAnimal, infoAnimal) {
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
    for (let type in animals) {
        if (kindAnimal == type.toString()) {
            kindAnimal = animals[type];
            for (let info in kindAnimal) {
                if (infoAnimal == info.toString()) {
                    return console.log(`У ${type} ${infoAnimal}: ${kindAnimal[info]}`);
                }
            }
            return console.log(`${infoAnimal} - не указан у ${type}!`);
        } 
    }
    return console.log(`${kindAnimal} -  нет здесть таких животных!`);
}
checkAnimal('bird', 'name'); // bird нет здесть таких животных!
checkAnimal('cat', 'name'); // У cat name: Енчик
checkAnimal('cat', 'weight'); // weight - не указан у cat!

// or
function checkAnimal2(kindAnimal, infoAnimal) {
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
     
    if (animals[kindAnimal] !== undefined) {
        if (animals[kindAnimal][infoAnimal] !== undefined) {
            return console.log(`У ${kindAnimal} ${infoAnimal}: ${animals[kindAnimal][infoAnimal]}`);
        }
        return console.log(`${infoAnimal} - не указан у ${kindAnimal}!`);
    }
    return console.log(`${kindAnimal} -  нет здесть таких животных!`);
}
checkAnimal2('bird', 'name'); // bird нет здесть таких животных!
checkAnimal2('cat', 'name'); // У cat name: Енчик
checkAnimal2('cat', 'weight'); // weight - не указан у cat!