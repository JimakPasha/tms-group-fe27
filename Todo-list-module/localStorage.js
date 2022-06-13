export function getTodoList() {
    return localStorage.getItem('todos');
}
export function setTodoList(array) {
    return localStorage.setItem('todos', JSON.stringify(array));
}