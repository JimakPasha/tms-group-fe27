
// Task1
let st = 'true';
let fl = false;
let num = 17;
let und = undefined;
let age = null;

console.log(typeof st, typeof fl, typeof num, typeof und, typeof age);


//Task2

let height = 15;
let width = 20;
if (height > width) {
	console.log(height);
} else {
	console.log(width);
}

//Task3

for (i = 1; i <= 20; i++) {
	if (i % 3 == 0) {
		console.log(i);
	}
}

//Task4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = ((key && documents && pen) && (apple || orange));
if (shouldGoToWork == true) {
	console.log('Всё взяли');
} else {
	console.log('Что-то забыли?');
}

//Task5
let number = prompt('Введите число');
if ((number % 3 == 0) && (number % 5 == 0)) {
	alert('FizBuz');
} else if (number % 5 == 0) {
	alert('Fiz');
} else if (number % 3 == 0) {
	alert('Buz');
}


//Task6

let user = prompt('Сколько Вам лет?');
if ((user >= 16) && (user <= 18)) {
	alert('Можешь выкурить сигаретку, только маме не говори');
} else if (user > 18) {
	alert('Попей пивка');
} else if (user < 18) {
	alert('Пей колу');
}

//Task7

let userName = 'В какую сторону света Вы бы хотели отправиться?';
switch (userName) {
	case 'Юг':
		console.log('На юг пойдешь счастье найдешь.');
		break;
	case 'Север':
		console.log('На север пойдешь много денег найдешь.');
		break;
	case 'Запад':
		console.log('На запад пойдешь верного друга найдешь.');
		break;
	case 'Восток':
		console.log('На восток пойдешь разработчиком станешь.');
		break;
	default:
		console.log('Попробуйье, ещё раз.');
}

//ADVANCED level
//Task1
//Task 2
let userNumber = prompt('Введите число');
let numSubtract = prompt('Сколько отнять?');
let numAdd = prompt('Сколько прибавить?');
let numMultiply = prompt('На cколько умножить?');
let numDegree = prompt('На сколько разделить?');
let numAnswer = (((+userNumber - +numSubtract) + +numAdd) * +numMultiply) / +numDegree;
alert(`((((${userNumber} - ${numSubtract}) + ${numAdd}) * ${numMultiply}) / ${numDegree}) = ${numAnswer}`);

//Task3

for (let x = ''; x.length < 6;) {
	x += '#';
	console.log(x);
}


