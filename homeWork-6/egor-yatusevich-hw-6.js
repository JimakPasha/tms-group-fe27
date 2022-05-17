'use strict'

//Task 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length);



//Task 2

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);


//Task 3

const numbers = [5, 43, 63, 23, 90];

//1 способ
numbers.length = 0;
console.log(numbers);
// 2 способ
// numbers.splice(0, numbers.length);
// console.log(numbers);


//Task 4

const students = ['Polina', 'Dasha', 'Masha'];

// 1 Способ
students.pop();
students.push('Borya');
console.log(students);
students.unshift('Andrey')
console.log(students);

// // 2 способ
// students.splice(students.length - 1, 1, 'Borya');
// students.splice(0, 1, 'Andrey');
// console.log(students);



//Task 5

const cats = ['Gachito', 'Tom', 'Batman'];

for ( let i = 0; i < cats.length ; i++) {
    console.log(cats[i]);
}
for ( let cat of cats) {
    console.log(cat);
}


//Task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let commonLists = evenNumbers.concat(oddNumbers);
console.log(commonLists);
console.log("Индекс числа 8: " + commonLists.indexOf(8));


//Task 7

const binary = [0, 0, 0, 0];
let a = binary.join('1');
 console.log(a);
 

 //Task 1 advanced

 let polindrom = 'шалаш';
 let newWord = polindrom.split('');
 let isPolindrom = [].concat(newWord).reverse();

 console.log(newWord);
 console.log(isPolindrom);
 function fooPolindrom(newWord, isPolindrom)  {
    for (let i = 0; i < newWord.length; i++){
        if (newWord[i] === isPolindrom[i]){
        } else {
            return 'Число не полиндром!';
            break;
        }
    }
    return 'Число является полиндрмом!';
 }
 
 console.log(fooPolindrom(newWord, isPolindrom));


 //Task 2 advanced

 const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

for (let mat of matrix) {
    let sum = 0;
   for (let m of mat) {
    sum += m;
   }
   console.log(sum / mat.length);
}

//Task 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let positiveNumbers = [];
let negativeNumbers = [];
for (let number of mixedNumbers) {
if (number >= 0) {
    positiveNumbers.push(number);
} else {
    negativeNumbers.push(number);
}
}
console.log(positiveNumbers);
console.log(negativeNumbers);


//Task 4 Advanced

let arrDinamic = [];
for (let i = 0; i < 5; i++) {
    function getRandomInt(min, max) {
        let arrNum = Math.floor(Math.random() * (max - min)) + min;
    return arrNum;
  }
  
  arrDinamic.push(getRandomInt(1, 50));
}
let arrPowDinamic = [];
for (let i = 0; i < arrDinamic.length; i++) {
    arrPowDinamic[i] = arrDinamic[i] ** 3;
}
console.log(arrDinamic);
console.log(arrPowDinamic);
