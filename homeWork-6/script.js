'use strict';

//#### Task 1 🖥
const colors = ['red', 'green', 'blue']
console.log(colors.length);

//#### Task 2 🖥

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1]);

//#### Task 3 🖥

const numbers = [5, 43, 63, 23, 90]
//первый способ 
numbers.length = 0;
console.log(numbers);
//второй способ 
for (i = 0; i < numbers.length; i++)numbers.splice(i)
console.log(numbers);

//#### Task 4 🖥

const students = ['Polina', 'Dasha', 'Masha']
students.pop();
students.push(`Borya`)
console.log(students);
students.shift();
students.unshift(`Andrey`);
console.log(students);

//#### Task 5 🖥

const cats = ['Gachito', 'Tom', 'Batman']
//1
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
//2
for (let x of cats) {
    console.log(x);
}


//#### Task 6 🖥

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

let numbers = evenNumbers.concat(oddNumbers);
console.log(numbers);
console.log(numbers.indexOf(8));

//#### Task 7 🖥

const binary = [0, 0, 0, 0]

let str = binary.join('1')
console.log(str);

//### ADVANCED level

//#### Task 1 👨‍🏫

palindrome('racecar')//true
palindrome('car')//false
function palindrome(str) {
    return str === str.split('').reverse().join('');
}

//#### Task 2 👨‍🏫

const matrix = [
    [12, 98, 78, 65, 23],  // 55.2
    [54, 76, 98, 43, 65],  // 67.2
    [13, 324, 65, 312],    // 178.5
    [9092, 22, 45, 90000], // 24789.75
];

let sumMatrix = 0;
let colNumbers = 0;
let allSumMatrix = 0;

for (let number of matrix) {
    for (let i = 0; i < number.length; i++) {
        sumMatrix += number[i];
    }

    colNumbers += number.length;
    allSumMatrix += sumMatrix;
    sumMatrix = 0;
}
console.log(allSumMatrix / colNumbers); //5582.5 

//#### Task 3 👨‍🏫
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let plusNumber = [];
let minusNumber = [];
for (let item of mixedNumbers) {
    if (item >= 0) {
        plusNumber.push(item);
    } else if (item < 0) {
        minusNumber.push(item);
    }
}
console.log(plusNumber);
console.log(minusNumber);

//#### Task 4 👨‍🏫

let randomNumberInPow = [];
let randomNumber =
    [Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)];
for (let numberInPow of randomNumber) {
    randomNumberInPow.push(Math.pow(numberInPow, 3));
}
console.log(randomNumber);
console.log(randomNumberInPow);
