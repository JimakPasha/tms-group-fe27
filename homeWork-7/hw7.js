'use strict';

// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
89, 144, 233, 377, 610, 987];
fibonacci.forEach(function (number) {
    console.log(number);
});
fibonacci.forEach(number => console.log(number));

// Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy',
 'Polina', 'Anton'];

 const newUsers = users.map((name, index) => {
    return (`member ${index + 1}:${name}`); 
});
console.log(newUsers);

const newUsers2 = users.map(function (name, index) {
    return (`member ${index + 1}:${name}`); 
});
console.log(newUsers2);

// Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];

const newNumbers = numbers.filter(function (item) {
    return item >= 0;
});

const newNumbers2 = numbers.filter((item) => item >= 0);


// Task 4
{
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 
21, 34, 55, 89, 144, 233, 377, 610, 987];

const sumFib = fibonacci.reduce(function (accum, value) {
    return accum + value;
});

const sumFib2 = fibonacci.reduce((accum, value) => {
    return accum + value;
});
}

// Task 5
{
  const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

  const evenNum = numbers.find(function (number) {
    return number % 2 === 0;
  });
  
  const evenNum2 = numbers.find((number) => {
    return number % 2 === 0;
  });
}

// Advanced level
// Task 1
function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    this.showCedit = function () {
        if (this.rate === 'A') {
            return this.salary * 12;
        } else if (this.rate === 'B') {
            return this.salary * 9;
        } else if (this.rate === 'C') {
            return this.salary * 6;
        } else if (this.rate === 'D') {
            return 0;
        }
    };
}
let student1 = new Student('Anton', 1000, 'A');
let student2 = new Student('Sveta', 500, 'B');
let student3 = new Student('Katya', 700, 'C');
let student4 = new Student('Dima', 800, 'B');
let student5 = new Student('Natali', 300, 'D');

const students = [];
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
students.push(student5);

function showGroupCredit(students) {
    const sumAll = students.reduce((acc, element) => {
        acc += element.showCedit();
        return acc;
    }, 0);
    return sumAll;
}


// Task 2
function chengeString(messege) {
    messege = messege.split('');
    const newMsg = messege.reduce((accum, letter) => {
        let n = letter[0].toLowerCase();
        return (
        (n !== 'a' &&
        n !== 'e' &&
        n !== 'i' &&
        n !== 'o' && 
        n !== 'u') ? accum += letter : accum);
    }, '');
    return newMsg;
}
console.log(chengeString('This website is for losers LOL!'));

// Task 3
function accum(string) {
    string = string.split('');
    const newStr = string.reduce((sum, letter, index) => {
        let x = letter.toUpperCase();
        let n = letter.toLowerCase();
        sum += x + n.repeat(index) + '-';
        return sum;
    }, '');
    return newStr.slice(0, (newStr.length - 1));
}
console.log(accum('RqaEzty'));

// Task 4

function highAndLow(stringNumbers) {
    stringNumbers = stringNumbers.split(' ');
    const newStr = stringNumbers.filter((item) => {
        return item !== ' ';
    });
    const maxNum = newStr.reduce((ac, item) => {
        return (ac > item) ? ac : item;
    }, newStr[0]);
    const minNum = newStr.reduce((ac, item) => {
        return (ac < item) ? ac : item;
    }, newStr[0]);
    return  maxNum + ' ' + minNum;
}
console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow("1 9 3 4 -5"));

// Task 5
function isIsogram(string) {
    string = string.toLowerCase().split('');
    const newStr = string.reduce((acc, item) => {
        if (acc[item]) {
            return false;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, []);
    return (newStr) ? true : false;   
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// Task 6
function transformString(string) {
    string = string.split('');
    const total1 = string.reduce((ac, item) => {
        ac += item.charCodeAt();
        return ac;
    }, '');

    let sumTotal1 = 0;
    let total2 = '';
    let sumTotal2 = 0;
    for (let i = 0; i < total1.length; i++) { 
        sumTotal1 += +total1[i]; // находим сумму цифр total1
        if (total1[i] === '7') {
            total2 += '1';
            sumTotal2 += 1; // находим сумму цифр total2 (замена 7 на 1)
        } else {
            total2 += total1[i];
            sumTotal2 += +total1[i]; // находим сумму цифр total2
        }
    }
    console.log(total1, sumTotal1); //656667 36
    console.log(total2, sumTotal2); //656661 30
    
    return sumTotal1 - sumTotal2; //6
}
console.log(transformString('ABC'));


// Task 7
// не успел сделать
