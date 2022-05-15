//?  Task 1 💻
function getSum(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
let resultSum = getSum(100);
console.log(resultSum);

//?  Task 2 💻 
//! 1 method
let youngFamily = confirm('Вы являетесь молодое семьей');
const creditPercen = 17;
const youngFamilyCreditPercen = 4.5; 
let creditSum = +prompt('Какую сумму кредита вы хотите получить? RUB', 25000);
let creditPeriod = +prompt('На какой срок вы хотите взять кредит? Мес', 36);
function getPercenLoan(money, percen, period) {
    if (youngFamily) {
        return ((creditSum * creditPeriod) / 100) * youngFamilyCreditPercen;    
    } else {
        return ((creditSum * creditPeriod) / 100) * creditPercen;
    }
}
let getMonthPay = (creditSum, creditPeriod) => (creditSum / creditPeriod);
let monthPay = getMonthPay(creditSum, creditPeriod);
let resultCredit = getPercenLoan(creditSum, youngFamilyCreditPercen, creditPeriod);
alert(`Итого: ${resultCredit} руб`);
console.log(`ежемесячные платеж: ${Math.trunc(monthPay)}руб`);

//! 2 method
// function getCredit(sumCredit) {
//     const percent = 17;
//     let year = 5;
//     return (sumCredit * year * percent) / 100; 
// }
// let result = getCredit(1000);
// console.log(`Ваша переплата: ${result} rub`);

//! 3 method
// let arrGetCredit = (sumCredit) => {
//     let year = 5;
//     const percent = 17;
//     return (sumCredit * year * percent) / 100
// }
// let result = arrGetCredit(1000);
// console.log(result);

//? Task 3 💻 ??? можете подсказку дать ?
//! 1 method
// function trimString(str, from, to) {
//     if (str.length <= from) {
//         return str.slice(0, from);
//     } else if (str.length >= to) {
//         return str.slice(0, to);
//     }
// }
// let result = trimString('ARROW', 0, 3);
// console.log(result);

//! 2 method
function trimString(str, from, to) {
    return str.slice(from, to)
}
console.log(trimString('I love JS', 0, 7));
//? Task 4 💻
function getSum(num) {
    let result = String(num);
    let sumNum = 0;
    for(let i = 0; i < result.length; i++) {
        sumNum += +result[i];
    }
    return sumNum;
}
console.log(getSum(130));
//? Task 5 💻
//!1 method
function getSum (a, b) {
    if (a === b) {
        console.log(`${a} Since both are same`);
    } else {
        return (a + b);
    }
}
let result = getSum(3, 6);
console.log(result);

//!2 method
// function getSum(x, y) {
//     let sumNum = 0;
//     for (let i = x; i <= y; i++) {
//         sumNum += +i;
//     }
//     return sumNum;
// }
// console.log(getSum(5, 2));

//? Task 6 💻
//! 1 метод
// function fooboo (bool, foo, boo) {
//     if (bool) {
//         foo();
//     } else {
//         boo();
//     }
// }
// let bool = true;
// let foo = function () {
//     console.log('foo');
// }
// let boo = function () {
//     console.log('boo');
// }
// fooboo(bool, foo, boo);
//! 2 метод 
let arrFooBoo = (bool, foo, boo) => {
    const resultFooBoo = bool ? foo : boo
    console.log(resultFooBoo);
}
arrFooBoo(1, `true: foo`, `false: boo`);

//? Task 1 👨‍🏫 
//! 1)
function getTriangle(a, b, c) {
        if (a <= b + c && b <= a + c && c <= a + b) {
            return true + ' Triangle: true';
        } else {
            return false + ' Triangle: false'
        }
}
let resultTr = getTriangle(10, 1, 9);
console.log(resultTr);

//! 2)
// const triangleLength = 20;
// let triangleSum = (a, b, c) => a + b + c;
// let result = triangleSum(4, 10, 1) < triangleLength ? console.log('true') : console.log('false');

//? Task 2 👨‍🏫 
function getChocolatePiece(h, w) {
    if (h >= 1 && w >= 1) {
        return (h * w) - 1;
    } else {
        console.log('False');
    }
}
let resultPc = getChocolatePiece(3, 1);
console.log(`Нужно: ${resultPc} надлома`);

//? Task 3 👨‍🏫 
//! 1)Берет цены из объекта и суммирует их но почему не работает else? не понял
// let creditCard = 1500;
// const NDS = 12.5;
// let phones = {
//     brand: ['Apple', 'Samsung', 'Xiaomi', 'OnePlus',],
//     model: ['iphone11', 'iphone12', 'iphone13'],
//     price: [450, 650, 799, 1099,],
// }
// let headphones = {
//     brand: ['Apple','JBL','Sony','Marshall'],
//     model: ['Airpods 2', 'JBL GO', 'WH-1000XM4', 'Airpods Pro'],
//     price: [99, 199, 599, 799],
// }
// // не доконца понял этот момент ?))
// // let i = 0;
// // while (i === creditCard) {
// //     basketPrice()
// // }
// function basketPrice(phones, headphones) {
//     if(phones <= creditCard && headphones <= creditCard) {
//         return (phones + headphones);
//     } else {
//         console.log('У тебя не достаточно денег на карте');
//     }
// }
// let result = basketPrice(phones.price[3], headphones.price[3]);
// let resultNDS = (result / 100) * NDS + result;
// console.log(`Сумма с НДС: ${resultNDS}$`);

//! 3)
let creditCard = +prompt('Сколько денег у вас на счету в $', '1000');
let phone = +prompt('Вы точно хотите купить Iphone XR $', '450');
let headphone = +prompt('Вы точно хотите купить Airpods 2 $', '150');
const nds = 12;
let i = 0
while (i <= creditCard) {
    i++;
    function getBasketPrice (phones, headphones) {
        if(phones + headphones <= creditCard) {
            return (phones + headphones);
        } else {
            console.log('У тебя не достаточно средств на карте');
        }
    }
}
let resultBasket = getBasketPrice(phone, headphone);
let resultNds = (resultBasket / 100)* nds + resultBasket; 
alert(resultNds);