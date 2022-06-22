'use strict'

const btn = document.querySelector('.btn');
const URL_API = 'https://jsonplaceholder.typicode.com';
let item;

btn.addEventListener('click', function getTodos() {
   item = fetch(`${URL_API}/todos`)
      .then(response => response.json())
      .then(json => console.log(json));
})

const btn2 = document.querySelector('.btn2');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
let isStartBtn2 = false;

btn2.addEventListener('click', () => {

   if (!isStartBtn2) {
      function printTodos() {
         return new Promise((resolve, reject) => {
            fetch(`${URL_API}/posts`).then(response => {
               console.log(response);
               if (response.status === 200) {
                  resolve(response.json());
               } else {
                  reject(new Error('Ошибка'));
               }
            })
         })
      }

      printTodos().then((posts) => {
         posts.forEach(({ userId, id, title, body }) => {
            const li = document.createElement('li');
            li.innerHTML = `# id: ${id}, title: ${title}`;
            ul.append(li);
         })
      });
      isStartBtn2 = true;
   }


})