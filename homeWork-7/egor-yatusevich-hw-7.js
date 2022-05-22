'use strict'
//Task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(item => console.log(item));
fibonacci.forEach(function (item) {
console.log(item);
})


//Task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const newUsers = users.map((item, index, array) => String(' Member ' + index + ': ' + item));
console.log(newUsers);
const newUsers2 = users.map(function(item, index) {
    return `Member ${index}: ${item}`;
});
console.log(newUsers2);

//Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

const num = numbers.filter((item) => item > 0);
console.log(num);

const num2 = numbers.filter(function(item) {
    return item > 0;
})
console.log(num2);



//Nask 4
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];


let result = fibonacci.reduce( (acc, item) => acc += item);
console.log(result);


let result2 = fibonacci.reduce(function(acc, item) {
    return acc += item;
} )
console.log(result2);


//Nask 5

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let num = numbers.find((item) => !(item % 2) );
console.log(num);

let num2 = numbers.find(function(item) {
    return !(item % 2);
})
console.log(num2);



// Task 1 advanced
function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.sumCredit = function() {
        
    if (rate === 'A') {
        return  salary * 12;
    } else  if (rate === 'B') {
        return  salary * 9;
    } else  if (rate === 'C') {
        return  salary * 6;
    } else {
        return 'Плохой рейтинг, кредит дать не можем!';
    }
}
}
let student1 = new Student(1200, 'C', 'Pasha');
let student2 = new Student(1800, 'B', 'Sasha');
let student3 = new Student(1000, 'D', 'Ivan');
let student4 = new Student(800, 'D', 'Dasha');
let student5 = new Student(2200, 'A', 'Serhei');
let student6 = new Student(2000, 'A', 'Artur');

let studentArrayCredit = [].concat(student1.sumCredit(), student2.sumCredit(),
    student3.sumCredit(), student4.sumCredit(), student5.sumCredit(), student6.sumCredit());

function studentCreditSum(studentArrayCredit) {
    return studentArrayCredit.reduce((acc, item, index) => (typeof item === 'number') ? acc+=item : acc);
}
console.log(` Общая сумма кредита на группу составляет: ${studentCreditSum(studentArrayCredit)}`);

//Task 2 advanced
let troll = "This website is for losers LOL!";
let vowels = ['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O'];
let troll2 = troll.split('');
function areVowels(troll2, vowels){
    return troll2.filter(item => !vowels.includes(item)).join('');
}
console.log(areVowels(troll2,vowels));

//Task 3 advanced

let acum = 'abcde';
acum = acum.split('');
acum = acum.map(function(item, index) {
    let b = '';
    while(b.length < index + 1 ) {
        b+=item;
   } 
   return b[0].toUpperCase() + b.slice(1);
})

console.log(acum.join('-'));


//Task 4 advansed
function highAndLow(str) {
    str = str.split(' ').map(Number).sort((a,b) => a - b);
    return str[str.length -1] + ' ' + str[0];
}
console.log(highAndLow("2 4 45 5 -8"));


//Остальные к сожалению не успел сделать(((