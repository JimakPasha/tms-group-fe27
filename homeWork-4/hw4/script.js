// #### Task 1 💻

function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
}

console.log( getSum(50) );

// #### Task 2 💻

let sum = 1000;
function credit (sum) {
    let price = sum * 0.17 * 5;
    return price;
}
console.log ('переплата = ' + credit(sum));


// #### Task 3 💻

let string = 'Hello world!!!!';
function trimString (string,from,to) {
    let subString = string.slice(from, to); 
    return (subString);
}

console.log (trimString('Hello world!!!!', 0 , 4));


// #### Task 4 💻

function getSumNumbers(num){
    let arrOfDigits = Array.from(String(num), Number);
    let res = 0;
    for(let i = 0; i < arrOfDigits.length; i++){
res+=arrOfDigits[i];
    }
    console.log(res);
}

getSumNumbers(6358);

// #### Task 5 💻 
``

function getSum (a,b) {
    let sum = 0;
    if (a == b) {
        sum = a;
    } else if ( a > b) {
        for ( let i = a;i >= b ; i--){
        sum += i;}
    } else  {
        for ( let i = a; i <= b; i++) {
        sum += i;}
    }
    console.log(sum);
    return sum;
}
//console.log ( getSum);
    getSum(1, 0)   // 1 + 0 = 1
    getSum(1, 2)    // 1 + 2 = 3
    getSum(0, 1)    // 0 + 1 = 1
    getSum(1, 1)    // 1 Since both are same
    getSum(-1, 0)  // -1 + 0 = -1
    getSum(-1, 2)   // -1 + 0 + 1 + 2 = 2



// #### Task 6 💻 ----------------- ???????????????


function fooboo (bul, foo, boo) {
    if (bul) {
        foo();
    } else {
        boo();
    }
}

function foo (){
    console.log ('foo');
}

function boo(){
    console.log ('boo')
}

fooboo(false, foo, boo);

//Task 1*
// function triangle (a, b, c) {
//     if (a > b + c){
//     return false;
//     } else if (b > a + c) {
//         return false;
//     } else if (c > b + a) {
//         return false;
//     } else {
//         return true;
//     }
// }
// if (triangle (10,40,20)) {
//     console.log ('можно построить треугольник');
// } else {
//     console.log ('нельзя построить треугольник');
// }


function triangle (a, b, c) {
    if (a > b + c || b > a + c || c > b + a ) {
        return false;
    } else {
        return true;
    }
}
if (triangle (10,40,20)) {
    console.log ('можно построить треугольник');
} else {
    console.log ('нельзя построить треугольник');
}

//task 2*
function chocolate ( n , m) {
    if (n == 0 & m == 0 || n == 1 & m == 1) {
        return 0;
    }else {
        return (n-1)+(n*(m-1))}
}
console.log (chocolate (4, 3));

// task 3*


const pricePhone = 350;
const priceAccessory = 50;
const tax = 0.13;

const balance = 300;
//let balance = prompt ('Сколько вы готовы сегодня потратить?')


function amountWithTax (price) {
 let priceWithTaxes = price + (price * tax);
return priceWithTaxes;
}

function calculationPhones(balance){
    let amountPhones = 0;
    let priceWithTaxes = amountWithTax(pricePhone + priceAccessory);
    alert ( 'Сумма покупки с налогом ' + priceWithTaxes.toFixed(2) + '$');
    while (balance >= priceWithTaxes) {
        balance = balance - priceWithTaxes ;
            amountPhones++;
        if (amountPhones > 0) {
        console.log ('Поздравляю с покупкой! Вы купили ' + amountPhones);
        //alert ('Поздравляю с покупкой! Вы купили ' + amountPhones);
        }  else {
            console.log ('У Вас недостаточно средств');
            //alert ('У Вас недостаточно средств');
        }
    }
    console.log ('У вас нет денег для покупки телефона')
    //alert ('У вас нет денег для покупки телефона')

}
calculationPhones(balance); 