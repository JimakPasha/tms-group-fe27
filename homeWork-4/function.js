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