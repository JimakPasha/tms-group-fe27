// task 1

let x=20;
let y=58;
let z=42;
function sum (x,y,z) {
    return(x+z+y)
}; 
console.log(sum(x,y,z));

//console.log (x+y+z);

//task 2
let second=1;
let min=60*second;
let hour=60*min;
let day=24*hour;
let year=day*365;
let myAge=23;

let myAgeInSeconds=myAge*year;
console.log(myAgeInSeconds);


//task 3
let count = 42;
let userName = '42';
console.log(count.toString());
console.log(count, String(count));

console.log(+userName);
console.log(Number(userName));

//task 4
{
let a = 1;
let b = 2;
let c = "белых медведей";

console.log(a.toString()+b.toString(),c);
}
//task 5
let a='доступ'; 
let b='морпех';
let c='наледь';
let d='попрек';
let e='рубило';
let lengthWords= (a+b+c+d+e);
console.log(lengthWords.length);

//task 6


let str='привет';
let num=2;
let bool=true;
console.log(`Variable:${Object.keys({str})[0]} have type: ${typeof str}`);
console.log(`Variable:${Object.keys({num})[0]} have type: ${typeof num}`);
console.log(`Variable:${Object.keys({bool})[0]} have type: ${typeof bool}`);

//task 7
{
let userName = prompt('Как тебя зовут?');
let userAge = prompt (`Сколько тебе лет?`);

alert(`Привет, ${userName}, твой возраст - ${userAge}`);

console.log(`Привет, ${userName}, твой возраст - ${userAge}`);

}
//task 8
{
    let a = 4
    let b = 3


console.log(a, b);
b = [a, a = b][0];
console.log(a, b);
}

//task 9
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher =codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1];

console.log(cipher);
