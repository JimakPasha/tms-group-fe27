import { getTime, getDate } from './date.js';
import { usersData } from './usersData.js';
import sumAge from './sumAge.js';

console.log(`Время онлайн ${getTime()}`);
console.log(`Дата онлайн ${getDate()}`);

console.log(sumAge(usersData));

const x = 1;