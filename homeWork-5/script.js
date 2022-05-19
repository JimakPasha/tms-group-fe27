// #### Task 1 💻
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 
const user = {
    userName: 'Dasha',
    userAge:25,
};
delete user.userName;
delete user.userAge;
console.log(user);


// #### Task 2 🖥
// Создать любой обьект с двумя ключами и любыми значениями в них, 
//а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**
const cat = {
    name: 'Sony',
    color: 'white'
}
console.log('color' in cat);


// #### Task 3 🖥
// Дан обьект:
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
    for (let key in student) {
        console.log (key);
        console.log(student[key]);
    }
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.


// #### Task 4 🖥
// Дан обьект:
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors["ru pum pu ru rum"].red,  colors["ru pum pu ru rum"].blue);
// Вывести в консоль слово красный и синий


// #### Task 5 🖥 ----??????????
    let salaries = {
        andrey1: 500, //--?
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    };

let numberPeople = 0;
let salaryAverage = 0;
for (let key in salaries) {
    numberPeople++
    salaryAverage += salaries[key];
    }
console.log (salaryAverage / numberPeople);

//     function sumSalaries (salaries){
//         let sum = 0;
//         for (let salary of Object.values(salaries)) {
//             sum += salary;       
//         }
//         let avg = sum/Object.values(salaries).length;
//     return avg 
// }
//     console.log ( sumSalaries(salaries) ); 
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

// #### Task 6 🖥 -----???

//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 
// {
//     let validLogin = false;
//     let validPassword = false;

//     let login = prompt('Введите Ваш логин');
//     let password = prompt('Введите пароль');

//     let account = {
//         userName : login,
//         userPassword: password
//     }
//     ValidateEmail(login);
//     ValidatePassword(password);


//     function ValidateEmail(login){
//         let loginFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if(login.match(loginFormat)){
//             alert('Верный логин!');
//             return validLogin = true;
//         }else{
//             alert('Вы ввели невырный логин!');
//             return validLogin = false;
//         }
//         }

//         function ValidatePassword (password){
//             let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
//             if(password.match(passwordFormat)){
//                 alert('надежный пароль!');
//                 return validPassword = true;
//             }else{
//                 alert('пароль не надежный');
//                 return validPassword = false;
//             }
//         }
//         if(validLogin && validPassword){
//             alert ('Добро пожаловать');
//         }else{
//             alert('Неверный пароль или логин')
//         }
            
// } 


    // let loginCheck = prompt ('Подтвердите Ваш логин');
    // let passwordCheck = prompt ('Повторите пароль');

    // if (account.userName == loginCheck && account.userPassword == passwordCheck) {
    //     alert ('Добро пожаловать!');
    // }else {
    //     alert ('Неверный логин или пароль!')
    // }

// ### ADVANCED level

// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
// Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

let gameScore = {
    1: 'один' ,
    2: 'два' ,
    3: 'три' ,
    4: 'четыре' ,
    5: 'пять' ,
    6: 'шесть' ,
    7: 'семь' ,
    8: 'восемь' ,
    9: 'девять' 
}
let score = prompt('Какой счет?');
let a = score.split(':');

console.log(`Счет ${gameScore[a[0]]} : ${gameScore[a[1]]}`);



// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
    console.log(Object.values(student1).every==Object.values(student1).every)
    //let student2 = student1;
    //console.log(student1 == student2);
    //console.log (student1 === student2);

// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
//Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

{
const animals = {
    cat: {
    name: 'Енчик',
    age: 3,
    },
    dog: {
    name: 'Орео',
    age: 2,
    }
}

console.log(animals.bird?.name);

}