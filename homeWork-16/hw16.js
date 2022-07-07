const btnShowPosts = document.querySelector('.btn');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function getPosts(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            if(response.status === 200) {
                resolve(response.json());
            } else {
                reject(new Error('Ошибка'));
            }
        });
    });
}

btnShowPosts.addEventListener('click', () => {
    getPosts(`${BASE_URL}/posts/15`)
        .then(() => getPosts(`${BASE_URL}/posts/23`))
        .then(() => getPosts(`${BASE_URL}/posts/7`))
        .then(() => getPosts(`${BASE_URL}/posts/3`))
        .catch((error) => console.log(error))
        .finally(() => console.log('Выполнено'));
});


const btnShowPostsAsunc = document.querySelector('.btn2');

