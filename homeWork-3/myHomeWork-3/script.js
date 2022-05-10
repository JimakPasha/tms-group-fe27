//1
{

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log(typeof a,typeof b,typeof c,typeof d,typeof e);

}   



//2  
{

let height = 15;
let width = 20;
if (height<width) {
    console.log(width);
} else if (height > width) {
    console.log(height);
};

}  



//3
{
let three = 1;
for (; three <= 20; three++) {
    if (three % 3 == 0){
        console.log(three);
    }
}
}



//4
{

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork;

if(key && documents && pen && (apple || orange)){
    shouldGoToWork="не забудь фрукты";
    console.log(shouldGoToWork)
}else{
    shouldGoToWork="теперь можно идти";
    console.log(shouldGoToWork)
    }

}



//5
{

let num = prompt('введите число');
if ( num % 3 == 0 && num % 5 == 0){
    alert('FizBuz');
} else if (num % 5 == 0) {
    alert('Fiz');
} else if ( num % 3 == 0) {
    alert('Buz');
    };

}



//6
{

let age= prompt ("Введите свой возраст")
if ( age > 18 ) {
    alert('Попей пивка');
} else if (age < 16) {
    alert('Пей колу');
} else if (age >= 16 || age <= 18 ) {
    alert('Можешь выкурить сигаретку, только маме не говори')
};


}


//7
{

let userChoise = prompt('В какую сторону света хотите отправиться ?');
switch(userChoise) {
    case 'юг':
     alert("на юг пойдешь счастье найдешь");
     break;
    case 'север':
     alert("на север пойдешь много денег найдешь");
     break;
    case 'запад':
     alert("на запад пойдешь верного друга найдешь");
     break;
    case 'восток':
     alert("на восток пойдешь разработчиком станешь");
     break;
    default:
     alert("попробуй еще раз");
}

}


//2.1
{

let userName = prompt('Введите имя и фамилию').toLowerCase();
alert(`Привет, ${userName}`)

}


//task 2.2
{

let anyNumber = prompt('Введите число', '');
let subtraction = prompt('Сколько хотите отнять?', '');
let addition = prompt( 'Сколько хотите прибавить?', '');
let multiplication = prompt('На сколько умножить?', '');
let segmentation = prompt('На сколько разделить?', '');
alert((((anyNumber - subtraction) + addition) * multiplication) / segmentation);

}

//task 3
{

let stairs = '#';
for (; stairs.length < 7; stairs += '#') {
    console.log(stairs);
}

}
