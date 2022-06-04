'use strict'

//Task-1
const colors = ['red', 'green', 'blue']
console.log(colors.length)

//Task-2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1]);

//Task-3 первый способ
const numbers = [5, 43, 63, 23, 90]
numbers.length = 0;
console.log(numbers);

//второй способ
const numbers = [5, 43, 63, 23, 90]
numbers.splice(0);
console.log(numbers);

//Task-4
const students = ['Polina', 'Dasha', 'Masha']
students.pop(3);
students.push('Borya');
students.shift(1);
students.unshift('Andrey');
console.log(students);

//Task-5 цикл for
const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i < cats.length; i++) {
	console.log(cats[i]);
}
// цикл for of\
{
	const cats = ['Gachito', 'Tom', 'Batman']
	for (let pet of cats) {
		console.log(pet);
	}
}

//Task-6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const commonNumbers = evenNumbers.concat(oddNumbers);

console.log(commonNumbers.indexOf(8));

//Task-7 

const binary = [0, 0, 0, 0]
const str = binary.join('1');
console.log(str);


//Advanced

//Task-1
let palindrom = 'topot';
function checkPalndrom(a) {
	if (palindrom === palindrom.split('').reverse().join('')) {
		console.log('Является палиндромом');
	} else {
		console.log('Не является палиндромом');
	}
}
checkPalndrom(palindrom);

//Task-2

const matrix = [
	[12, 98, 78, 65, 23],
	[54, 76, 98, 43, 65],
	[13, 324, 65, 312],
	[9092, 22, 45, 90000],
];

let sumArray = 0;
let sum = 0;
let amount = 0;

for (let num of matrix) {
	for( let m of num) {
	sum += m;
	amount += 1;
}
}
sumArray = sum / amount;
console.log(sumArray);

//Task-3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let plusNumbers = [];
let minusNumbers = [];
for (let i of mixedNumbers) {
	if (i >= 0) {
		plusNumbers.push(i);
	} else {
		minusNumbers.push(i);
	}
}
console.log(plusNumbers);
console.log(minusNumbers);


//Task-4
let randomNumber = [];
let randomNumbers = [
	Math.floor(Math.random() * 100),
	Math.floor(Math.random() * 100),
	Math.floor(Math.random() * 100),
	Math.floor(Math.random() * 100),
	Math.floor(Math.random() * 100),
];
for(let number of randomNumbers) {
	randomNumber.push(Math.pow(number,3));
}
console.log(randomNumbers);
console.log(randomNumber);
