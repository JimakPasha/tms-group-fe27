'use strict'
//task 1-2
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        'lastWatchFilm': 'filmRating'
    },
    actors: {},
    genres: [],
    privat: false
}
console.log(personalMovieDB.movies);

while (numberOfFilms === '' || numberOfFilms === null) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
}
let lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
while (lastWatchFilm === '' || lastWatchFilm === null || lastWatchFilm.length > 50) {
    lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
}
let filmRating = prompt('На сколько оцените его?');

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

//task 3
let x = 5;
alert(x++);//5
alert("1"[0]);//1
console.log(2 && 1 && null && 0 && undefined );//первый falsy null
console.log(!!(a && b));//?
console.log(a && b);//?
console.log(null || 2 && 3 || 4);//3
alert(+"Infinity");//infinity,является числовым значением
console.log(0 || "" || 2 || undefined || true || falsе );//2
console.log(2 && 3 && '' && null && 8 || null || 79 || +'83' && +'0');//79
console.log(2 && 3 && '' && null && (8 || null) || (79 || +'83' && +'0'));//79
console.log(NaN && Infinity);//NaN-первое falsy значение
console.log('' || null || NaN || undefined || +'0' || '');//' '-пустая строка-последнее falsy значение
let x1; 
let y = 1;
console.log(x1 && y);// x1-undefined-первый falsy||error
let x2;
let y1 = 1;
console.log(x2 && y1 || NaN && 'Name');//NaN-(если x2 как undefined)||error
console.log(!3 && 'NaN');//false-т.к. !3-false
console.log('' || null || NaN || undefined || +'0' || '');// ' '
console.log(0 && 1 + 'string');// 0- первый falsy
console.log(+'JavaScript' && !'NaN' || 'null' || 1 + 'string' && 8043423405)// null- последнее falsy
console.log(+'1' || NaN && 90 - 23 && 23 || 0 && -0);// 1- первый true

console.log(+'25' && Infinity || 25 && !null)//Infinity
console.log(0 + 10 && !5 || null && 'string' || 5)//5
console.log(undefined || null || !'string' && !5 - 1 || '' && 'NaN' || 1)//1
