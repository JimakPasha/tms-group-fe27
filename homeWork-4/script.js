'use strict'

// task 1

function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(100));

// task 2

function credit(sum) {
    return sum * 0.17 * 5;
}
console.log(credit(5941));

// task 3

function trimString(string, x, y) {
    let result = string.toString().slice(x, y);
    return result;
}
console.log(trimString ('Homework', 1, 4))

// task 4

function getSumNumbers(number) {
    let result = String(number);
    let sumOfNumber = 0;
    for (let e = 0; e < result.length; e++) {
        sumOfNumber = sumOfNumber + +result[e];
    }
    return sumOfNumber;
}
let askNumber = prompt('Введите число', '');

alert(getSumNumbers(askNumber));

// task 5

function getSum(a1,b1) {
    let answerGetSum = 0;
    for (let s = +a1; s <= b1; s++) {
        answerGetSum = +answerGetSum + +s;
        console.log(answerGetSum);
    }
    return answerGetSum;
}
let numberA1 = prompt('Первое число:', '');
let numberB1 = prompt('Второе число:', '');

alert(getSum(numberA1, numberB1));

// task 6

function fooboo(boolean, foo, boo) {
    if (boolean) {
        foo();
    } else {
    boo();
    }
}
let boolean = true;
let foo = function() {
    console.log('foo')
};
let boo = function() {
console.log('boo')
};

fooboo(boolean, foo, boo);

// task 1 adv

function triangle(a, b, c) {
    if((a + b > c) && (a + c > b) && (b + c > a)){
        return true;
    } return false;
}
result = triangle(17, 7, 17);

console.log(result);

// task 2 adv

function sliceChoco(n, m) {
        let part = 0;
    if (n <= 0 || m <= 0) {
        console.log(0);
    } else {
      console.log(part = n * m - 1);
    }
}
sliceChoco(0, 10);

function calcPrise(balance) {
    let Phones = 0;
    let priceWithTax = amountWithTax(pricePhone + priceAccessory);

    alert ( 'Сумма покупки с налогом' + priceWithTax.toFixed(2) + '$');
    
    while (balance >= priceWithTax) {
        balance = balance - priceWithTax ;
            Phones++;
        if (Phones > 0) {
        alert ('Вы совершили покупку!' + Phones);
        }  else {
            alert ('У Вас недостаточно средств!');
        }
    }
    alert ('Нужно накопить ещё немного денег!')
};

calcPrise(balance);
