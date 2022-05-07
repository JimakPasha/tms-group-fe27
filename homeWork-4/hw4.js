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

// Task 2
let interestRateCredit = 17;
let timeCredit = 5;
function calcOverpaymentCredit(sumCredit) {
    let result = (sumCredit / 100) * interestRateCredit * timeCredit;
    return result;
}
console.log(calcOverpaymentCredit(100500)); // проверка

// 2-ой способ для рассчета переплаты по процентам с учетом уменьшения
//  суммы взятой в кредит, за счет ежегодных выплат процентов.
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

// Task 4
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

