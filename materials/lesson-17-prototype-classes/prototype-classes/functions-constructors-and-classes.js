
{
// Создание объектов с помощью функций конструкторов

// Обычный синтаксис {...} позволяет создать только один объект. Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню.

// синтаксис :
// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна вызываться при помощи оператора "new".
// Используется для того, чтобы на основе функции конструктора мы могли создавать много объектов
// Основная цель конструкторов – удобное повторное создание однотипных объектов
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
  
  let user = new User('Rick');
  let user2 = new User('Jack');
  let user3 = new User('Alex');
  let user4 = new User('John');


  console.log(user);
  console.log(user2);
  console.log(user3);
  console.log(user4);

  
  // пишем ещё пример функции конструктора
  
  // instanceof
  
  // Создание методов в конструкторе
  
  {
    function User(name) {
      this.name = name;
      this.isAdmin = false;
      this.sayHi = function () {
        console.log(`Hello, my name is ${this.name}`);
      };
    }
  
    let user = new User('Rick');
    user.sayHi();
  
    let user2 = new User('John');
    console.log(user === user2);
  }
  
  // пример
  
  function GetSum(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
      console.log(this.a + this.b);
    };
  }
  
  const numbers = new GetSum(4, 4);
  numbers.sum();
  
  // Итоги функции-конструкторы:
  // Функции-конструкторы или просто конструкторы являются обычными функциями, именовать которые следует с заглавной буквы.
  // Конструкторы следует вызывать при помощи оператора new. Такой вызов создаёт пустой this в начале выполнения и возвращает заполненный в конце.
  // Мы можем использовать конструкторы для создания множества похожих объектов.
}

// ещё пример

{
    function Animal(name, color, hasTail) {
        this.name = name;
        this.color = color;
        this.hasTail = hasTail;
    }

    const cat = new Animal('Матроскин', 'striped-black-white', true);
    const dog = new Animal('Шарик', 'orange', true);


    console.log(cat);
    console.log(dog);


    // используем прототипное наследование

    Animal.prototype.sayHi = function() {
        console.log('Hello!');
    };

    cat.sayHi();
}

// А теперь сделаем всё тоже самое только с помощью class

{
    // 1 способ
    // const Animal = class {

    // }

    // 2 способо (используй такой)

    class Animal {
        // обязательный метод constructor 
       constructor(name, color, hasTail) {
        this.name = name;
        this.color = color;
        this.hasTail = hasTail;
       } 
       // методы ниже конструктора

       sayHi() {
        console.log('Hello!');
       }

    }

    const cat = new Animal('Матроскин', 'striped-black-white', true);

    console.log(cat);
    cat.sayHi();

}

// ещё пример класса

{
    class Car {
        constructor(brand, color) {
            this.brand = brand;
            this.color = color;
        }

        start() {
            console.log(`${this.brand} - start!`);
        }

        stop() {
            console.log(`${this.brand} - stop!`);
        }
    }

    const peugeot = new Car('peugeot', 'black');
    const audi = new Car('audi', 'black');

    console.log(peugeot);
    console.log(audi);

    peugeot.start();
    audi.stop();

    // добавим наследование

    // Для реализации наследования надо использовать ключевое слово extends и после него указать имя родительского класса
    class Honda extends Car {
        constructor(brand, color) {
            // Ключевое слово super позволяет вызывать родительский конструктор (применяется в дочернем классе до объявления this) или обращаться к методам родительского объекта
            super();
            this.brand = brand;
            this.color = color;
        }
    }

    const honda = new Honda('honda' ,'red');
    console.log(honda);

    // {показать в браузере}
}

// про статические и приватные свойства и методы

// =========================================================
// =============== Задача на наследование ==================
// =========================================================

// [inheritance-task]
