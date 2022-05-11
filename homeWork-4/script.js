'use strict';

// #### Task 1 💻

function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(getSum(100));

// #### Task 2 💻

function getOverpayment(Money) {
    let percent = 17;
    let year = 5;
    return Money * percent / 100 * year;
}
let result = prompt('Какая сумма вас интересует?');
alert(`Ваша переплата  ${getOverpayment(result)} `);

// #### Task 3 💻
// были небольшие проблемы с  понимаем задания.
function trimString(string,from,to) {
    let trim = string.slice(from,to);
    return trim;
}
let word = prompt('Введите слово', '');
let cutFrom = prompt('Начальный символ?', '');
let cutTo = prompt(' Конечный символом ?', '');
alert(trimString(word, cutFrom, cutTo));

// #### Task 4 💻

function getSumNumber(num) {
    let sum = 0, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    return sum;
}

alert(getSumNumber(2021));

// #### Task 5 💻

function getSum(a, b) {
    let result;
    if (a < b) {
        result = a;
        for (let i = a + 1; i <= b; i++) {
            result += i;
        }
        return result;
    } else if (a > b) {
        result = b;
        for (let i = b + 1; i <= a; i++) {
            result += i;
        } 
        return result;
    } else {
        return result = a;
    }
}
console.log(getSum(10, -8));

// #### Task 6 💻

 function fooboo (bool, foo, boo) {
     if (bool) {
         return foo;
     } else {
         return boo;
     }
 }
let resultFooboo = fooboo(0, `true: foo`, `false: boo`);
console.log(resultFooboo);


// ### ADVANCED level

// #### Task 1 👨‍🏫 

let arr = new Array(3);
let i;
for (i = 0; i < 3; i++) {
    arr[i] = +prompt("Введите " + (i + 1) + " сторону:", "");
}

function trangel(arr) {
    if (arr[0] < (arr[1] + arr[2]) && arr[1] < (arr[0] + arr[2]) && arr[2] < (arr[0] + arr[1])) {
        alert("Треугольник с такими сторонами существует");
    } else {
        alert("Треугольник с такими сторонами НЕ существует");
    }
}
trangel(arr);


// #### Task 2 👨‍🏫

 function getChocolateBar(x, y) {
     if (x >= 1 && y >= 1) {
         return (x * y) - 1;
     } else {
         console.log('False');
     }
 }
 let chocolateResult = getChocolateBar(6, 2);
 console.log(`Нужно: ${chocolateResult} надломов`);

// #### Task 3 👨‍🏫 