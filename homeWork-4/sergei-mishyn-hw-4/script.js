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

function getSumNumbers(number) {
    let result = String(number);
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
         sum = sum + +result[i];
        }
        console.log(sum);
    }
    getSumNumbers(444);

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
// Tast 6
{

function fooboo(bool, foo, boo) {
    if (bool) {
        foo();
    } else {
        boo();
    }
    }
let bool = true;
let foo = function() {
    console.log("foo")
};
let boo = function() {
    console.log("boo")
};

fooboo(bool, foo, boo);

}

// Task 2.1
{
function triangle(a, b, c) {
     if (a <= b + c && b <= a + c && c <= b + a) {
        return 'True'
     }  else {
        return 'False'
     }

}
console.log(triangle(2, 3, 3));
    
}

// Task 2.2

{

function getPartChocolate(a, b) {
    let part = 0;
    if(a <= 0 || b <= 0) {
        console.log(0)
    } else {
        console.log(part = a * b - 1)
    }
}
getPartChocolate(2,2)
}

// Task 2.3