'strict use'
// Task 1
let car = {
    color: 'black',
    brand: 'ford',
}

console.log(car);

delete car.color;
delete car.brand;
console.log(car);

// Task 2

let user = {
    name: 'Egor',
    age: 18,
}

if ('age' in user) {
    console.log(true);
} else {
    console.log(false);
}


// Task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}

for (let key in student) {
    console.log(key);
}

for (let key in student) {
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

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// Task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    slava: 664,
    alexandra: 199,
}
let count = 0;
let averageIncome = 0;

for (let key in salaries) {
    count++;
    averageIncome += salaries[key];
}
console.log(averageIncome/count);


// Task 6

let signUpLogin = prompt('Введите логин');
let signUpPass = prompt('Введите пароль');

let userData = {
    signUpLogin,
    signUpPass,
}

let confirmDataLogin = prompt('Подтвердите логин');
let confirmDataPass = prompt('Подтвердите пароль');

if (userData.signUpLogin === confirmDataLogin && userData.signUpPass === confirmDataPass ) {
 alert('Добро пожаловать!');
} else {
    alert('Пошёл вон!');
}


//Task 1 Advanced

let football = {
    0: 'Ноль',
    1: 'Один',
    2: 'Два',
    3: 'Три',
    4: 'Четыре',
    5: 'Пять',
    6: 'Шесть',
    7: 'Семь',
    8: 'Восемь',
    9: 'Девять',
}
let firstTeam = prompt('Введите колличество забитых мячей первой команды');
let secondTeam = prompt('Введите колличество забитых мячей второй команды');
alert(football[firstTeam] + ' : ' + football[secondTeam]);


//Task 2 Advanced
let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

console.log(student1 === student2);
student1 = student2;
console.log(student1 === student2);

//Task 3 Advanced 

const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    },
    // bird: {
    //     name: 'Чижик',
    //     age: 4,
    //  },
 }

 console.log(animals?.bird?.name);
 console.log(animals?.dog?.name);
 console.log(animals?.cat?.name);