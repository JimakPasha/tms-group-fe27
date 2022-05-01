// Задание 1
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'spiderman': '8'
//     }
// Проверить, чтобы все работало без ошибок в консоли */

// Задание 2
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла (т.е. регулировать циклом, сколько последних фильмов записать в объект)

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// *4) Можно потренироваться и переписать цикл еще двумя способами
// Код возьмите из предыдущего домашнего задания и рабойтайте и переделывайте его

// Задание 3
// •	Какое будет выведено значение: let x = 5; alert(x++); ?
// •	Что выведет этот код: alert("1"[0]) ?
// •	Чему равно 2 && 1 && null && 0 && undefined ?
// •	Есть ли разница между выражениями ? !!(a && b) и(a && b) ?
// •	Что выведет этот код: console.log(null || 2 && 3 || 4); ?
// •	Что выведет этот код: alert(+"Infinity"); ?
// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
// •	что будет в консоле? console.log(2 && 3 && '' && null && 8 || null || 79 || +'83' && +'0');
// •	что будет в консоле? console.log(2 && 3 && '' && null && (8 || null) || (79 || +'83' && +'0'));
// •	что будет в консоле? console.log(NaN && Infinity);
// •	что будет в консоле? console.log('' || null || NaN || undefined || +'0' || '');
// •	что будет в консоле? let x; let y = 1; console.log(x && y);
// •	что будет в консоле? let x; let y = 1; console.log(x && y || NaN && 'Name');
// •	что будет в консоле? console.log(!3 && 'NaN');
// •	что будет в консоле? console.log('' || null || NaN || undefined || +'0' || '');
// •	что будет в консоле? console.log(0 && 1 + 'string');
// •	что будет в консоле? console.log(+'JavaScript' && !'NaN' || 'null' || 1 + 'string' && 8043423405);
// •	что будет в консоле? console.log(+'1' || NaN && 90 - 23 && 23 || 0 && -0);
//      составьте сами ещё 3-4 довольно сложных примера с операторами && || ! и решите