'use strict'

// task 1

let a = 'true';
let b = false;
let c = 17;
let e = undefined;
let f = null;

console.log (typeof a, typeof b, typeof c, typeof e, typeof f);

// task 2

let height = 15
let width = 20

if (height > width) {
    console.log (height);
} else { 
    console.log (width);
}

// task 3

for (let task3 = 1; task3 <= 20; task3++) {
    if (task3 % 3 == 0) {
        console.log (task3);
    }
}

// task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = (key && documents && pen) && (apple || orange);
if (shouldGoToWork == false) {
    console.log ('Взяли всё необходимое');
} else {
    console.log ('Мы что-то забыли');
}
