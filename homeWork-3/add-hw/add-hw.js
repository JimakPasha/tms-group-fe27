let numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?');
let maxLength = 50;
//? add-hw: Task-3
let lastWatchFilm = prompt('Один из последних просмотренных фильмов или сериалов');
let lastFilmReview = +prompt ('На сколько оцените его? от 1 до 10' );
//? add-hw: Task-2
let personalMovieDB = {
    count: numberOfFilms,
    'movies name': {
        // 'Peaky Blinders': 9,
        film: lastWatchFilm,
    },
    'movies raiting': {
        raiting: lastFilmReview,
    },
    actors: {},
    genres: [],
    privat: false
}
//? add-hw: Task-1
function checkPrompt () {
        while (numberOfFilms === '' || numberOfFilms === null || numberOfFilms === 0 || numberOfFilms.length > maxLength) {
            numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?');
        }
}
checkPrompt();

function checkFilmCount () {
    if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
        alert ('Просмотрено довольно мало фильмов');
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert ('Вы классический зритель');
    }else if (personalMovieDB.count > 30) {
        alert ('Вы киноман!');
    } else {
        alert ('Произошла ошибка 505');
    }
}
checkFilmCount()

function checkValid () {
    if (isNaN(numberOfFilms)) {
        console.log (`И как мне это понимать? ${numberOfFilms}`);
        // checkPrompt();
    }else {
        console.log (`Вы посмотрели ${numberOfFilms} кино`);
    }
}
checkValid();
console.log(personalMovieDB);
