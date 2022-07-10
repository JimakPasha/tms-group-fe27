// Деструктуризация массива

{
    const names = ['Alex', 'John', 'Tim'];
    
    const [, ,name3] = names;

    //console.log(name1); // вместо names[0]
    // console.log(name2); // вместо names[1]
    console.log(name3); // вместо names[2]
}

// «Деструктурирующее присваивание» не уничтожает массив. Оно вообще ничего не делает с правой частью присваивания, его задача – только скопировать нужные значения в переменные.

// если нам элемент не нужен можем пропустить его запятой

// вложенные массивы
{
    const names = ['Alex', 'John', 'Tim', ['Eric', 'Edvin']];
    
    const [name1, name2, name3, [nameName1, nameName2]] = names;
    console.log(nameName1);
}

// значения по умолчанию
// Если в массиве меньше значений, чем в присваивании, то ошибки не будет. Отсутствующие значения считаются неопределёнными:

{
    const names = [];

    const [name1, name2, name3,] = names;
    console.log(name3);
}

// Если нам необходимо указать значения по умолчанию, то мы можем использовать =:

{
    const names = [];
    const [name1 = 'Alex', name2, name3,] = names;
    console.log(name1);
}

// Значения по умолчанию могут быть гораздо более сложными выражениями или даже функциями. Они выполняются, только если значения отсутствуют.

{
    const names = [];

    const [name1 = randomName(), name2, name3,] = names;
    console.log(name1);

    function randomName() {
        // функция которая генерирует имя
        return 'randomName';
    }
}

// задачка
{
    const [a, b] = [1, 2];
    console.log(a);
    console.log(b);
}

// Деструктуризация объекта (всё очень похоже с Деструктуризация массива)

{
    const user = {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 32
    };

    const { age, lastName} = user;
    
    console.log(lastName); // вместо user.lastName
    console.log(age); // вместо user.age
}

// можем ли использовать другие имена переменных (не такие как свойства)?
// Нет. Но можем тусовать в разном порядке и можем пропускать свойства без всяких запятых
// но параметры по умолчанию всё также будут работать
// если хотим переименовать можно использовать двоеточие
// можем совмещать : и =:
{
    const user = {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 32
    };

    const {city = 'Minsk', age, lastName, firstName: x } = user;
    console.log(city);
    console.log(age);
    console.log(lastName);
    console.log(user);
}

// Вложенная деструктуризация
{
    const user = {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 32,
        profession: {
            position: 'frontend developer',
            company: 'google',
        }
    };

    const {firstName, lastName, age, profession: {position, company}} = user;
   // console.log(profession); // тут ошибка
    console.log(position);
    console.log(company);
}

// Смешанная деструктуризация

{
    const user = {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 32,
        profession: {
            position: 'frontend developer',
            company: 'google',
            skills: ['html', 'css', 'js', 'ts', 'react'],
        }
    };

    const {firstName, profession: {position, company, skills: [skill1, skill2, skill3]}} = user;
    console.log(skill1);
    console.log(skill2);
}

// Остаточные параметры (...). Оператор rest (остаток)

{
    const names = ['Alex', 'John', 'Tim', 'Eric', 'Edvin'];
    const [name1, name2, ...arrays] = names;
    console.log(name1);
    console.log(arrays);
    // называть его можно как угодно, главное три точки
}

// клонирование массивов с помощью rest

{
    const names = ['Alex', 'John', 'Tim', 'Eric', 'Edvin'];
    // const namesCopy = names; // как мы знаем, такая копия не сработает
    const [...namesCopy] = names;
    namesCopy[0] = 1;
    console.log(names);
    console.log(namesCopy);
}

{
    const user = {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 32
    };

    const {firstName, ...rest} = user;
    console.log(firstName);
    console.log(rest);
}

// Оператор расширения (...spread)
// Иногда нужно сделать в точности противоположное оператору rest. И в этом поможет оператор spread

{
    const names1 = ['Alex', 'Bob'];
    const names2 = ['Rick', 'Alice', 'Dina', ...names1];
    console.log(names2);

    console.log(...names1);
}

{
    const profession = {
        position: 'frontend developer',
        company: 'google',
        skills: ['html', 'css', 'js', 'ts', 'react'],
    }

    const user = {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 32,
        profession: {...profession}
    };

    console.log(user);

    // const user = {
    //     firstName: 'Alex',
    //     lastName: 'Smith',
    //     age: 32,
    //     ...profession
    // };

}

// - Клонирование объектов с помощью spread
{
    const user = {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 32,
    }
    
    // const copyUser = user; (тут копии не будет, а будет ссылка на один и тот же объект)
    const copyUser = {...user};
    copyUser.age = 11;

    console.log(user);
    console.log(copyUser);
}

// используем деструктуризацию в функциях
// показываю деструктуризацию (1 вариант + улучшенный, и параметры по умолчанию, а также вложенную и смешанную деструктуризацию)
{
    
    function log({id, name, age}) {
        console.log(id);
        console.log(name);
        console.log(age);
    }

    const user = {
        id: '0Fd8d23',
        name: 'Jack',
        age: 23,
    }

    log(user);
}

{
    const users = [
        {
            id: '140Fd8d23',
            name: 'Alice',
            age: 37,
        },
        {
            id: '04Fd846d23',
            name: 'Jack',
            age: 23,
        },
        {
            id: 'r3440Fd8d23',
            name: 'Bob',
            age: 13,
        },
    ]

    let ages = 0;

    users.map(({age}) => {
        ages += age;
    });
    console.log(ages / users.length);
}


