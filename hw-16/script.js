const URL_API = 'https://jsonplaceholder.typicode.com';
// Promise chaining
const btnClick = document.querySelector('.btnChaining');

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

btnClick.addEventListener('click', () => {
    getPosts(`${URL_API}/posts/15`)
        .then(() => getPosts(`${URL_API}/posts/23`))
        .then(() => getPosts(`${URL_API}/posts/7`))
        .then(() => getPosts(`${URL_API}/posts/3`))
        .catch((error) => console.log(error))
        .finally(() => console.log('Completed'));
});

// Async / await
const btnClickNow = document.querySelector('.btnAsync');

async function getPost(number) {
    const response = await fetch(`${URL_API}/posts/${number}`);
    const post = await response.json();
    return post;
}

btnClickNow.addEventListener('click', () => {
    getPost('15');
    getPost('23');
    getPost('7');
    getPost('3');
});