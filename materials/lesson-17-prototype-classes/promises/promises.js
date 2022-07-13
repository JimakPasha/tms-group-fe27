// Promise API
// https://javascript.info/promise-api
// https://learn.javascript.ru/promise-api

// Допустим, нам нужно запустить множество промисов параллельно и дождаться, пока все они выполнятся.

// =======================================

// Promise.all

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
  ]).then(data => console.log(data)); // когда все промисы выполнятся, результат будет 1,2,3

  // Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.

  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(error => console.log(error)); // Error: Ошибка!

// =======================================

// Promise.allSettled

// Promise.all завершается с ошибкой, если она возникает в любом из переданных промисов. Это подходит для ситуаций «всё или ничего», когда нам нужны все результаты для продолжения:

Promise.allSettled([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(data => console.log(data));

// =======================================

// Promise.race

// Метод очень похож на Promise.all, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(data => console.log(data)).catch(error => console.log(error)); // 1

// =======================================

// Promise.any

// Возвращает первый, который зарезолвился, если ни один не зарезолвился, то ошибка AggregateError: All promises were rejected

  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(data => console.log(data)).catch(error => console.log(error)); // 1


  // =======================================
  // =======================================
  // =======================================
  // =======================================
  // =======================================

  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 3000)),
  ]).then(data => console.log(data)).catch(error => console.log(error));

  // =======================================

  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 3000)),
  ]).then(data => console.log(data)).catch(error => console.log(error));

  // =======================================

  Promise.allSettled([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 3000)),
  ]).then(data => console.log(data)).catch(error => console.log(error));

  // =======================================

  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
  ]).then(data => console.log(data)).catch(error => console.log(error));

  // =======================================

  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
  ]).then(data => console.log(data)).catch(error => console.log(error));