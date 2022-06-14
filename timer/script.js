'use strict';

const seconds = document.querySelector('.timer_second');
const btnStart = document.querySelector('.timer_start');
const btnPause = document.querySelector('.timer_pause');
const btnStop = document.querySelector('.timer_stop');

let secondsCound = 0;
let intervalTimer;
let statusBtn = true;


btnStart.addEventListener('click', () => {
    if (statusBtn) {
        intervalTimer = setInterval(() => {
            secondsCound++;
            if(secondsCound < 10) {
                seconds.innerHTML = `0${secondsCound} sec`;
            } else if (secondsCound < 61) {
                seconds.innerHTML = `${secondsCound} sec`;
            } else {
                seconds.innerHTML = `00 sec`;
                secondsCound = 0;
            }
        }, 1000);
        statusBtn = false;
    }
})

btnPause.addEventListener('click', () => {
    clearInterval(intervalTimer);
    statusBtn = true;
});

btnStop.addEventListener('click', () => {
    clearInterval(intervalTimer);
    seconds.innerHTML = `00 sec`;
    secondsCound = 0;
    statusBtn = true;  
});