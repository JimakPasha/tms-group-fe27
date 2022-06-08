import { getTodoList } from "../localStorage.js";
import { todoArray, setTodo } from "../todoArray.js";

export let arrayCompleted;
export function counterAll() {
    if (getTodoList()) {
        setTodo(JSON.parse(getTodoList()));
        return todoArray.length;
    }
}

export function counterCompleted() {
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