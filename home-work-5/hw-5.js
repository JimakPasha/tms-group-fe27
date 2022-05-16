'use strict'

//Task-1

const object = {
	userName:'Toni',
	age:50,
}
delete object.userName
delete object.age
console.log(object);


//Task-2
let hero = {
	name:'Iron-Man',
	number:1,
}
console.log('name' in hero, 'number' in hero);


//Task-3
const student = {
	name: 'John',
	age: 19,
	isHappy: true,
};

for (let key in student) {
	console.log(key);
}

for (let key in student) {
	console.log(student[key]);
}


//Task-4
const colors = {
	'ru pum pu ru rum': {
		red: 'красный',
		green: 'зеленый',
		blue: 'синий'
	},
};
console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue);


//Task-5
let salaries = {
	andrey: 500,
	sveta: 413,
	anton: 987,
	andre: 664,
	alexandra: 199,
}
let sum = 0;
for (let key in salaries) {
sum += salaries[key] / 5;
}
console.log(sum);


//Task-6
?


//Advanced

//Task-1
?



//Task-2
let student1 = {
	name: 'Polina',
	age: 27,
}

let student2 = {
	name: 'Polina',
	age: 27,
}

student1 = student2;
console.log(student1 === student2);


//Task-3
?




