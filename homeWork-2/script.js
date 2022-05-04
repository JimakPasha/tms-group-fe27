'use strict';
    // Task 1 
    let x = 20;
    let y = 58;
    let z = 42;
    let xyz = x + y + z;
    console.log(xyz);

    // Task 2
    let NumberSeconds = 60;
    let NumberMinutes = 60;
    let NumberHours = 24;
    let NumberDays = 365;

    let myAgeInSeconds = 30 * NumberSeconds * NumberMinutes * NumberHours * NumberDays;
    console.log(myAgeInSeconds);

    // Task 3
    let count = 42;
    let userName = '42';
    console.log(Number(userName));
    console.log(+userName);
    console.log(''+count);
    console.log(String(count));

    // Task 4
    let a = 1;
    let b = 2;
    let c = "белых медведей";
    console.log(String(a) + String(b) + ' '+ c);
    // Task 5
    
    let access = 'доступ';
    let marine = 'морпех';
    let frost = 'наледь';
    let reproach = 'попрек';
    let chopped = 'рубило';  
    let lengthWords = access + marine + frost + reproach + chopped;
    console.log(lengthWords.length);

    // Task 6
    let t = 'текст';
    let g = 54;
    let n = true;
    console.log(`t: ${t} have type:, ${typeof(t)}; g: ${g} have type:${typeof(g)}; n: ${n} have type: ${typeof(n)}`);


    // Task 7
    const UserName1 = prompt('укажите имя и возраст');
    console.log(UserName1);
  