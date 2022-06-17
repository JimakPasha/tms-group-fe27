import { form, formBtn, formText, formRighStyle} from './styleBlock.js';
import { setLocalStorageTodo } from './localstorage.js';
import { todos, setTodo } from './todo.js';


export function createElement({id, text, isChecked, date}, todoList) {
    
    let taskForm = document.createElement('div');
    taskForm.classList.add('form');
    taskForm.id = id;
    taskForm.style.cssText = form;

    todoList.append(taskForm);

    const product = document.createElement('div');
    product.innerHTML = text;


    let checkboxForm = document.createElement('input');
    checkboxForm.classList.add('checkbox');
    checkboxForm.type = 'checkbox';
    checkboxForm.checked =isChecked ;
    checkboxForm.style.cssText = `
    width: 40px;
    height: 40px;
    margin: 10px;
    cursor: pointer;
    ` ;

    let taskFormDate = document.createElement ('div');
    // let date = new Date();
    // taskFormDate.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    taskFormDate.innerHTML = date;
    taskFormDate.style.cssText = `
        width: 100%;
        height: 36px;
        border-radius: 20px;
        border: 2px solid;
        background: white;
        padding: 10px;
    `;
    

    checkboxForm.addEventListener('click', () => {
        if (checkboxForm.checked) {
            taskFormText.style.opacity = 0.2;
            taskFormText.style.textDecoration = 'line-through';
        } else {
            taskFormText.style.opacity = 1;
            taskFormText.style.textDecoration = 'none';
        }

        setTodo(todos.map((item) => {
            if (item.id === id) {
                item.isChecked = checkboxForm.checked;
            }
            return item;
            }));
            setLocalStorageTodo(todos);
    });
    //     if (checkboxProduct.checked) {
    //     itemProducts.style.opacity = 0.2;
    // }

    // itemProducts.addEventListener('click', () => {
    //     if (checkboxProduct.checked) {
    //     itemProducts.style.opacity = 0.2;
    //     } else {
    //     itemProducts.style.opacity = 1;
    //     }
    //     setTodo(todo.map((item) => {
    //     if (item.id === id) {
    //         item.isChecked = checkboxProduct.checked;
    //     }
    //     return item;
    //     }));
    //     setLocalStorageTodo(todo);
    // });


    let taskFormText = document.createElement('div');
    taskFormText.classList.add('formText');
    taskFormText.innerHTML = text;    
    taskFormText.style.cssText = formText;

    if (checkboxForm.checked) {
        taskFormText.style.opacity = 0.2;
        taskFormText.style.textDecoration = 'line-through';
    };

    let taskFormRight  = document.createElement ('div');
    taskFormRight.classList.add('formRight');
    taskFormRight.style.cssText = formRighStyle;


    let taskFormBtnClose = document.createElement('button');
    taskFormBtnClose.classList.add('btnClose');
    taskFormBtnClose.innerHTML = '	&#10006;';
    taskFormBtnClose.style.cssText = formBtn;

    taskFormBtnClose.addEventListener('click', () => {
        setTodo(todos.filter((i) => i.id !== id));
        setLocalStorageTodo(todos);
        taskForm.remove();
    });        
    taskForm.append(checkboxForm,  taskFormText, taskFormRight);
    taskFormRight.append(taskFormBtnClose, taskFormDate);

};