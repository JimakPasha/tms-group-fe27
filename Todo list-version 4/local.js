export default function updateLocalStorageTodo(array) {
   localStorage.setItem('todo', JSON.stringify(array));
}