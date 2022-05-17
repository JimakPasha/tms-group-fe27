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
let login = prompt('Введите логин');
let password = prompt('Введите пороль');

let loginPassword = {
	login,
	password,
};

let confirmLogin = prompt('Подтвердите логин');
let confirmPassword = prompt('Подтвердите пороль');

if(
	loginPassword.login === confirmLogin && 
	loginPassword.password === confirmPassword
) {
	alert('Авторизация выполнена');
} else {
	alert('Неверные данные');
}

//Advanced

//Task-1
function getSoccerScore2(goalTim1, goalTim2) {
	let numberString = {
		1: 'one', 
		2: 'two',
		3: 'three',
		4: 'fhour', 
		5: 'five', 
		6: 'six',
		7: 'seven', 
		8: 'eight', 
		9: 'nine',
		0: 'zero',
};
	return console.log(`${numberString[goalTim1]} : ${numberString[goalTim2]}`);
}
getSoccerScore2(0, 0);
getSoccerScore2(5, 1);


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
const animals = {
	cat: {
		name: 'Енчик',
		age: 3,
	},
	dog: {
		name: 'Орео',
		age: 2,
	},
	};

	console.log(animals?.user?.name);

