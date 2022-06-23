'use strict'

const seconds = document.querySelector('.timer__second');
const pause = document.querySelector('.timer__pause');
const start = document.querySelector('.timer__start');
const btnStop = document.querySelector('.timer__stop');

let secondsCount = 0;
let interval;
let isStart = false;

start.addEventListener('click', () => {
    if (!isStart){
        interval = setInterval(() => {
            secondsCount++;
            seconds.innerHTML = createTime();
        }, 100);
        isStart = true;
    }
});

function createTime () {
    const sec = Math.floor(secondsCount / 10);
    const miliSec = Math.floor(secondsCount % 10);
    return `${addZero(sec)}:${addZero(miliSec)}`;
};

function addZero(number) {
    if(number < 10) {
        return`0${number}`
    } else {
        return number;
    }
};

pause.addEventListener('click', () => {
    clearInterval(interval);
    isStart = false;
});

btnStop.addEventListener('click', () =>{
    clearInterval(interval);
    seconds.innerHTML = `${addZero(0)}:${addZero(0)}`;
    secondsCount = 0;
    isStart = false;
} );


