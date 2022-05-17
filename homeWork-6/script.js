'use strict'
//task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length-1]);
//or
console.log(animals.at(-1));

//task 3
const numbers = [5, 43, 63, 23, 90];
console.log(numbers.length = 0);
console.log(numbers.splice(0,[numbers.length]));
console.log(numbers);

//task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(2, 2, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);
//or
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

//task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for (let key of cats) {
    console.log(key);
}

//task 6 
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

//task 7
const binary = [0, 0, 0, 0];
String(binary);
console.log(binary[0] + '1' + binary[1] + '1' + binary[2] + '1' + binary[3]);
//or
let trueBinary = binary.join('1');
String(trueBinary);
console.log(trueBinary);

//advanced
//task 1
let palindrome = prompt('Введите слово', '');
function checkWord(palindrome) {
    if (palindrome === palindrome.split('').reverse().join('')) {
       return alert('Это слово палиндром');
    } else {
       return alert('Это слово не палиндром');
    }
}
checkWord(palindrome);

//task 2
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
}
let averageAllMatrix = sum / matrixQuantityValue;
console.log(averageAllMatrix);
//или вот такое решение,если нам нужно высчитать сначала среднее значение в каждом массиве в массиве и потом найти среднее значение от этих средних значений
let sumMatrixFirst = 0;
let quantityValueFirst = 0;
for (let matrixFirst = 0; matrixFirst < matrix[0].length; matrixFirst++) {
    sumMatrixFirst += matrix[0][matrixFirst];
    quantityValueFirst++;
}
let averageMatrixFirst = sumMatrixFirst / quantityValueFirst;
console.log(averageMatrixFirst);

let sumMatrixSecond = 0;
let quantityValueSecond = 0;
for (let matrixSecond = 0; matrixSecond < matrix[1].length; matrixSecond++) {
    sumMatrixSecond += matrix[1][matrixSecond];
    quantityValueSecond++;
}
let averageMatrixSecond = sumMatrixSecond / quantityValueSecond;
console.log(averageMatrixSecond);

let sumMatrixThird = 0;
let quantityValueThird = 0;
for (let matrixThird = 0; matrixThird < matrix[2].length; matrixThird++) {
    sumMatrixThird += matrix[2][matrixThird];
    quantityValueThird++;
}
let averageMatrixThird = sumMatrixThird / quantityValueThird;
console.log(averageMatrixThird);

let sumMatrixFourth = 0;
let quantityValueFourth = 0;
for (let matrixFourth = 0; matrixFourth < matrix[3].length; matrixFourth++) {
    sumMatrixFourth += matrix[3][matrixFourth];
    quantityValueFourth++;
}
let averageMatrixFourth = sumMatrixFourth / quantityValueFourth;
console.log(averageMatrixFourth);

let averageMatrix = (averageMatrixFirst + averageMatrixSecond + averageMatrixThird + averageMatrixFourth) / matrix.length;
console.log(averageMatrix);

//task 3
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
//2 способ
// let positiveNumber;
// let negativeNumber;
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
// for (let item of mixedNumbers) {
//     positiveNumber = mixedNumbers.filter(item => item >= 0);
//     negativeNumber = mixedNumbers.filter(item => item < 0);
// }
// console.log(positiveNumber);
// console.log(negativeNumber);
//3 способ
// let positiveNumber = [].concat(mixedNumbers[1], mixedNumbers[3], mixedNumbers[4], mixedNumbers[6], mixedNumbers[7]);
// let negativeNumber = [].concat(mixedNumbers[0], mixedNumbers[2], mixedNumbers[5]);
// console.log(positiveNumber);
// console.log(negativeNumber);

//task 4
let randomNumberInPow = [];
let randomNumber = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
for (let numberInPow of randomNumber) {
    randomNumberInPow.push(Math.pow(numberInPow, 3));
}
console.log(randomNumber);
console.log(randomNumberInPow);