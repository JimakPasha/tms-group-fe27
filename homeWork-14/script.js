'use strict'
const timer = document.querySelector('.timer'),
btnStart = document.querySelector('.start'),
btnStop = document.querySelector('.stop');

let seconds = 0;
let time;
let isStart = false;

btnStart.addEventListener('click', () => {
    startTimer();
    isStart = true;
})

btnStop.addEventListener('click', () => {
    clearInterval(time);
    timer.innerHTML = showSeconds()
    isStart = false;
})

function startTimer() {
    if (!isStart) {
    time = setInterval(() => {
        seconds++;
        timer.innerHTML = showSeconds();
    },1000)
    }
}
function addZero(number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
}
function showSeconds() {
    return `${addZero(seconds)}`
} 