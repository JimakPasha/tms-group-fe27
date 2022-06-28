const URL_API = 'https://jsonplaceholder.typicode.com';

const list = document.querySelector('.list');
const btnShow = document.querySelector('.show');
const container = document.querySelector('.container');
const btnClose = document.querySelector('.close');

btnShow.addEventListener('click', () =>{
    list.children;
    printTodos('all list');
});



function getTodos(){
    return new Promise((resolve, reject) => {
        fetch(`${URL_API}/todos`).then(response => {
            if(response.ok) {
                resolve(response.json());
            }else{
                reject(new Error('Ошибка'));
            }
        })
    })
};
function printTodos(button) {
    getTodos().then((todos) =>{
        todos.forEach(({userId, id, title, completed}) => {
            const newElement = document.createElement('li');
            //newElement.style.listStyleType = 'none';
            if (button === 'all list'){
            newElement.innerHTML = `UserId: ${userId}, Id: ${id}, text:${title}, Completed: ${completed}`;
            }
            btnClose.addEventListener('click', () => {
            newElement.remove()
            })
            container.append(newElement);
            
        });
        
});
};


