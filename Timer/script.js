const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const counter = document.querySelector('.counter');

let counterScore = 0;
let timerInterval;
let isStart = false;

startBtn.addEventListener('click', () => {
    if(!isStart){
        timerInterval = setInterval(() => {
            counterScore++;
            counter.innerHTML = `${counterScore} sec`;
        }, 1000);
        isStart = true;
    }
});


stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isStart = false;
})