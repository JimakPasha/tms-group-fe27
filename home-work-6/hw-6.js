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
