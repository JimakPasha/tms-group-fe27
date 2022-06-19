const board = document.querySelector('#board');

const SQUARES_NUMBER = 500;
const COLORS = ['red', 'green', 'black', 'white', 'pink', 'yellow', 'blue'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });
}

board.addEventListener('mouseover', (e) => {
    setColor(e.target);
});

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
}