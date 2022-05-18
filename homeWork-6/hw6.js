'use strict'

// Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);


// Task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));
console.log(animals[animals.length - 1]);


// Task 3
// 1-й способ
const number = [5, 43, 63, 23, 90];
number.length = 0;
console.log(number);
// 2-ой способ
const number2 = [5, 43, 63, 23, 90];
number2.splice(0);
console.log(number2);


// Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(-1, 1, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);


// Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for (let item of cats) {
    console.log(item);
}


// Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers.indexOf(8, 0));

// Task 7
const binary = [0, 0, 0, 0];
const str = binary.join('1');
console.log(str);
console.log(typeof str);

// Advanced
// Task 1
function checkPalindrome(word) {
    word = word.toLowerCase();
    for (let i = 0; i < (word.length / 2); i++) {
        if (word[i] !== word[word.length - ++i]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome('Sos')); // true


// Task 2
const matrix = [
    [12, 98, 78, 65, 23],  // 55.2
    [54, 76, 98, 43, 65],  // 67.2
    [13, 324, 65, 312],    // 178.5
    [9092, 22, 45, 90000], // 24789.75
];

let sumMatrix = 0;
let colNumbers = 0;
let averageNumber = 0;
let allSumMatrix = 0;

for (let number of matrix) {
    for (let i = 0; i < number.length; i++) {
        sumMatrix += number[i];
    }
    
    averageNumber = sumMatrix / number.length;
    console.log(averageNumber);
    colNumbers += number.length;
    allSumMatrix += sumMatrix;
    sumMatrix = 0;
}
console.log(allSumMatrix/ colNumbers); //5582.5 ср.знач. в matrix.



// Task 3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const negativeNumbers = [];
const positiveNumbers = [];
for (let number of mixedNumbers) {
   (number >= 0) ? positiveNumbers.push(number) :
   negativeNumbers.push(number);
}
console.log(negativeNumbers);
console.log(positiveNumbers);


// Task 4
const someNumbers = [2, 5, -8, 34, 0];
const expNumbers = [];
for (let number of someNumbers) {
    expNumbers.push(Math.pow(number, 3));
}
console.log(someNumbers);
console.log(expNumbers);