'use strict'

const root = document.querySelector('#root');

const styleBlockBtn = `
   width: 30%;
   height: 100%;
   border: 2px solid black;
   border-radius: 10px;
   cursor: pointer;
   font-size: 30px;
`;

const wrapper = document.createElement('div');
root.append(wrapper);
wrapper.classList.add('wrapper');

wrapper.style.cssText = `
   max-width: 800px;
   min-height: 200px;
   margin: 50px auto 0;
   border: 2px solid black;
   border-radius: 20px;
   background-color: rgb(213, 205, 205);
`;


const taimerConteiner = document.createElement('div');
wrapper.append(taimerConteiner);
taimerConteiner.classList.add('taimerConteiner')

taimerConteiner.style.cssText = `
   width: 90%;
   height: 90%;
   margin: 0 auto;
   padding: 20px 0;

`;

const timerIndicators = document.createElement('div');
taimerConteiner.append(timerIndicators);
timerIndicators.classList.add('timerIndicators');

timerIndicators.style.cssText = `
   width: 90%;
   height: 50px;
   margin: 0px auto 20px;
   border: 2px solid black;
   border-radius: 20px;
   padding: 20px;
   font-style: italic;
   font-weight: bold;
   font-size: 50px;
   color: red;
   display: flex;
   justify-content: end;
   align-items: center;
`;

timerIndicators.innerText = '00 sec';

const timerBtns = document.createElement('div');
taimerConteiner.append(timerBtns);
timerBtns.classList.add('timerBtns');

timerBtns.style.cssText = `
   width: 90%;
   height: 50px;
   margin: 0px auto 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const btnStart = document.createElement('button');
btnStart.classList.add('btnStart');
btnStart.innerText = 'START';
btnStart.style.cssText = styleBlockBtn;

const btnPause = document.createElement('button');
btnPause.classList.add('btnPause');
btnPause.innerText = 'PAUSE';
btnPause.style.cssText = styleBlockBtn;

const btnStop = document.createElement('button');
btnStop.classList.add('btnStop');
btnStop.innerText = 'STOP';
btnStop.style.cssText = styleBlockBtn;

timerBtns.append(btnStart, btnPause, btnStop);

const btnResultScore = document.createElement('button');
taimerConteiner.append(btnResultScore);
btnResultScore.classList.add('btnResultScore');
btnResultScore.innerText = 'RESULT MARK';

btnResultScore.style.cssText = `
   width: 90%;
   height: 50px;
   margin: 0px auto 20px;
   border: 2px solid black;
   border-radius: 10px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 30px;
`;

const titleResultScore = document.createElement('h2');
taimerConteiner.append(titleResultScore);
titleResultScore.classList.add('titleResultScore');
titleResultScore.innerText = 'Score:';

titleResultScore.style.cssText = `
   padding-left: 10%;
   margin-bottom: 10px;
`;

const listResultScore = document.createElement('ol');
taimerConteiner.append(listResultScore);
listResultScore.classList.add('listResultScore');



/*============================================*/
let secondCount = 0;
let interval;
let isStart = false;

btnStart.addEventListener('click', () => {

   if (!isStart) {
      interval = setInterval(() => {
         secondCount++;
         timerIndicators.innerText = `${addZero(secondCount)} sec`;
      }, 1000);

      isStart = true;
   }
});


btnPause.addEventListener('click', () => {

   isStart = false;
   clearInterval(interval);
});


btnStop.addEventListener('click', () => {

   isStart = false;
   clearInterval(interval);
   timerIndicators.innerText = '00 sec';
   secondCount = 0;
});


btnResultScore.addEventListener('click', () => {

   if (isStart) {
      let itemResultScore = document.createElement('li');
      listResultScore.append(itemResultScore);
      itemResultScore.classList.add('itemResultScore');
      itemResultScore.innerText = `Результат: ${addZero(secondCount)} sec`;
      itemResultScore.style.marginLeft = '10%';

      btnStop.addEventListener('click', () => {
         itemResultScore.remove();
      });
   }
});


function addZero(number) {
   if (number < 10) {
      return `0${number}`;
   } else {
      return number;
   }
}
