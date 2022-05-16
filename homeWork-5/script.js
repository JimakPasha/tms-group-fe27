"use strict";

/*Task 1
Создать любой обьект с двумя ключами и любыми значениями в них, 
а затем удалить ключи из обьекта.*/

{
const petCat = {
   name: "Sally",
   age: 1,
}

console.log(petCat);

delete petCat.name;
delete petCat.age;

console.log(petCat);
}

/*Task 2
Создать любой обьект с двумя ключами и любыми значениями в них, 
а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true***/

{
let pets = {
   cat: {
      name: "Sally",
      age: 1,
   },
   dog: {
      name: "Lucky",
      age: 2,
   },
}

console.log("cat" in pets);// определить ключ в Object 
console.log(pets.dog.age !== undefined);// определить ключ в Object в Object
}

/*Task 3
Дан обьект.  C помощью цикла **for in** вывести в консоль сначала все ключи, 
потом значения ключей обьекта.*/

{
const student = {
   name: 'John',
   age: 19,
   isHappy: true,
}

for (let key in student) {
console.log(key);// выводит ключи
console.log(student[key]);// выводит значения ключей
}
}

/*Task 4
Дан обьект. Вывести в консоль слово красный и синий*/

{
const colors = {
   'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий',
   },
};

console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue);
}

/*Task 5
Дан обьект. Вычислите среднюю зарплату сотрудников и 
результат поместите в соответствующую переменную*/

{
let salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   pavel: 664,
   alexandra: 199,
}

let sum = 0;
let average;
for (let key in salaries) {
   sum +=salaries[key];// Общая сумма
   average = sum / Object.keys(salaries).length;//Object.keys(...).length количество ключей объекта
}

console.log(`Средняя зарплата сотрудников равна ${average}`);
}

/*Task 6
Создать валидатор, запросить у пользователя логин и пароль для регистрации. 
Затем данные записать в обьект. 
Потом попросить пользователя подтвердить данные. 
Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 
*/

{
let login1 = prompt("Ваш логин?", "логин");
let password1 = prompt("Ваш пароль?", 123);

let user = {
   userLog1: login1,
   userPas1: password1,
}

let login2 = prompt("Подтвердите логин.");
let password2 = prompt("Подтвердите.");

let user2 = {
   userLog2: login2,
   userPas2: password2,
}

if (user.userLog1 === user2.userLog2 && user.userPas1 === user2.userPas2) {
   alert(`"Добро пожалоВать" ${user.userLog1}`)
} else if (user.userLog1 !== user2.userLog2 && user.userPas1 === user2.userPas2) {
   alert(`"Не верно введён login"`)
} else if (user.userLog1 === user2.userLog2 && user.userPas1 !== user2.userPas2) {
   alert(`"Не верно введён password"`)
} else if (user.userLog1 !== user2.userLog2 && user.userPas1 !== user2.userPas2) {
   alert(`"Не верно введён password и login"`)
};
}

/*Task 1
Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.  
*/

//Разбираюсь, надеюсь позже скину

/*Task 1.2
Даны два одинаковых обьекта. Сравните их так чтобы они были равны
*/

{
let student1 = {
   name: 'Polina',
   age: 27,
}

let student2 = {
   name: 'Polina',
   age: 27,
}

console.log(JSON.stringify(student1)===JSON.stringify(student2));//JSON.stringify(...) Конвертирует объекты в строку и сравнивает полученные строки. Минус: если свойства объектов идут не в одном порядке, то сравнение вернёт false.
}

/*Task 3 
У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.
 */

// Не разобрался(((
