// const btnGetAll = document.querySelector('.btn-get-all');
// const list = document.querySelector('.list');

// const URL = 'https://the-one-api.dev/v2';
// const API_KEY = 'rSSpvy5vTnknQtQnDp1_';

// let page = 1;

// function getCharacters() {
//   return new Promise((resolve, reject) => {
//     fetch(`${URL}/character?limit=10&page=${page}`, {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     }).then((response) => {
//       if (response.status === 200) {
//         resolve(response.json());
//       } else {
//         reject(new Error('Some Error here �'));
//       }
//     });
//   });
// }

// btnGetAll.addEventListener('click', () => {
//   getCharacters().then((characters) => {
//     console.log(characters);
//     characters.docs.forEach((character) => {
//       const element = document.createElement('li');
//       element.innerText = `Character: ${character.name}, race: ${character.race}`;
//       list.append(element);
//     });
//   });
//   page += 1;
// });

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const list = document.querySelector('.list');

prev.disabled = true;

const URL = 'https://the-one-api.dev/v2';
const API_KEY = 'rSSpvy5vTnknQtQnDp1_';

let page = 1;

function getCharacters() {
  return new Promise((resolve, reject) => {
    fetch(`${URL}/character?limit=10&page=${page}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        resolve(response.json());
      } else {
        reject(new Error('Some Error here �'));
      }
    });
  });
}

getCharacters().then((characters) => {
  console.log(characters);
  characters.docs.forEach((character) => {
    const element = document.createElement('li');
    element.innerText = `Character: ${character.name}, race: ${character.race}`;
    list.append(element);
  });
});

prev.addEventListener('click', () => {
  list.innerHTML = '';
  page -= 1;
  getCharacters().then((characters) => {
    if (characters.page === 1) {
      prev.disabled = true;
    }
    characters.docs.forEach((character) => {
      const element = document.createElement('li');
      element.innerText = `Character: ${character.name}, race: ${character.race}`;
      list.append(element);
    });
  });
});

next.addEventListener('click', () => {
  list.innerHTML = '';
  page += 1;
  getCharacters().then((characters) => {
    if (characters.page > 1) {
      prev.disabled = false;
    }
    console.log(characters);
    characters.docs.forEach((character) => {
      const element = document.createElement('li');
      element.innerText = `Character: ${character.name}, race: ${character.race}`;
      list.append(element);
    });
  });
});
