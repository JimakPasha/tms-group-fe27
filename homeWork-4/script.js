'use strict';

// Task 1 

function getSum(x) {
    let b = 0;
    for(let i = 0; i <= x; i++) {
        b += i;
    } console.log(b);
}
getSum(100)

// Task 2

function getCredit(x){
    return (x * 0.17 * 5);
}
let result = getCredit(100);
console.log(result);

// Task 3

function trimString(text, a, b) {
    let text2 = text[a];
for(let i = a + 1; i <= b; i++) {
    text2 += text[i];
} return text2
}
result = trimString('fert agert trtfhf fhrtfl dfgres fghghf ssdfe', 2, 15);
console.log(result);

// Task 4
function getSumNumbers(x) {
    x = String(x);
    let x2 = Number(x[0]);
    for( let i = 1; x[i] !=undefined; i++) {
    x2 += Number(x[i]); 
} return x2;
}
result = getSumNumbers(2021);
console.log(result);

// Task 5
function getSum(a, b) {
        let x;
        if(a == b){
            x = a;
        } else if(a < b){
        x = a;
        for(let i = a + 1; i <= b; i++) {
        x += i;
        }
        } else {
        x = b;
        for(let i = b + 1; i <= a; i++) {
        x += i;
        }
        } return x
    }
    result = getSum(1, -1);
    console.log(result);
    
    // Task 6
    function fooboo(bul, foo, boo) {
         bul = !!bul;         
        if(bul) {
            foo(); 
        } else {
            boo();
        } 
    }
    function foo() {
        console.log(`foo`);
    } 
    function boo() {
        console.log(`boo`);
     } 
    fooboo(true, foo, boo);
    
  
    //### ADVANCED level
    // Task 1
    function triangle(a, b, c) {
        if((a + b > c) && (a + c > b) && (b + c > a)){
            return true;
        } return false;
    }
    result = triangle(15, 4, 2);
    console.log(result);

    // Task 2
    function plitka(a, b) {
        if(a == 1) {
            return b - 1;
        } else if(b == 1) {
            return a - 1;
        } else if((a > 1) && (b > 1)) {
       return (a - 1) * (b - 1);    
    } else {
        return 0;
    }
    } 
    result = plitka(0, 10);
    console.log(result);

    // Task 3

    const tax = 1.04312;
    const phone = 140;
    const accessory = 12;
    const balance = prompt(`Напишите какими богатствами обладаете`, 12356748);

    function pricePhone() {
       let x = phone + accessory;
       let y = 0;
       for(let i = 0; y < (balance - x); i++) {
           y += x;
       } return y;
    } console.log(pricePhone())
    function pricePhoneTax() {
        return Math.round(pricePhone() * tax * 100) / 100;
    }

    function allPrice() {
        return pricePhoneTax() + ` RYR`;
    } alert(`Сумма ваших хотелок ` + allPrice());

    if(balance > pricePhoneTax()) {
        alert(`Ай Красава, на все хватает`);
    } else {
        alert(`Добудь денег и вернись`);
    }