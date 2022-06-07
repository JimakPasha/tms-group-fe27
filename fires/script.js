'use strict'

const board = document.querySelector('#board');

const SQUARES_NUMBER = 500;
const COLORS = ['red', 'green', 'black', 'white', 'pink', 'yellow', 'blue'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseleave', () =>  {
        removeColor(square);
    });
};

board.addEventListener('mouseover', (e) => {
    setColor(e.target);
});

// Функция добавления цвета в квадрат 

function setColor() {
    const color = getRandomColor();
    element.style.backroundColor = color;
};

function removeColor(element) {
    element.style.backroundColor = '#1d1d1d';
};

function getRandomColor() {
    const index = Math.floor(Math.random()* COLORS.length);
    return COLORS[index]
};

