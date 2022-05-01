//? add-hw: Task-1
function checkValid () {
    if (isNaN(numberOfFilms)) {
        console.log (`И как мне это понимать? ${numberOfFilms}`);
    }else {
        console.log (`Вы посмотрели ${numberOfFilms} фильмов`);
    }
}
let numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
checkValid();