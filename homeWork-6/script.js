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
function palindrome(str){
    return str ===str.split('').reverse().join('');
}

//#### Task 2 👨‍🏫
// Возникли сложности с этим задание , с самим многомерным массивом , если упростить задачу , то все хорошо )
// буду еще думать как сделть это с многомерным массивом 
const matrix = [
    12, 98, 78, 65, 23,
    // [54, 76, 98, 43, 65],
    // [13, 324, 65, 312],
    // [9092, 22, 45, 90000],
]
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i];
}

let result = sum/matrix.length;
console.log(result);

// Остальные задачи в процессе 