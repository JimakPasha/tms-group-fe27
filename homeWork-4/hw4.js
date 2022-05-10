'use strict';

// Task 1
function getSum(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    return result;
}
console.log(getSum(100)); // проверка (5050)

// Task 2 (два решения)
// без уменьшения суммы кредида за счет выплаченных %
let interestRateCredit = 17;
let timeCredit = 5;
function calcOverpaymentCredit(sumCredit) {
    let result = (sumCredit / 100) * interestRateCredit * timeCredit;
    return result;
}
console.log(calcOverpaymentCredit(100500)); // проверка
// с учетом уменьшения суммы кредида за счет выплаченных %
let interestRateCredit2 = 17;
let timeCredit2 = 5;
function calcOverpaymentCredit2(sumCredit) {
    let overpaymentOfYear;
    let result = 0;
    for (let i = 1; i <= timeCredit2; i++) {
        overpaymentOfYear = sumCredit / 100 * interestRateCredit2;
        sumCredit -= overpaymentOfYear;
        result += overpaymentOfYear
    }
    return result;
}
console.log(calcOverpaymentCredit2(1000)); // проверка


// Task 3
function trimString(string, x, y) {
    let result = string.toString().slice(x, y);
    return result;
}
console.log(trimString ('JavaScript', 1, 4))

// Task 4 (два решения)
// через преобразование в массив
function getSumNumbers(number) {
    number = number.toString();
    let numberStr = number.split('');
    let result = +numberStr[0];

    for (let i = 1; i < number.length; i++ ) {
        result += +numberStr[i];
    }
    return result;
}
console.log(getSumNumbers(2021)); // 5
// через сумму остатков от деления 
function getSumNumbers2(number) {
    let result = 0;
    while (number > 0) {
        let surplus = (number % 10);
        result = result + surplus;
        number = Math.floor(number/ 10);
    }
    return result;
}
console.log(getSumNumbers2(2021)); // 5


// Task 5
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
console.log(getSum(-2, -1));

// Task 6 (не совсем понял условие)
function fooboo(bool, foo, boo) {
    foo = foo1;
    boo = boo1;
   (bool) ? foo() : boo();
}
function foo1() {
   console.log('foo');
}
function boo1() {
   console.log('boo');
}
fooboo(true);

// Advanced level
// Task 1
function checkTriangle(a, b, c) {
    return  (a + b > c && a + c > b && b + c > a) ? true : false;
}
console.log(checkTriangle(5, 3, 4));

// Task 2
function showDivisionChocolate(n, m) {
    let result;
    if ((n <= 0) || (m <= 0)) {
        return result = 0;
    } else if ((n === 1) || (m === 1)) {
        return (n > m) ? result = n - 1 : result = m - 1;
    } else if ((n <  m) || (n === m) || (n > m)) {
        return result = ((m - 1) * n) + (n - 1);
    } else {
        return result = 0;
    }
}
console.log(showDivisionChocolate(3, 1)); // 2

// Task 3
// пока не cделал

