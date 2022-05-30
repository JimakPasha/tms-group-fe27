//#### Task 1 🖥

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacci.forEach(number => console.log(number));

fibonacci.forEach(function (number) {
    console.log(number);
});

// #### Task 2 🖥

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const usersNew = users.map ((name, index) => {
    return (`member ${index + 1}:${name}`); 
});
console.log(usersNew);

const usersNames = users.map (function (name , index) {
    return (`member ${index + 1}:${name}`); 
})
console.log(usersNames);

// #### Task 3 🖥

const numbers = [7, -4, 32, -90, 54, 32, -21]

const result = numbers.filter(numbers => numbers >= 0);
console.log(result);

const result1 = numbers.filter(function (num) {
    return num >= 0;
});
console.log(result1);


// #### Task 4 🖥

{
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987].reduce(function(a,b){
        return a + b;
    });
    console.log(fibonacci);
}
{
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    let result = fibonacci.reduce( (a, b) => a += b);
    console.log(result);
}

// #### Task 5 🖥
{
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
    function findNumber (i) {
        return i % 2 == 0;
    }
    console.log(numbers.find(findNumber));

    const numbersEven = numbers.find(numbers => numbers % 2 == 0);
    console.log(numbersEven);
}

// ### ADVANCED level

// #### Task 1 👨‍🏫

// + Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
// + На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

function Student(salary, rate, name) {
    this.salary = salary;
    this.name = name;
    this.rate = rate;
    this.sumCredit = function() {
        
    if (rate === 'A') {
        return  salary * 12;
    } else  if (rate === 'B') {
        return  salary * 9;
    } else  if (rate === 'C') {
        return  salary * 6;
    } else {
        return 'Плохой рейтинг!';
    }
}
}
let student1 = new Student(1200, 'C', 'Masha');
let student2 = new Student(1800, 'B', 'Sasha');
let student3 = new Student(1000, 'D', 'Dima');
let student4 = new Student(800, 'D', 'Alex');
let student5 = new Student(2200, 'A', 'Misha');
let student6 = new Student(2000, 'A', 'Igor');

let studentArrayCredit = [].concat(student1.sumCredit(), student2.sumCredit(),
    student3.sumCredit(), student4.sumCredit(), student5.sumCredit(), student6.sumCredit());

function studentCreditSum(studentArrayCredit) {
    return studentArrayCredit.reduce((acc, item, index) => (typeof item === 'number') ? acc+=item : acc);
}
console.log(` Cумма кредита на группу: ${studentCreditSum(studentArrayCredit)}`);

// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

const coment = 'This website is for losers LOL!';
const consonants = ['a', 'i', 'e', 'u', 'o', 'A', 'I', 'E', 'U',' O' ];
const coment2 = coment.split('');

function areVowels(coment2, consonants){
    return coment2.filter(item => !consonants.includes(item)).join('');
}
console.log(areVowels(coment2,consonants));

// #### Task 3 👨‍🏫 Нет истории, нет теории

const letter = 'zxjtN';
const letterRepeat = letter.split('').map((element, index) => {
    return element.repeat(index + 1);
}).join('-');
console.log(letterRepeat);

// #### Task 4 👨‍🏫 Самый высокий и самый низкий
{
    let result;
    function highAndLow (str) {
        let arr = [];    
        str.split(' ').map(function(item){
            let number = parseInt(item);
            return arr.push(number);
        })
        let min = Math.min.apply(null, arr);
        let max = Math.max.apply(null, arr);
        return result = `${max} ${min}`;
    }

    highAndLow("1 2 3 4 5"); // return "5 1"
    console.log(result);
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    console.log(result);
    highAndLow("1 9 3 4 -5"); // return "9 -5"
    console.log(result);
}

// #### Task 5 👨‍🏫 Изограммы
{
    function isIsogram (str){
    for(i=0; i < str.length; i++){ 
        if (str.split(str[i]).length-1 > 1) 
    {
        return false;
    }  
    }
    return true;
} 
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
}

// #### Task 6 👨‍🏫 Считаем коды символов

// + Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. 
//Поместите результат в переменную **`total1`**
// + Затем замените все числа `7` на число `1` и назовите это число **`total2`**
// + После верните разницу между суммой цифр **`total1`** и **`total2`**
// > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

{
    const str = 'ABC';

const strArr = [];
for( let index = 0; index < str.split('').length; index++){
    strArr.push(str.split('')[index].charCodeAt());
}
console.log(strArr);
const total1 = strArr.join('');
const total2 = total1.replaceAll(7,1);
let total1Sum = 0;
let total2Sum = 0;

for (let index = 0; index < total1.length; index++) {
    total1Sum += Number(total1[index]);
}
for (let index = 0; index < total2.length; index++) {
    total2Sum += Number(total2[index]);
}
let result = total1Sum - total2Sum;

console.log(result);
}

// #### Task 7 👨‍🏫 Дубликаты
// + Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен 
// **`(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, 
//если этот символ встречается более одного раза в исходной строке. 
//Игнорируйте использование заглавных букв при определении дубликата символа.


// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```
{
let word = 'din';
let dublicat = word.split('').map((element, index, array) => {
    let result = '';
    if (array.indexOf(element)=== array.lastIndexOf(element)) {
        result = '(';
    }else {
        result = ')';
    }
    return result;
});
console.log(dublicat.join(''));

}


