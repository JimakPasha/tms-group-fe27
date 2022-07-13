'use strict'

// 1
function sayHi() {
    console.log('Hi');
}

// 2
let sayHello = function(name) {
    console.log('Hello', name);
};
sayHello('Stewie');

// 3
function mult (num1) {
    return num1 * 2;
}
let result = mult(5);
console.log(result);