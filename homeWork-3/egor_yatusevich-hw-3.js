   'use strict'

   //Task 1
   let a = 'true';
    let b = false;
    let c = 17;
    let d;
    let e = null;
    console.log("Task 1:");
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(e));


//Task 2
    let height = 15;
    let width = 20;
    console.log("Task 2:");
    if (width>height) {
        console.log("width =", width);
    } else {
        console.log("height =", height);  
    }


//Task 3
console.log("Task:3:")
for (let i = 1; i<=20; i++){
if (!(i % 3)) {
    console.log(i);
}
}

//Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork;
console.log("Task 4:");
if (key && documents && pen && (apple || orange)) {
    shouldGoToWork = "Можем идти на работу!";
    console.log(shouldGoToWork);
} else {
    shouldGoToWork ="Не можем пойти на работу!";
    console.log(shouldGoToWork);  
}


//Task 5
let num;
num = prompt("Введите число!");
if (!(num % 5) && !(num % 3)) {
    alert("BuzFiz");
} else if (!(num % 3)) {
    alert("Buz");
} else if (!(num % 5)) {
    alert("Fiz");
} else {
    alert("Не делиться ни на 3 ни на 5");  
}


//Task 6
let yourAge = prompt("Сколько бродишь на этом свете, Дружочек?");
if (yourAge  == 16 || yourAge == 17) {
    alert("Можешь выкурить сигаретку, только маме не говори");
}
else if (yourAge < 18) {
    alert("Попей колу");
} else if (yourAge >= 18) {
    alert("Попей пивка!");
}

//Task 7

let userDirection = prompt("Куда путь держишь, странник?(север, юг, запад, восток)");
switch (userDirection) {
    case "юг":
        alert(" На юг пойдешь счастье найдешь!");
        break;
    case "север":
        alert("На север пойдешь - много денег найдешь!");
        break;
    case "запад":
        alert("На запад пойдешь - верного друга найдешь!");
        break;
    case "восток":
        alert(" На восток пойдешь - разработчиком станешь!");
        break;
    default:
        alert("Все херня, давай по новой!");
}

//Task 1 Advance
let yourName = prompt("Какое у вас ФИО?");
yourName = yourName.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
 alert(yourName);


//Task 2 Advance
let userNum = prompt("Введите число с которым хотите произвести математические операции!");
let minus = prompt("Введите число, которое вы хотите отнять!");
let result = userNum;
alert(result -= +minus);
let plus = prompt("Введите число, которое вы хотите прибавить!");
alert(result += +plus);
let multiply = prompt("Введите число, на которое вы хотите умножить!");
alert(result *= +multiply);
let division = prompt("Введите число, на которое вы хотите поделить!");
alert(result /= +division);
alert(`((((${userNum} - ${minus}) + ${plus}) * ${multiply}) / ${division} = ${result})`);


//Task 3 Advance
let hash = "";
for (i = 0; i < 6; i++) {
    hash += "#";
    console.log(hash);
}

