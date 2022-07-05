
//способом promise chaining

const URL_API = 'https://jsonplaceholder.typicode.com'


function getPosts (Url) {
return new Promise ((resolve, reject) => {

    fetch(Url).then(response => {
        if(response.status == 200){
            resolve(response.json())
        } else {
           reject(new Error('Error'))
        }
    })
}) 
}

function printPosts (){
    getPosts(`${URL_API}/posts/15`)
    .then(() => getPosts(`${URL_API}/posts/23`))
    .then(() => getPosts(`${URL_API}/posts/7`))
    .then(() => getPosts(`${URL_API}/posts/3`))
    }

console.log(printPosts())

// //способом async/await

// const URL_API = 'https://jsonplaceholder.typicode.com';

// async function getPosts (i) {
//     try{
//         let response = await fetch(`${URL_API}/posts/${i}`);
//         let posts = await response.json();
//     } catch {
//         alert('Error')
//      } finally {
//         console.log('End')
//      }
     
// }
// getPosts(15);
// getPosts(23);
// getPosts(7);
// getPosts(3);