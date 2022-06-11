export function updateLocalStorageTodo(arr) {
    localStorage.setItem('todo', JSON.stringify(arr));
}
