const btnId = document.querySelector('.showId');
const btnTitle = document.querySelector('.showTitle');
const btnFullList = document.querySelector('.showFullList');
const list = document.querySelector('.list');

const URL_API = 'https://jsonplaceholder.typicode.com';

btnId.addEventListener('click', () => {
    if (list.children) {
        list.innerHTML = '';
    }
    printTodos('Id');
});

btnTitle.addEventListener('click', () => {
    if (list.children) {
        list.innerHTML = '';
    }
    printTodos('Title');
});

btnFullList.addEventListener('click', () => {
    if (list.children) {
        list.innerHTML = '';
    }
    printTodos('Full List');
})

function getTodos() {
    return new Promise((resolve, reject) => {
        fetch(`${URL_API}/todos`).then(response => {
            if (response.status === 200) {
                resolve(response.json());
            } else {
                reject(new Error('error'));
            }
        })
    })
}


function printTodos(button) {
    getTodos().then((todos) => {
        todos.forEach(({ id, title}) => {
        const newItem = document.createElement('li');
        newItem.style.listStyleType = 'none';
        if (button === 'Id') {
            newItem.innerHTML = `ID:${id}`;
        } else if(button === 'Title') {
            newItem.innerHTML = `Title: ${title}`;
        } else if(button === 'Full List') {
            newItem.innerHTML = `ID:${id} Title: ${title}`;
        }
            
        list.append(newItem);
        });
    })
}
    