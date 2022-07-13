{
    // У строки, есть различные методы и свойства.
    const string = 'I am string';
    console.log(string.length);
    console.log(string.indexOf('a'));
    console.log(string.includes('am'));

    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
}

// откуда у обычной строки(и у остальных примитивов) ствойства и методы, они же могут быть только у объектов

// Упаковка и Распаковка (Boxing)
{
    'string' // так это просто примитив
    'string'. // как только мы ставим точку, язык js оборачивает наш примитив в специальный объект, для того, чтобы мы получили доступ к методам и свойствам. А затем возвращает преобразованный примитив
}

// когда мы создаём строку, мы создаём новый экземпляр прототипа строк. (у них у всех будут одинаковые методы и свойства)

{
    // сходим в браузер и создадим экземпляр массива
    ['string', 1, true];
    // но прототип массива у него общий Array
    // в конце снова свойство прото и там Объект
}

// [картинка proto]
// любые конструкции прототипно наследуются от объекта и по такой цепочке прототипов всё и работает

// расмотрим простой пример
{
    // большой прототип который описывает всех игроков
    const player = {
        health: 100,
        armor: 100,
        sayHi: function() {
            return 'Hello!';
        }
    };

    // экземпляр игрока
    const alex = {
        health: 50,
    }

    // теперь нужно установить связь, чтобы у alex были все свойства, которые есть у player
    alex.__proto__ = player;

    console.log(alex);
    console.log(alex.armor);
    console.log(alex.sayHi());
    // несмотря на то, что у alex одно свойство, благодаря прототипам, мы получаем доступ к armor
    // {попробовать в браузере}

    // современный способ:
    Object.setPrototypeOf(alex, player);

    // но обычно это делается так:
    // const alex = Object.create(player);
}

// [PDF Lesson-17]

// пример реализации собственного метода map 
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Array.prototype.myMap = function(callback) {
        const resultArray = [];
        for (let index = 0; index < this.length; index++) {
            resultArray.push(callback(this[index], index, this));
        }
        return resultArray;
    }

    numbers.myMap((el, i, arr) => {
        console.log(`Item: ${el} have index ${i} on array: ${arr}`);
    });


    // {демонстрация в браузере}
}

{
    Array.prototype.logName = function() {
        console.log(`I am array, and my name ${this}`);
    };

    const evenNumbers = [2, 4, 6, 8];
    const oddNumbers = [1, 3, 5, 7];

    evenNumbers.logName();
    oddNumbers.logName();

    // {демонстрация в браузере}
}

// про полифилы
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// Про теранарный оператор:

// условие:

// if (isAdmin) {
//     console.log('I am admin');
// } else {
//     console.log('I am not admin');
// }


// такое же условие(но сокращённая запись):
// isAdmin ? console.log('I am admin') : console.log('I am not admin');