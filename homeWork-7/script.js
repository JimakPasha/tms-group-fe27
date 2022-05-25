'use strict'

// task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => {
    console.log(element);
});
fibonacci.forEach(function findElement(element) {
    console.log(element);
});

// task 2 

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let copyUsersDeclaration = users.map(function copyMember(element, index) {
    return(`member ${Number(index)+ 1}: ${element}`
    );
});
console.log(copyUsersDeclaration);

// 2 способ arrow

let copyUsers = users.map((element, index) => {
    return(`member ${Number(index)+ 1}: ${element}`
    );
});
console.log(copyUsers);

// task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];
let positiveNumberDeclaration = numbers.filter(function posNumber(item) {
    return item > 0;
});
console.log(positiveNumberDeclaration);

// 2 способ arrow

let positiveNumber = numbers.filter(item => {
    return item > 0;
});
console.log(positiveNumber);

// task 4

const fibonacciSum = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let sumFibonacciDeclaration = fibonacciSum.reduce(function getSum(accum, value) {
    return accum + value;
});
console.log(sumFibonacciDeclaration);

// 2 способ arrow

let sumFibonacci = fibonacciSum.reduce((accum, value) => {
    return accum + value;
});
console.log(sumFibonacci);

// task 5 

const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let evenNumbersDeclaration = number.find(function findEvenNumber(number) {
    return number % 2 === 0;
});
console.log(evenNumbersDeclaration);

// 2 способ arrow

let evenNumbers = number.find(number => {
    return number % 2 === 0;
});
console.log(evenNumbers);

