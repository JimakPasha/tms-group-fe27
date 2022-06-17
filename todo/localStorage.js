
export function getLocalStorageTodo() {
    return localStorage.getItem('todo');
}

export function setLocalStorageTodo(array) {
    return localStorage.setItem('todo', JSON.stringify(array));
}