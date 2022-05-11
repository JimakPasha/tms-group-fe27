'use strict'

//task 1
// function getSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// let x = prompt('x?', '');
// let w = prompt('w?', '');
// alert(getSum(w));

// //task 2
// function getOverpayment(needMoney) {
//     let percent = 17;
//     let year = 5;
//     return needMoney * percent / 100 * year;
// }
// let useMoney = prompt('Какую сумму кредита вы хотите взять?', '');
// alert(`Ваша переплата составит ${getOverpayment(useMoney)} `);

// //task 3
// function trimString(string,from,to) {
//     let trim = string.slice(from,to);
//     return trim;
// }
// let word = prompt('Введите слово', '');
// let cutFrom = prompt('С какого символа начать?', '');
// let cutTo = prompt('Каким символом закончить?', '');
// alert(trimString(word, cutFrom, cutTo));

// //task 4
// function getSumNumbers(number) {
//     let result = String(number);
//     let sumOfNumber = 0;
//     for (let e = 0; e < result.length; e++) {
//         sumOfNumber = sumOfNumber + +result[e];
//     }
//     return sumOfNumber;
// }
// let askNumber = prompt('Введите число', '');
// alert(getSumNumbers(askNumber));
      
// //task 5
// function getSum(y,z) {
//     let sumOfGetSum = 0;
//     for (let d = +y; d <= z; d++) {
//         sumOfGetSum = +sumOfGetSum + +d;
//         console.log(sumOfGetSum);
//     }
//     return sumOfGetSum;
// }
// let firstNumber = prompt('Введите первое число', '');
// let secondNumber = prompt('Введите второе число', '');
// alert(getSum(firstNumber, secondNumber));

//task 6
// let foo = function() {
//     console.log('foo');
// };
// foo();
// let boo = function() {
//     console.log('boo');
// };
// boo();
// let logic = Boolean('true');
// function fooboo(logic, foo, boo) {
//     if (logic) {
//         console.log('foo');
//     } else {
//         console.log('boo');
//     }
// }
// fooboo(true, foo, boo);

// //ADVANCED 
// //task 1
// function getAbilityBuildTriangle(a, b, c) {
//     if (a + b > c && b + c > a && a + c > b) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// getAbilityBuildTriangle(2, 2, 3);

// //task 2
// function getPartChocolate(n, m) {
//     let part = 0;
//     if (n <= 0 || m <= 0) {
//        console.log(0);
//     } else {
//        console.log(part = n * m - 1);
//     }
// }
// getPartChocolate(3, 5);

//task 3
const tax = 12;
const priceTel = 520;
const priceAccessory = 35;
let balans = 2000;

function getTax() {
    const taxOfPrice = (priceTel + priceAccessory) * tax / 100;
    return taxOfPrice;
}
getTax();

function getPrice() {
    const finishPrice = priceTel + getTax();
    console.log(`${finishPrice.toFixed(2)} BYN`);
    return finishPrice;
}
getPrice();

let sum = 0;
while (sum < balans) {
    sum = getPrice() + sum;
}
console.log(`${sum.toFixed(2)} BYN`);

//or
// const tax = 12;
// const priceTel = 520;
// const priceAccessory = 35;
// let balans = prompt('Введите ваш текущий баланс', '');
// let numberOfPhone = prompt('Сколько телефонов вы хотите купить?', '');
// function getTax(taxOfPrice) {
//     taxOfPrice = (priceTel + priceAccessory) * tax / 100;
//     return taxOfPrice;
// }
// getTax();
// function getPrice(finishPrice) {
//     finishPrice = priceTel + getTax();
//     console.log(`${finishPrice.toFixed(2)} BYN`);
//     return finishPrice;
// }
// getPrice();
// let sum = numberOfPhone * getPrice();
// if (sum < balans) {
//     // sum = getPrice() + sum;
//     alert('Можно приобрести еще');
// } else if (sum > balans) {
//         alert('К сожалению денег не хватает')
//     }
// console.log(`${sum.toFixed(2)} BYN`);
