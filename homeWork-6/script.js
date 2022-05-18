'use strict'

// Task 1
{

const colors = ['red', 'green', 'blue'];
console.log(colors.length)



}



// Task 2
{

const animals = ['monkey', 'dog', 'cat'];
console.log(animals.pop());
    
}


// Task 3
{

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0,5); 
console.log(numbers)


}


// Task 4
{

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.splice(0,1,`Andrey`); 
console.log(students)

    
}


// Task 5
{

const cats = ['Gachito', 'Tom', 'Batman'];
for(let a = 0; a < cats.length; a++){
    console.log(cats[a])
};
for(let b of cats) {
    console.log(b)
};

 
}


// Task 6
{

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

  
}


// Task 7 

{

const binary = [0, 0, 0, 0];
let binary1 = binary.join('1');
console.log(binary1);

}


// Task 2.1


{

let palindrome = 'pop';
function checkPalndrome(a) {
    if (a === a.split('').reverse().join('')) {
        console.log('Является палендромом');
    } else {
        console.log('Не является палендромом');
    }
}
checkPalndrome(palindrome)

}

{
// Task 2.3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let positiveNumbers = [];
let negativeNumbers = [];
for (let i of mixedNumbers) {
    if (i >= 0){
        positiveNumbers.push(i);
        
    }else {
        negativeNumbers.push(i);
    }
}
console.log(positiveNumbers);
console.log(negativeNumbers);

}