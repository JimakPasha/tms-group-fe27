'use strict'
{
// task 1

function getSum(sum) {
    for (let i = 1; i < 100; i++) {
        sum = sum + i;
    }
    console.log(sum)
}
getSum(100)
// let myFn = getSum(prompt('Введите число'));
// alert(myFn);  // почему тут в консоле в браузере выбивает undefined ?

}

// task 2
{

function credit(sumCredit) {
    let a = (sumCredit*0.17)*5;
    console.log(a)
}
credit(100);

}

// task 3
{

function trimString(string,from,to) {
    let a = string.slice(from,to);
    console.log(a)
}
trimString('Привет',1,4);

}

// task 4

{

function countDigits(num) {
    for(i = 0; num >= 1; i++) {
       num /= 10;
    }
    console.log(i)
 }

countDigits(5555)


}
// task 5
{

function getSum(a, b) {
    let c;
    if (a < b) {
        c = a;
        for (let i = a + 1; i <= b; i++) {
            c += i;
        }
        return c;
    } else if (a > b) {
        c = b;
        for (let i = b + 1; i <= a; i++) {
            c += i;
        } 
        return c;
    } else {
        return c = a || b;
    }
}


console.log(getSum(1, 1));

}
