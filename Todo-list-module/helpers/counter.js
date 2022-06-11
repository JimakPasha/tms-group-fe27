import { getTodoList } from "../localStorage.js";
import { todoArray, setTodo } from "../todoArray.js";
let arrayCompleted = [];

function counterAll() {
    if (getTodoList()) {
        setTodo(JSON.parse(getTodoList()));
        return todoArray.length;
    } else {
        return 0;
    }
}

function counterCompleted() {
    if (getTodoList()) {
        setTodo(JSON.parse(getTodoList()));
        arrayCompleted = todoArray.filter((item) => {
        if (item.isChecked) {
            return arrayCompleted = todoArray.push(item);
        }
        })
    }
        return arrayCompleted.length;
}
export {arrayCompleted, counterAll, counterCompleted}