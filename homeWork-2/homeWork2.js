

//1
let x = 20;
let y = 58;
let z = 42;
let a = x+y+z;
console.log(a);


//2
const sec = 1*60;
const min = 1*60;
const hour = 1*24;
const days = 1*364;

const myAgeInSeconds = (sec*min*hour*days)*28;
console.log(myAgeInSeconds);

//3
let count = 42;
let userName = '42';

console.log(typeof String(count));
console.log(typeof Number(userName));

//4
let d = 1;
let b = 2;
let c = "белых медведей";
console.log(String(d)+String(b),c);

//5
let p = 'доступ';
let o = 'морпех';
let i = 'наледь';
let u = 'попрек';
let l = 'рубило';
console.log((p.length)+(o.length)+(i.length)+(u.length)+(l.length));


//6

let st = 'Привет';
let nm = 22;
let fl = false ;

console.log(`Varible:${st}have type:${String}`);
console.log(`Varible:${nm}have type:${Number}`);
console.log(`Varible:${fl}have type:${Boolean}`);



//2.1
let a1 = 4;
let b1 = 3;

[a1, b1] = [b1, a1];
console.log(a1, b1);



//2.2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = (codeWord1[1])+(codeWord2[1])+(codeWord3[1])+(codeWord4[1])+(codeWord5[1]);
console.log(cipher);





// 7.  тут что то не сходится с консолью, значение из промта про не присваивается переменной
let userName2 = prompt('Как тебя зовут ?');
let age = prompt('сколько тебе лет ?') 
console.log(`Уже взрослый, ${userName2} ${age} :)`)




