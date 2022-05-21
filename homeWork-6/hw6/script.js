//#### Task 1 🖥

    const colors = ['red', 'green', 'blue']

    console.log(colors.length);

//#### Task 2 🖥

    //Дан массив:
    
        const animals = ['monkey', 'dog', 'cat']

        console.log (animals.at(-1));
    
    //Выведите в консоль его последний элемент вне зависимости от его длинны.

//#### Task 3 🖥 ------??? еще один метод

//Дан массив:

    const numbers = [5, 43, 63, 23, 90]
    numbers.splice(0, 5);
    console.log(numbers);

    for (i = 0; i < numbers.length; i++)numbers.splice(i)
    console.log(numbers);

//Удалите все элементы в массиве и выведите в консоль полученный результат.

//#### Task 4 🖥

    const students = ['Polina', 'Dasha', 'Masha']
    students.pop();
    students.push('Borya');

    students.shift();
    students.unshift('Andrey');
    
    console.log(students);
//+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
//+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
//+ Полученный результат не забудьте вывести в консоль.

//#### Task 5 🖥

//Дан массив:

    const cats = ['Gachito', 'Tom', 'Batman']

    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i]);
    }

    for (let item of cats) {
        console.log(cats);
    }

//Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

//#### Task 6 🖥

    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]

    const arr = evenNumbers.concat(oddNumbers);

    console.log (arr.indexOf(8));

//+ Соедините два массива чисел в один.
//+ В полученном массиве попробуйте найти индекс числа **`8`**

//#### Task 7 🖥
//Дан массив:

    const binary = [0, 0, 0, 0]
    const binary1 = binary.join(1);
    console.log (binary1);

//+ Наш бинарный массив неполный, в нем явно не хватает единиц.
//+ Превратите данный массив в строку.
//> [0, 0, 0, 0] -> '0101010'

//### ADVANCED level
//> Для решения задач используйте циклы **`for`** или **`for of`**

//#### Task 1 👨‍🏫

let palindrome = 'шалаш';
function checkPalindrome(palindrome) {
    if (palindrome === palindrome.split('').reverse('').join('')) {
        console.log('Слово является палиндромом');
    }else {
        console.log('Слово не является палиндромом');
    }
}
checkPalindrome(palindrome);


//Реализуйте функцию которая будет проверять, является ли слово палиндромом.

//#### Task 2 👨‍🏫

    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ].reduce(function(a, b){
        return a.concat(b)
    })

    function  average(matrix){
        if(matrix.length === 0)
            return 0;
        let sum = 0;
        for(let i = 0; i < matrix.length; i++) {
            sum += matrix[i];
        } 
        return sum / matrix.length;
    }

console.log(average(matrix));

//> Выведите в консоль среднее значение чисел в многомерном массиве.

//#### Task 3 👨‍🏫
//Дан массив:


    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
    let posNumbers = [];
    let negNumbers = [];
    for (let number of mixedNumbers) {
        if (number >= 0){
            posNumbers.push(number);
        }else {
            negNumbers.push(number);
        }
    }
    console.log(posNumbers);
    console.log(negNumbers);

//Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
//Оба массива затем выведите в консоль. 

//#### Task 4 👨‍🏫

let randomNumber = [];
let randomNumberArray = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
]
for (let numberInPow of randomNumberArray){
    randomNumber.push(Math.pow(numberInPow,3 ));
}
console.log(randomNumber);
console.log(randomNumberArray);


//Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
//Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. 
//В конце вывести оба массива в консоль.