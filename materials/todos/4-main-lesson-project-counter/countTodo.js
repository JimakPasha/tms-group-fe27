import { getLocalStorageTodo } from './localstorage.js';
import { infoPanelAll } from './elememts/infoPanelAll.js';

export let countTodo = JSON.parse(getLocalStorageTodo()).length;

export function setCountTodo(newCountTodo) {
    countTodo = newCountTodo;
}

export function updateinfoPanelAll() {
    infoPanelAll.innerHTML = `Всего: ${countTodo}`;
}