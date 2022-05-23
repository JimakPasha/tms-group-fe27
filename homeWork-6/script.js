'use strict'

// task 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// task 2 

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length-1]);

// task 3

const numbers = [5, 43, 63, 23, 90];
console.log(numbers.length = 0);
console.log(numbers.splice(0,[numbers.length]));
console.log(numbers);

// task 4

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

// task 5 (for)

const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
};

// for of

const cats2 = ['Gachito', 'Tom', 'Batman'];
for (let key of cats2) {
    console.log(key);
};

// task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers);
console.log(allNumbers.indexOf(8));

// task 7 

const binary = [0, 0, 0, 0];
console.log(binary[0] + '1' + binary[1] + '1' + binary[2] + '1' + binary[3]);

// adv 1

let palindrome = prompt('Введите слово:', '');
function checkWord(palindrome) {
    if (palindrome === palindrome.split('').reverse().join('')) {
        return alert('Это слово палиндром');
    } else {
        return alert('Это слово не палиндром');
    }
};
checkWord(palindrome);

// adv 2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let allMatrix = matrix[0].concat(matrix[1], matrix[2], matrix[3]);
let sum = 0;
let matrixQuantityValue = 0;
for (let a = 0; a < allMatrix.length; a++) {
    sum += allMatrix[a];
    matrixQuantityValue++;
};
let averageAllMatrix = sum / matrixQuantityValue;

console.log(averageAllMatrix);

// adv 3

let positiveNumber = [];
let negativeNumber = [];
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
for (let item of mixedNumbers) {
    if (item >= 0) {
        positiveNumber.push(item);
    } else if (item < 0) {
        negativeNumber.push(item);
    }
}
console.log(positiveNumber);
console.log(negativeNumber);

// adv 4

let randomNumberInPow = [];
let randomNumber = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
for (let numberInPow of randomNumber) {
    randomNumberInPow.push(Math.pow(numberInPow, 3));
}
console.log(randomNumber);
console.log(randomNumberInPow);