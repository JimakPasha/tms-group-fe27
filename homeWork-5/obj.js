// Task 1
// let user = {
//     name: 'John',
//     age: 24,
// }
// delete user['name'];
// console.log(user);

// Task 2
// let contry = {
//     name: 'Kazakhstan',
//     capital: 'Astana',
//     population: '1.2 mil'
// }
// console.log('name' in contry);

// Task 3
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (key in student) {
//     console.log(key);
//     console.log(student[key]); 
// }

// Task 4
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// for (key in colors) {
//     console.log(colors[key].red);
//     console.log(colors[key].blue);
// }

// Task 5
// let salaries = {
//     ['M.Andrey']: 500,
//     ['I.Sveta']: 413,
//     ['N.Anton']: 987,
//     ['T.Andrey']: 664,
//     ['V.Alexandra']: 199
// }
// let sumSal = 0;
// for (key in salaries) {
//     sumSal += salaries[key];
// }
// let userSal = Object.keys(salaries).length;
// let resultAvSal = (sumSal / userSal);
// console.log(`Average Salary: $${resultAvSal}`);
// console.log(userSal);
// console.log(sumSal);

//Task6
// let userLogin = prompt('Введите логин', 'example@gmail.com');
// let userPassword = prompt('Введите ваш пароль', 'A123456a');
// let admin = {
//     login: userLogin,
//     password: userPassword,
//     isAdmin: false,
// }
// if (userLogin === 'example@gmail.com' && userPassword === 'A123456a') {
//     isAdmin = true;
//     alert('Добро пожалоВать');
// } else {
//     alert('Проверьте логин и пароль Доступ закрыт');
// }

// Advanced Level
//Task 1
// const goalMax = 9;
// let goal = 'GOAL';
// let yellowCard = 'Yellow Card';
// let redCard = 'Red Card';
// let liverpool = {
//     GK: 'Alisson',
//     RB: 'Trent',
//     CB: 'Matip',
//     CB: 'VVD',
//     LB: 'Robertson',
//     CAP: 'Fabihno',
//     CAP: 'Thiago',
//     CAP: 'Henderson',
//     LF: 'Dias',
//     ST: 'Mane',
//     RW: 'Salah'
// }
// let realmadrid = {
//     GK: 'Courtois',
//     RB: 'Carvajal',
//     CB: 'Militao',
//     CB: 'Nacho',
//     LB: 'Mendy',
//     CAP: 'Casemiro',
//     CAP: 'Kroos',
//     CAP: 'Modric',
//     LF: 'jr Vinisius',
//     ST: 'Benzema',
//     RW: 'Valverde'
// }
// let liverpoolPlayerGoal = {
//     ['12 min']: liverpool.RW + ` ${goal}`,
//     ['32 min']: liverpool.ST + ` ${goal}`,
//     ['45 min']: liverpool.RB + ` ${goal}`,
//     ['54 min']: liverpool.LF + ` ${goal}`,
// }
// let realmadridPlayerGoal = {
//     ['89 min']: realmadrid.ST + ` ${goal}`,
//     ['91 min']: realmadrid.ST + ` ${goal}`,
//     ['92 min']: realmadrid.LF + ` ${goal}`,
// }
// let liverpoolGoal = Object.keys(liverpoolPlayerGoal).length;
// let realmadridGoal = Object.keys(realmadridPlayerGoal).length;
// console.log(`Общий счет: LIV:${liverpoolGoal} - RMA:${realmadridGoal}`);

// function getWinner() {
//     if (liverpoolGoal > realmadridGoal) {
//         console.log(`Winner: Liverpool`);
//     } else if (liverpoolGoal === realmadridGoal) {
//         console.log('Extra Time');
//     } else {
//         console.log('Winner Real Madrid');
//     }
// }
// getWinner(liverpoolGoal, realmadridGoal);

// let goalScore  = Object.assign({}, liverpoolPlayerGoal, realmadridPlayerGoal);
// console.log(goalScore);

//Task 2
// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
// function equalsObj(student1, student2) {
//     return JSON.stringify(student1) === JSON.stringify(student2);
// }
// let resultEquals = equalsObj(student1, student2);
// console.log(resultEquals);

//Task 3
//! empty key
function checkName(animals) {
    if(animals === undefined) {
        console.log('Empty');
    } else {
        console.log(animals);
    }
}    
    const animals = {
        cat: {
            name: 'Енчик',
            age: 3,
        },
        dog: {
            name: 'Орео',
            age: 2,
        },
    }
let result = checkName(animals.dog);
console.log(result);
//! Empty obj
// let fish = {

// }
// if (Object.keys(fish).length === 0) {
//     console.log('пусто');
// }
// console.log(fish);