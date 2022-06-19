'use strict'

const startTimer = document.querySelector('.startTimer');

const stopTimer = document.querySelector('.stopTimer');
const counter = document.querySelector('.counter');

let counterNumber = 0;

let timerInterval;
let isStart = false;

startTimer.addEventListener('click', () => {
    if(!isStart){
        timerInterval = setInterval(() => {
            counterNumber++;
            counter.innerHTML = `${counterNumber} Сек`;
        }, 1000);
        isStart = true;
    }
});

stopTimer.addEventListener('click', () => {
    clearInterval(timerInterval);
    isStart = false;
});