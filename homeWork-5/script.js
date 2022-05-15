// Task 1
{

let person = {
    name: 'Sergei',
    age: 28,
}
delete person.age
console.log(person)

}

// Task 2
{

let person = {
    name: 'Sergei',
    age: 28,
}
console.log(person.name === undefined)
console.log('name' in person);

}

//Task 3
{

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(key)
    console.log(student[key])
}

}

//Task 4
{

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red ,colors['ru pum pu ru rum'].blue)

}

//Task 5

{

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    sergei: 664,
    alexandra: 199
}

let sumSalaries = 0; 
let personSalaries = 0; 
for (let people in salaries) {
    personSalaries += 1;
    sumSalaries += salaries[people];
}
let middleSalaryPeople = sumSalaries / personSalaries; 
console.log(middleSalaryPeople);

}

// Task 6

{



}

// Task 2.1

{

function goalsScored(a, b) {
    let score = {
        0: 'zero',
        1: 'one', 
        2: 'two', 
        3: 'three',
        4: 'four', 
        5: 'five', 
        6: 'six',
        7: 'seven', 
        8: 'eight', 
        9: 'nine',
    };
    for (let num in score) { 
        if (a == num && b == num) {
            a = b = score[num];
        } else if (a == num) {
            a = score[num];
        } else if (b == num) {
            b = score[num];
        } 
    }
    return console.log(`${a} : ${b}`);
}
goalsScored(0, 0);
goalsScored(2, 3); 

}

// Task 2.2

{


    
}

// Task 2.3

{


    
}