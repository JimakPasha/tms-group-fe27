//?  Task 1 💻
function getSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(100));
//?  Task 2 💻 
// {
//! 1 Method Не знаю хотел сделать Чуть по больше с условиями и с функц    
// let youngFamily = confirm('Вы являетесь молодое семьей');
// const creditPercen = 17;
// const youngFamilyCreditPercen = 4.5; 
// let creditSum = +prompt('Какую сумму кредита вы хотите получить? RUB', 25000);
// let creditPeriod = +prompt('На какой срок вы хотите взять кредит? Мес', 36);
// function getPercenLoan(money, percen, period) {
//     if (youngFamily) {
//         return ((creditSum * creditPeriod) / 100) * youngFamilyCreditPercen;    
//     } else {
//         return ((creditSum * creditPeriod) / 100) * creditPercen;
//     }
// }
// let getMonthPay = (creditSum, creditPeriod) => (creditSum / creditPeriod);
// let monthPay = getMonthPay(creditSum, creditPeriod);
// let result = getPercenLoan(creditSum, youngFamilyCreditPercen, creditPeriod);
// alert(`Итого: ${result} руб`);
// console.log(`ежемесячные платеж: ${Math.trunc(monthPay)}руб`);
// }
//!2 Method
// function getCredit(sumCredit) {
//     let year = 5;
//     let percentCredit = 0.17;
//     return sumCredit = (sumCredit * year) / percentCredit 
// }
// let result = Math.round(getCredit(10000));
// console.log(`Ваша переплата: ${result}`);

//? Task 3 💻 ??? можете подсказку дать ?
// {
// //! 1) Method
// function trimString(str, from, to) {
//     if (str.length <= from) {
//         return str.slice(0, from);
//     } else if (str.length >= to) {
//         return str.slice(0, to);
//     }
// }
// let result = trimString('ARROW', 0, 3);
// console.log(result);

// //! 2) Method 
// function trimString(str, from, to) {
//     return str.slice(from, to);
// }
// console.log(trimString('Arrow', 0, 3));

//! 3) Method 
// let trimString = (str, from, to) => str.slice(from, to);
// console.log(trimString('Lorem', 0, 3));
// }

//? Task 4 💻
//? Это я начал сам делать но что-то не получалось пришлось искать в гугле :( Можете дать небольшую подсказдку чтобы решить по другому.
// let year = 2021;
// let getSumNumbers = () => year[0] + year[1] + year[2] + year[3];
// let result = getSumNumbers;
// console.log(result);
//! этот код я нашел в гугле изменил его самую малость 
{let arr = [2, 0, 2, 1];
let getSumNumbers = arr.reduce((a, b) => a + b, 0);
let result = getSumNumbers;
console.log(result);}
//? Task 5 💻
{function getSum (a, b) {
    if (a === b) {
        console.log(`${a} Since both are same`);
    } else {
        return (a + b);
    }
}
let result = getSum(-1, 0);
console.log(result);}

//? Task 6 💻
//! 1 метод
{function fooboo (bool, foo, boo) {
    if (bool) {
        return foo;
    } else {
        return boo;
    }
}
let result = fooboo(0, `true: foo`, `false: boo`);
console.log(result);}
//! 2 метод 
// let arrFooBoo = (bool, foo, boo) => {
//     const result = bool ? foo : boo
//     console.log(result);
// }
// arrFooBoo(1, `true: foo`, `false: boo`);

//? Task 1 👨‍🏫 
{function getTriangle(a, b, c) {
    const triangleLength = 20;
        if (a + b + c < triangleLength) {
            return (a + b + c + ' triangle true');
        } else {
            console.log(`triangle false`);
        }
}
let result = getTriangle(5, 10, 4);
console.log(result);}

//! 2)
// const triangleLength = 20;
// let triangleSum = (a, b, c) => a + b + c;
// let result = triangleSum(4, 10, 1) < triangleLength ? console.log('true') : console.log('false');

//? Task 2 👨‍🏫 
{function getChocolatePiece(h, w) {
    if (h >= 1 && w >= 1) {
        return (h * w) - 1;
    } else {
        console.log('False');
    }
}
let result = getChocolatePiece(3, 1);
console.log(`Нужно: ${result} надлома`);}

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
{let creditCard = +prompt('Сколько денег у вас на счету в $', '1000');
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
let result = getBasketPrice(phone, headphone);
let resultNds = (result / 100)* nds + result; 
alert(resultNds);}
