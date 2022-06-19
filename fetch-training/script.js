const URL_API = 'https://jsonplaceholder.typicode.com';
const list = document.querySelector('.list');

function getTodos() {

    return new Promise((resolve, reject) => {
        fetch(`${URL_API}/todos`).then(response => {
            if(response.status === 200) {
                resolve(response.json());
            } else {
                reject(new Error('Error'));
            }
        })
    })
}

function printTodos() {
    getTodos().then((todos) => {
        todos.forEach(({userId, id, title, complited}) => {
            const li = document.createElement('li');
            li.innerHTML = `id: ${id}, title:${title}`;
            list.append(li);
        });
    })
}

printTodos();