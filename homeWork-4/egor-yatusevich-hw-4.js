'use strict'
//Task 1
function getSum(num) {
    let a = 0;
    for (let i = 0; i <= num; i++) {  
        a = a + i; 
    }
     console.log(a);
}

getSum(100);

//Task 2
function credit(sumCredit) {
  
  let year = 5;
  let everyYearPercent = 0.17;
  sumCredit = sumCredit * everyYearPercent * year;
  return sumCredit;
}
console.log("Переплата равна: ", credit(1000), "рублей!");
// Тут я счиатл без правильной формулы, чтобы не заморачиваться и не выводить ее, поэтому значение не верное, но по факту нам ведь надо именно функциями научиться пользоваться, а не кредит высчитывать)

 //Task 3
 
 function trimString(str, from, to) {
   return str.slice(from, to);
 }

 console.log(trimString('I love my girlfriend', 1, 15));


//  //Task 4

 function getSumNumbers(number) {
  let a;
  a = (number.toString()).split('');
  let b = 0;
    for (let i = 0; i < a.length; i++) {
      b = b + Number(a[i]);
    }
    console.log(b);
 }
 getSumNumbers(353);

 //Task 5
                     
 function getSum(a, b){
  let c = 0;
  if (!(a%1) && !(b%1)) {
    if (b < a){
      for (i = b; i <= a; i++) {
      c += i;
      }
      return c;
    } else if (a < b) {
      for (i = a; i <= b; i++) {
      c += i;
      }
    return c;
    } else if (a === b) {
      return a;
    }

  } else {
    return "Вы ввели неверное число!";
  }
 }
 console.log(getSum(1, 0.9));


//Task 6

 function fooboo(bool, foo, boo) {
   if (bool) {
      foo();
   } else {
    boo();
   }
 }
 let bool = true;
 let foo = function() {
   console.log("foo")
 };
 let boo = function() {
  console.log("boo")
};

fooboo(bool, foo, boo);


//Task 1 Advanced

function triangle(a, b, c) {
  if (a <= b + c && b <= a + c && c <= b + a) {
      return true + " Треугольник можно построить!";
  } else {
    return false + " Треугольник нельзя построить!";
  }
}
console.log(triangle(10, 5, 3));

//Task 2 Advanced

 function chocolate(n, m) {
   if ( n <= 0 || m <= 0 || n % 1 || m % 1) {
     return 0 + ' Обойдешься без шоколадки';
   } else {
     return n * m - 1 + ' Минимальное число надолмов!';
   }
 }
 console.log(chocolate(3, 0));

//Task 3 Advanced

const fee = 0.20;
const pricePhone = 1250;
const accesoriesPhone = 120;
const balance = 4000;
// let balance = prompt('Сколько у вас деняк?')
function buyPhone(balance, accesoriesPhone, pricePhone, fee) {
  fee = (pricePhone + accesoriesPhone) * fee;
  pricePhone = pricePhone + accesoriesPhone + fee;
  // alert('Сумма налога ' + fee.toFixed(2) + '$');
  // alert('Общая сумма ' + pricePhone.toFixed(2) + '$');
  console.log('Сумма налога ' + fee.toFixed(2) + '$');
  console.log('Общая сумма ' + pricePhone.toFixed(2) + '$');
  if (balance>=pricePhone){
    for (i = 0; pricePhone <= balance; i++ ) {
      balance -= pricePhone;
    }
    console.log('Сколько телефонов вы купили: ' + i);
    // alert('Сколько телефонов вы купили: ' + i);
  } else {
    console.log('Надо отработать еще несколько смен на заводе, чтобы купить телефон((9(');
    // alert('Надо отработать еще несколько смен на заводе, чтобы купить телефон((9(');
  } 
}
buyPhone(balance, accesoriesPhone, pricePhone, fee);

// Я еще думал определить fee через function expression, то есть отдельной функцией,
// и передать его в качестве аргумента основной функции.Так нужно было? 
// Просто вы упоминали что expression желательно нам сейчас не использовать, вот я и сделал так, как сделал