const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Promise chaining
const btnShowPosts = document.querySelector('.btn');

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

// Async / await
const btnShowPostsAsunc = document.querySelector('.btn2');

async function getPosts2(numberPost) {
    const response = await fetch(`${BASE_URL}/posts/${numberPost}`);
    const post = await response.json();
    return post;
}

btnShowPostsAsunc.addEventListener('click', () => {
    getPosts2('15');
    getPosts2('23');
    getPosts2('7');
    getPosts2('3');
});

