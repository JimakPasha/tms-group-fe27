"use strict";

/* Task 1*************************/

function getSum(n) {
   return (n + 1) * (n / 2);
}

console.log(getSum(100));

/* через цикл
function getSum(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
   }
   return sum;
}

console.log(getSum(100));
*/

/* Task 2************************/

function getCredit(sum) {
   return sum * 0.17 * 5;
}

console.log("Ваша переплата равна", getCredit(1000));

/* Task 3************************/

function trimString(str, from, on) {
   return str.slice(from, on);// str.slice(start [, end]) Возвращает часть строки от start до (не включая) end.
}

console.log(trimString("I love JS", 2, -3));

/* Task 4************************/

function getSumNumbers(n) {
   let number = "" + n;
   let sum = 0;
   for (let i = 0; i < number.length; i++)// .length возвращает количество кодовых значений в строке
      sum += + number[i];
   return sum;
}

console.log(getSumNumbers(1234567890));

/* Task 5************************/

function getSum(f, l) {
   if (f > l || f < l) {
      console.log(((2 * f + ((l + 1 - f) - 1)) / 2) * (l + 1 - f));
   } else if (f == l) {
      console.log((((2 * f + ((l + 1 - f) - 1)) / 2) * (l + 1 - f)), "Since both are same");
   }
}

getSum(2, 2);

/* Task 6************************/

function fooboo(fb) {
   if (fb == true) {
      console.log('foo');
   } else {
      console.log('boo');
   }
}

fooboo(false);

/* Task 1.1************************/

function checkTriangle(a, b, c) {
   if (!(a + b <= c || b + c <= a || a + c <= b)) {
      console.log("true");
   } else {
      console.log("false");
   }
}

checkTriangle(1, 6, 6);

/* Task 1.2************************/

function getSumma(n, m) {
   if (n > 0 && m > 0) {
      console.log(n * m - 1);
   } else if (n <= 0 || m <= 0) {
      console.log("0");
   }
}

getSumma(1, 6);

/* Task 1.3************************/

/*Решение из интернета, у самого не получилось(((*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
   return amount * TAX_RATE;
}

function formatAmount(amount) {
   return "$" + amount.toFixed(2);
}

// продолжаем покупать телефоны пока у нас остаются деньги
while (amount < bank_balance) {
   // покупаем новый телефон!
   amount = amount + PHONE_PRICE;

   // можем ли мы позволить себе аксессуар?
   if (amount < SPENDING_THRESHOLD) {
      amount = amount + ACCESSORY_PRICE;
   }
}

// не забудьте заплатить налог
amount = amount + calculateTax(amount);

console.log(
   "Ваша покупка: " + formatAmount(amount)
);
// Ваша покупка: $334.76

// можете ли вы в самом деле позволить себе эту покупку?
if (amount > bank_balance) {
   console.log(
      "Вы не можете позволить себе эту покупку. :("
   );
}
// Вы не можете позволить себе эту покупку. :(








