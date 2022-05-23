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
// не успел сделать

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
        n !== 'u') ? accum += letter :
        accum);
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
console.log('A'.charCodeAt());
// не успел сделать

// Task 7
// не успел сделать
