//task 1
{
    let str = 'true';
    let bool = false;
    let num = 17;
    let und = undefined;
    let zero = null;

    console.log(typeof str, typeof bool, typeof num, typeof und, typeof zero);
}

//task 2 
let height = 15;
let width = 20;

if (height > width) {
    console.log(height)}
    else  {
    console.log(width)}

// task 3

let yy = 1;

for (; yy <= 20; yy++) {
if (yy % 3 == 0){
    console.log(yy);
}
}


// task 4 

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork;

if (key && documents && pen &&(apple || orange)) {
    shouldGoToWork = "Yes, we can";
    console.log(shouldGoToWork);
} else {
    shouldGoToWork = "No , we can't";
    console.log(shouldGoToWork);
}


// task 5
{
    let num = prompt ('введите число');

    if ( num % 3 == 0 && num % 5 == 0){
        alert('FizBuz')
    } else if (num % 5 == 0) {
        alert('Fiz')
    } else if ( num % 3 == 0) {
        alert('Buz')
    } ;
}

// task 6 

//Вариант 1 
// let userAge = prompt ('Сколько тебе лет?'); 

// if (userAge >= 18) {
//     alert('попей пивка')
// } else if (userAge < 16) {
//     alert('пей колу')
// } else if (userAge >= 16 && userAge < 18){
//     alert('Можешь выкурить сигаретку, только маме не говори')
// };

//Вариант 2
let userAge = prompt ('Сколько тебе лет?');

if (userAge >= 18) {
    alert('попей пивка')
} else if (userAge >= 16 && userAge < 18) {
    alert('Можешь выкурить сигаретку, только маме не говори')
} else if (userAge < 18){
    alert('пей колу')
};

//вариант 3
let message = '';

if (userAge >= 18){
message += 'Попей пивка';
}else if (userAge < 18){
    message += 'Пей колу';
}

if(userAge >= 16){
    message += ', можешь выкурить сигаретку, только маме не говори'
}

alert(message);

// task 7 

let passed = false;

while (passed == false) {
    let country = prompt ('В какую сторону света Вы хотели бы отправиться');
switch(country.toLocaleLowerCase()) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь');
        passed = true;
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь');
        passed = true;
        break;
    case 'запад':
        alert('на запад пойдешь верного друга найдешь');
        passed = true;
        break;
    case 'восток':
        alert('на восток пойдешь разработчиком станешь'); 
        passed = true;
        break;   
    default:
        alert('Пройдите опрос еще раз');
        break;
}    
}



// task 1*

{
    let userName = prompt ('Как Вас зовут?');
    let temp = userName.toLowerCase();
    let newName = ' ';

    temp = temp.split(' ');

    let i = 0;
    for (; i < temp.length; i++){
        let firstLette = temp[i][0].toUpperCase();
        newName += firstLette+ temp[i].slice(1)+" ";
        }
    alert (`Привет, ${newName.trim()}!!!!`)
}

// task 2*

let num = +prompt ('Введите число?');
let minus = +prompt ('Сколько Вы хотите отнять от Вашего числа?');
let plus = +prompt ('Теперь, мы прибавим к нему чиcло?') ;
let multiply = +prompt ('Может умножим на что-нибудь?');
let divide = 0 ;
while (divide == 0){
    divide = +prompt('И последнее, это чиcло мы разделим на Ваше число?');
    if (divide == 0){
            alert('на 0 делить нельзя, учи математику')
    }
}
let answer = (((((num - minus) + plus) * multiply) / divide));
alert(answer) ;


//task 3* 

let lesenka = '';
for (let i = 0; i < 6; i++) {
    lesenka += '#';
    console.log(lesenka);
    }





