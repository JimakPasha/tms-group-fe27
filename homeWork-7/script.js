'use strict';

//#### Task 1 🖥

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
//1
fibonacci.forEach(element => console.log(element));
//2
fibonacci.forEach(function (element) {
    console.log(element);
});

//#### Task 2 🖥

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const copyUsers = users.map((element, index) => {
    return (`member ${index + 1}: ${element}`
    );
});
console.log(copyUsers);

const copyUsersD = users.map(function copyMember(element, index) {
    return (`member ${Number(index) + 1}: ${element}`
    );
});
console.log(copyUsersD);



//#### Task 3 🖥

const numbers = [7, -4, 32, -90, 54, 32, -21]
//1
const positiveNumbers = numbers.filter((item) => {
    return item > 0;
});
console.log(positiveNumbers);
//2
const positiveNumbers2 = numbers.filter(function (element) {
    return element > 0;
});
console.log(positiveNumbers2);

//#### Task 4 🖥

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
//1
const sum = fibonacci2.reduce((accum, value, index, array) => {
    console.log(value);
    return accum + value;
});
console.log(sum);

let sum2 = fibonacci2.reduce(function getSum(accum, value) {
    return accum + value;
});
console.log(sum2);

//#### Task 5 🖥

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
//1
const result = numbers2.find(function (element) {
    return element % 2 == 0;
});
console.log(result);
//2
const result2 = numbers2.find((element) => {
    return element % 2 == 0;
})
console.log(result2);


//### ADVANCED level

//#### Task 1 👨‍🏫

function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.sumCredit = function() {
        
    if (rate === 'A') {
        return  salary * 12;
    } else  if (rate === 'B') {
        return  salary * 9;
    } else  if (rate === 'C') {
        return  salary * 6;
    } else {
        return 'Плохой рейтинг, кредит дать не можем!';
    }
}
}
let student1 = new Student(1250, 'C', 'Bob');
let student2 = new Student(1800, 'B', 'Ilona');
let student3 = new Student(1200, 'D', 'Ivan');
let student4 = new Student(1400, 'B', 'Olga');
let student5 = new Student(2100, 'A', 'Stas');
let student6 = new Student(2500, 'A', 'Anton');

let studentArrayCredit = [].concat(student1.sumCredit(), student2.sumCredit(),
    student3.sumCredit(), student4.sumCredit(), student5.sumCredit(), student6.sumCredit());

function studentCreditSum(studentArrayCredit) {
    return studentArrayCredit.reduce((acc, item, index) => (typeof item === 'number') ? acc+=item : acc);
}
console.log(` Общая сумма кредита составляет: ${studentCreditSum(studentArrayCredit)}`);

//#### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

function cutout(someString) {
    const x = someString.replace(/[aeiouAEIOU]/g, "");
    return x;
}
console.log(cutout('This website is for losers LOL!'));


//#### Task 3 👨‍🏫 Нет истории, нет теории

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// let letter = 'zxjtN';
// let Multiply = letter.split('').map((element, index) => {
//     return element.repeat(index + 1);
// });
// console.log(Multiply);

function accum(string) {
    string = string.split('');
    const newStr = string.reduce((sum, letter, index) => {
        let x = letter.toUpperCase();
        let y = letter.toLowerCase();
        sum += x + y.repeat(index) + '-';
        return sum;
    }, '');
    return newStr.slice(0, (newStr.length - 1));
}
console.log(accum('cwAt'));

// #### Task 4 👨‍🏫 Самый высокий и самый низкий

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

let numberStr = '5 3 9 -1 -6';
let arrNumberStr = numberStr.split(' ');
console.log(arrNumberStr);
let arrMaxMin = (`${Math.max.apply(null, arrNumberStr)} ${Math.min.apply(null, arrNumberStr)}`);
console.log(arrMaxMin);

//#### Task 5 👨‍🏫 Изограммы

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

let isogramm;
function isogramma(isogramm) {
    for (let i = 0; i < isogramm.length; i++) {
    if (isogramm.split(isogramm[i]).length-1 > 1) {
        return false;
    } else {
        return true;
    }
}
} 
console.log(isogramma('moOse'));
console.log(isogramma('Dermatoglyphics'));


//#### Task 6 👨‍🏫 Считаем коды символов

//'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

function ascii(str) {
    str = str.split('').reduce((acc, item, index) => {
        acc += String(item.charCodeAt());
        return acc;
    }, '')
    let total1 = str;
    console.log(`${total1}`)
    let total2 = total1.split('').map((item) => (item == 7) ? item = 1 : item = item).join('');
    console.log(`${total2}`)
    return +total1 - +total2;
}
 console.log(ascii('ABC'));

// #### Task 7 👨‍🏫 Дубликаты

// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

function chengeStr(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        if (string.split(string[i]).length > 2) {
            newStr += ')';
        } else {
            newStr += '(';
        }
    }
    return newStr;
}
console.log(chengeStr("din"));
console.log(chengeStr("recede"));
console.log(chengeStr("Success"));
console.log(chengeStr("(( @"));