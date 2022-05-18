'use strict'

// Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// Task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

// Task 3
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0); // 1 method
numbers.length = 0; // 2 method
console.log(numbers);

// Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Ivan');
students.shift();
students.unshift('Nikita');
console.log(students);

// Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for(let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for(let name of cats) {
    console.log(name);
}

// Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

// Task 7
const binary = [0, 0, 0, 0];
let string1 = binary.join(1);
console.log(string1);

//ADVANCED level

//Task 1
function string2(x) {
let polindrom = x.split('');
polindrom.reverse();
let result = polindrom.join('');
if(x == result) {
    console.log(true);
} else {
    console.log(false);
}
}
string2('bob');
//Task 2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let sum = 0;
let allNum = 0;
for(let i = 0; i < matrix.length; i++){
    for( let name15 of matrix[i]) {
        sum += name15;
        allNum += 1;
    }
} 
console.log(sum / allNum);

//Task 3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let positiveNumbers = [];
let negativeNumbers = [];
for(let number1 of mixedNumbers) {
    if(number1 >= 0 ) {
        positiveNumbers.push(number1);
    } else {
        negativeNumbers.push(number1)
    }
}
    console.log(positiveNumbers);
    console.log(negativeNumbers);
//Task 4
let massiv = [];
for(let i = 0; i < 5; i++){
    let a = Math.round(Math.random() * 10);
    massiv.push(a);
}
console.log(massiv);
let massiv2 = [];
for(let key of massiv) {
    massiv2.push(key ** 3)
}
console.log(massiv2);