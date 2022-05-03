'use strict'

//Task 1
let x = 20;
let y = 58;
let z = 42;
console.log("Result Task 1:", x + y + z);

//Task 2
let secondsInMinute = 60;
let minuteInHour = 60;
let hourInDay = 24;
let dayInYear = 365;
let myAge = 22;
let myAgeInSeconds = secondsInMinute * minuteInHour * hourInDay * dayInYear * myAge;
console.log("Result Task 2: ", myAgeInSeconds, "seconds in my life!");


//Task 3
console.log('Task 3:')
let count = 42;
let userName = '42';
console.log("Type count is", typeof(count.toString()));
console.log("Type count is", typeof(String(count)));
console.log("Type userName is", typeof(+userName));
console.log("Type userName is", typeof(Number(userName)));

//Task 4
  let a = 1;
  let b = 2;
  let c = "белых медведей";
  console.log("Task 4:", String(a) + b + " " + c);

//Task 5
  let access = "доступ";
  let marine = "морпех";
  let frost = "наледь";
  let reproach = "попрек";
  let chopped = "рубило";
  let lengthWords = access + marine + frost + reproach + chopped;
  console.log("Task 5:", lengthWords.length);

  //Task 6 
  console.log("Task 6:")
  let num = 1;
  let text = "Egor";
  let bool = false;
  console.log( `Variable: ${num} have type: ${typeof(num)}`);
  console.log( `Variable: ${text} have type: ${typeof(text)}`);
  console.log( `Variable: ${bool} have type: ${typeof(bool)}`);

  //Task 7
  const user = prompt("Как вас зовут?");
  const age = prompt("Какой у вас возраст?");
  console.log("Task 6:");
  console.log("Имя ползователя",user);
  console.log("Возраст ползователя",age);
  
//Task 1 Advanced
  a = 4;
  b = 3;
  [a,b] = [b,a];
  console.log("Task 1 Advanced:","Переменная b =", b, "Переменная a =", a);


//Task 2 Advanced
  let codeWord1 = "обернись";
  let codeWord2 = "неужели";
  let codeWord3 = "огурцы";
  let codeWord4 = "липкие";
  let codeWord5 = "?!";
  let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
  console.log("Task 2 Advanced:", cipher);


