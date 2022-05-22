// Task1
const colors = ['red', 'green', 'blue',];
console.log(colors.length);

//Task2
const animals = ['monkey', 'dog', 'cat',];
console.log(animals.pop());

//Task3
const numbers = [5, 43, 55, 33, 99];
numbers.length = 0;
console.log(numbers);

//Task4
const students = ['Polina', 'Dasha', 'Masha',];
// delete last arrItm
students.pop();
// add last arrItm
students.push('Borya');
// delete first arrItm
students.shift();
// add first arrItm
students.unshift('Andrey');
console.log(students);

//Task5
//!1) for (;;)
const cats = ['Gachito', 'Tom', 'Batman',];
for (let i = 0; i <= cats.length; i++) {
    let resultCat = '';
    resultCat += cats[i];
}
console.log(cats);
//!2) for of Не вспомнил пришлось за гуглить:(
for (let arr of cats) {
    arr += cats;
}
console.log(cats);

//Task6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
//? 1 method concat
let allNumArr = oddNumbers.concat(evenNumbers);
console.log(allNumArr[8]);
//? 2 method join str error
let allNumStr = oddNumbers.join(', ') + evenNumbers.join(', ');
console.log(allNumStr);

//Task7
const binary = [0, 0, 0, 0];
let binaryStr = binary.join('1');
console.log(binaryStr);

//Advanced 1
//! 1 method
let str = '';
let arr = Array.from(str);
let arrReverse = arr;
arrReverse.reverse(arr);
function checkPolifil(arr, arrReverse) {
    if (arr === arrReverse) {
        console.log(`Polifil (true):${arr}`);
    } else {
        console.log('false this word not polifil');
    }

}
checkPolifil('шалаш', 'шалаш');

//! 2 method
{
let polindrom = (str) => str === str.split('').reverse().join('');
let result = polindrom('шалаш');
result ? console.log(`${result}: все верно`): console.log(`${result}: нет не правильно`);
}

//Advanced 2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
let sum = 0;
let average = 0; 
for(let math of matrix) {
    for(m of math) {
        sum += m;
        average += 1;
    }
    console.log(sum / average);
}

//Advanced 3
{
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let minusNumbers = mixedNumbers.filter(num => num < 0);
console.log(minusNumbers);
let plusNumbers = mixedNumbers.filter(num => num > 0);
console.log(plusNumbers);
}
//Advanced 4
{
let arr = [];
for(let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 100))
}
console.log(arr);
}