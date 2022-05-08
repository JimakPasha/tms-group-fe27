//?  Task 1 💻
//! 1) Function Declartion
// let result = getSum(5, 10);
// console.log(result);
// function getSum(a, b) {
//     return (a + b);
// }

//! 2) Fucntion Expression 
// let fnGetSum = function(a, b) {
//     return (a + b);
// }
// let result = fnGetSum(10, 15);
// console.log(result);

//! 3) Arrow Function
// let arrowFnSum = (a, b) => a + b;
// let result = arrowFnSum(12, 11);
// console.log(result);

//?  Task 2 💻 
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

//! Вспомнить то что делали на лайве)
// let currencyEUR = 490;
// let currencyLIR = 35;
// let currencyUSD = 440;
// let valueKZT = 30000;
// function changeMoney(currencyUSD, valueKZT) {
//     return (valueKZT / currencyUSD);
// }
// let result = Math.trunc(changeMoney (currencyLIR, valueKZT));
// alert(`Your money: ${result}`);

//? Task 3 💻 ???
// let mail = ' e.a@outlook.com '
// function trimString(str, valFr, valBy) {

// }

//? Task 4 💻
//? Это я начал сам делать но что-то не получалось пришлось искать в гугле :( Можете дать небольшую подсказдку чтобы решить по другому.
// let year = 2021;
// let getSumNumbers = () => year[0] + year[1] + year[2] + year[3];
// let result = getSumNumbers;
// console.log(result);
//! этот код я нашел в гугле изменил его самую малость 
// let arr = [2, 0, 2, 1];
// let getSumNumbers = arr.reduce((a, b) => a + b, 0);
// let result = getSumNumbers;
// console.log(result);

//? Task 5 💻
// !1 метод
// function getSum (a, b) {
//     if (a === b) {
//         console.log(`${a} Since both are same`);
//     } else {
//         return (a + b);
//     }
// }
// let result = getSum(-1, 0);
// console.log(result);

// !2 метод
//!error
// let getSum = (a, b) => a + b;
// const fnNum = (a === b) ? console.log(`${a} Since both are same`) : (a + b);
// console.log(fnNum(1, 1));

//? Task 6 💻
//! 1 метод
// function fooboo (bool, foo, boo) {
//     if (bool) {
//         return foo;
//     } else {
//         return boo;
//     }
// }
// let result = fooboo(0, `true: foo`, `false: boo`);
// console.log(result);
//! 2 метод 
// let arrFooBoo = (bool, foo, boo) => {
//     const result = bool ? foo : boo
//     console.log(result);
// }
// arrFooBoo(1, `true: foo`, `false: boo`);