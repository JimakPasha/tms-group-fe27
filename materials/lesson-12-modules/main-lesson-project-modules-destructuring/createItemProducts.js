import { setLocalStorageTodo } from './localstorage.js';
import { todo, setTodo } from './todo.js';

export function createItemProducts({id, text, isChecked, date}, listProducts) {
    const itemProducts = document.createElement('div');
    itemProducts.classList.add('item');
    itemProducts.id = id;
    itemProducts.style.cssText = `
                display: flex;
                justify-content: space-between;
                border: 1px solid #000;
                margin: 10px 0;
                height: auto;
            `;
    listProducts.append(itemProducts);

    const product = document.createElement('div');
    product.innerHTML = text;

    const checkboxProduct = document.createElement('input');
    checkboxProduct.type = 'checkbox';
    checkboxProduct.checked = isChecked;
    checkboxProduct.style.margin = '3px 10px';

    const deleteItemBtn = document.createElement('button');
    deleteItemBtn.innerText = 'Удалить';

    const dateEl = document.createElement('div');
    dateEl.innerHTML = date;

    itemProducts.append(checkboxProduct, product, dateEl, deleteItemBtn);

    if (checkboxProduct.checked) {
        itemProducts.style.opacity = 0.2;
    }

    itemProducts.addEventListener('click', () => {
        if (checkboxProduct.checked) {
        itemProducts.style.opacity = 0.2;
        } else {
        itemProducts.style.opacity = 1;
        }
        setTodo(todo.map((item) => {
        if (item.id === id) {
            item.isChecked = checkboxProduct.checked;
        }
        return item;
        }));
        setLocalStorageTodo(todo);
    });

    deleteItemBtn.addEventListener('click', () => {
        setTodo(todo.filter((i) => i.id !== id));
        setLocalStorageTodo(todo);
        itemProducts.remove();
    });
}