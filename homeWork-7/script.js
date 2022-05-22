'use strict'
//task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => {
    console.log(element);
});
fibonacci.forEach(function findElement(element) {
    console.log(element);
});

//task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let copyUsers = users.map((element, index) => {
        return(`member ${Number(index)+ 1}: ${element}`
        );
    });
console.log(copyUsers);

let copyUsersDeclaration = users.map(function copyMember(element, index) {
    return(`member ${Number(index)+ 1}: ${element}`
    );
});
console.log(copyUsersDeclaration);

//task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
let positiveNumber = numbers.filter(item => {
    return item > 0;
});
console.log(positiveNumber);

let positiveNumberDeclaration = numbers.filter(function posNumber(item) {
    return item > 0;
});
console.log(positiveNumberDeclaration);

//task 4
const fibonacciSum = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let sumFibonacci = fibonacciSum.reduce((accum, value) => {
    return accum + value;
});
console.log(sumFibonacci);

let sumFibonacciDeclaration = fibonacciSum.reduce(function getSum(accum, value) {
    return accum + value;
});
console.log(sumFibonacciDeclaration);

//task 5
const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let evenNumbers = number.find(item => {
    return item % 2 === 0;
});
console.log(evenNumbers);

let evenNumbersDeclaration = number.find(function findEvenNumber(item) {
    return item % 2 === 0;
});
console.log(evenNumbersDeclaration);

//advanced 
//task 1
function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.feasibleCredit = function() {
        if (rate === 'A') {
            console.log(12 * salary);
            return 12 * salary;
        } else if (rate === 'B') {
            console.log(9 * salary);
            return 9 * salary;
        } else if (rate === 'C') {
            console.log(6 * salary);
            return 6 * salary;
        } else if (rate === 'D') {
            console.log('плохой рейтинг и мы не можем дать кредит');
            return 'плохой рейтинг и мы не можем дать кредит';
        
        }
}
}
let student1 = new Student('800', 'D', 'Alex');
let student2 = new Student('1200', 'D', 'Kate');
let student3 = new Student('1500', 'C', 'Ann');
let student4 = new Student('2000', 'B', 'Tim');
let student5 = new Student('2300', 'A', 'Ben');
student1.feasibleCredit();
console.log(student1);
student2.feasibleCredit();
console.log(student2);
student3.feasibleCredit();
console.log(student3);
student4.feasibleCredit();
console.log(student4);
student5.feasibleCredit();
console.log(student5);

let students = [].concat(student1, student2, student3, student4, student5);
console.log(students);

let getGroupCredit = students.reduce((accum, item) => {
    let sumA;
    let sumB;
    let sumC;
    for (let y = 0; y < students.length; y++) {
    if (students[y].rate === 'A') {
        sumA = +(students[y].salary * 12);
    } else if (students[y].rate === 'B') {
        sumB = +(students[y].salary * 9);
    } else if (students[y].rate === 'C') {
        sumC = +(students[y].salary * 6);
    }
}
    return accum = sumA + sumB + sumC;
});
console.log(getGroupCredit);

//task 2
function cutVowel(someString) {
    let consonant = someString.replace(/[aeiouAEIOU]/g,"");
    return consonant;
}
console.log(cutVowel('This website is for losers LOL!'));

//task 3
let letter = 'abcDEf';
let letterMultiply = letter.split('').map((element, index) => {
    return element = element.charAt(0).toUpperCase() + element.slice(1) + element.toLowerCase().repeat(index + 1);
});
console.log(letterMultiply.join('-'));

//task 4
let numberString = '3 -1 8 -4 2';
let arrNumberString = numberString.split(' ');
console.log(arrNumberString);
let arrMaxMin = (`${Math.max.apply(null, arrNumberString)} ${Math.min.apply(null, arrNumberString)}`);
console.log(arrMaxMin);

//task 5
let isogrammString;
function isogramma(isogrammString) {
    for (let i = 0; i < isogrammString.length; i++) {
    if (isogrammString.split(isogrammString[i]).length-1 > 1) {
        return false;
    } else {
        return true;
    }
}
} 
console.log(isogramma('aba'));
console.log(isogramma('Dermatoglyphics'));

//task 6
let words = 'ABC';
let total = words.split('').reduce((word, letter) => {
    word.push(letter.charCodeAt());
    return word;
}, []);
let total1 = total.join('');
console.log(total1);

let total2 = 0;
for (let i = 0; i < total1.length; i++) {
       total2 = total1.replace(7, 1) ;
    }
console.log(total2);

function getDifferenceTotal(total1, total2) {
    let sumOfTotal1 = 0;
    let sumOfTotal2 = 0;
    for (let a = 0; a < total1.length; a++) {
         sumOfTotal1 += +total1[a];
     }
    for (let b = 0; b < total2.length; b++) {
        sumOfTotal2 += +total2[b];
    }
    return sumOfTotal1 - sumOfTotal2;
}
console.log(getDifferenceTotal(total1, total2));

//task 7
let word = 'success';
let duplicateWord = word.split('').map((element, index, array) => {
    let result = '';
    if (array.indexOf(element) === array.lastIndexOf(element)) {
        result = '(';
    } else {
        result = ')'
    }
    return result;
});
console.log(duplicateWord.join(''));
