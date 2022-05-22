"use strict";

/* Task 1
Выведи все элементы массива в консоль с помощью метода **`forEach`***/

{
   const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,];
   console.log(fibonacci);

   //arrow function
   fibonacci.forEach(item => console.log(item));

   //function declaration
   for (index = 0; index < fibonacci.length; index++) {
      console.log(fibonacci[index]);
   }
}

/* Task 2
Используя метод **`map`** создайте новый массив, на основе массива **`users`**, 
в котором каждый элемент массива будет содержать строку вида:['member 1: Darya', 'member 2: Masha', ... etc]*/

{
   const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton",];
   console.log(users);

   //arrow function
   const usersMap1 = users.map(item => "member 1: " + item);
   console.log(usersMap1);

   //или так
   const usersMap11 = users.map(index => ("member 1: " + users[index]));
   console.log(usersMap11);

   //function declaration
   const usersMap2 = [];
   for (let item of users) {
      usersMap2.push("member 1: " + item);
   }

   console.log(usersMap2);

   //или так
   const usersMap3 = [];
   for (let index = 0; index < users.length; index++) {
      usersMap3.push("member 1: " + users[index]);
   }

   console.log(usersMap3);
}

/*Task 3
С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.*/
{
   const numbers = [7, -4, 32, -90, 54, 32, -21,];
   console.log(numbers);

   //arrow function
   const numbersPlus = numbers.filter((item) => {
      return item > 0;
   });

   console.log(numbersPlus);

   //function declaration
   const numbersPlus2 = numbers.filter(function (item) {
      if (item > 0) {
         return true;
      }
   })

   console.log(numbersPlus2);
}

/*Task 4
Используя метод **`reduce`** получите сумму всех чисел массива.*/

{
   const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,];

   //arrow function
   const result = fibonacci.reduce((sum, item) => {
      return sum + item;
   });
   console.log(result);

   //function declaration
   const result2 = fibonacci.reduce(function (sum, item) {
      return sum + item;
   }, 0);//0 можно не указывать

   console.log(result2);
}

/*Task 5
Используя метод **`find`** найдите в массиве первое четное число.*/
{
   const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5,];

   //arrow function
   const numbersFirst = numbers.find((item) => item % 2 == 0);
   console.log(numbersFirst);

   //function declaration
   const numbersPlus2 = numbers.find(function (item) {
      return item % 2 == 0;
   });

   console.log(numbersPlus2);
}

/*Task 1.1
+ Написать функцию конструктор **Student**
+ В каждом объекте студента должны быть поля **salary** , **rate** , **name**
+ Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
+ На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

+ Создать массив **students** и поместить в него студентов.
+ Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

**rate** имеет 4 категории A B C D
+ **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
+ **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
+ **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
+ **D** - плохой рейтинг и мы не можем дать кредит
*/

//пока не получился



/*Task 1.2
+ Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
+ Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
+ Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
> Примечание: для этой задачи **`y`** не считается гласной.
*/
//модификатор g = глобальный, соответствует всем экземплярам шаблона в строке, а не только одному, i = без учета регистра 

{
   //function declaration

   function deletionVowel(word) {
      return word.replace(/[aeiouAEIOU]/g, "");
   }

   console.log(deletionVowel("This website is for losers LOL"));

   //arrow function
   let deletionVowel2 = (word) => word.replace(/[aeiou]/gi, "");

   console.log(deletionVowel2("This website is for losers LOL"));
}

/*Task 1.3
Нет истории, нет теории
+ В приведенных ниже примерах показано, как написать функцию:
> Параметр - это строка, которая включает только буквы от a..z и A..Z.
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

{
   const accum = letters => letters
      .split('')
      .map((ch, i) => (ch = ch.toLowerCase().repeat(i + 1)) && ch.charAt(0).toUpperCase() + ch.slice(1))
      .join('-');

   console.log(accum("abcd"));
   console.log(accum("RqaEzty"));
   console.log(accum("cwAt"));
}
// Подсмотрел похожее в интернете. Что делают эти методы понимаю (только путаюсь в каком порядке их применять правильно),и путаюсь с построением функции

/*Task 1.4
+ В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
   highAndLow("1 2 3 4 5"); // return "5 1"
   highAndLow("1 2 -3 4 5"); // return "5 -3"
   highAndLow("1 9 3 4 -5"); // return "9 -5"
> Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.*/

// оператор распространения ... для преобразования строки в массив

{
   const highAndLow = "1 2 3 4 5";
   const highAndLow1 = "1 2 -3 4 5";
   const highAndLow2 = "1 9 3 4 -5";

   const arr = highAndLow.split(" ");
   console.log(arr);
   console.log(`return "${Math.max(...arr)} ${Math.min(...arr)}"`);

   const arr1 = highAndLow1.split(" ");
   console.log(arr1);
   console.log(`return "${Math.max(...arr1)} ${Math.min(...arr1)}"`);

   const arr2 = highAndLow2.split(" ");
   console.log(arr2);
   console.log(`return "${Math.max(...arr2)} ${Math.min(...arr2)}"`);
}

/*Task 1.5
+ Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
   isIsogram("Dermatoglyphics") == true
   isIsogram("aba") == false
   isIsogram("moOse") == false // -- ignore letter case
*/
//new Set() возвращает строку без дублированных символов
//size возвращает количество (уникальных) элементов в Set

{
   function isIsogram(str) {
      return str.length == new Set(str.toLowerCase()).size;
   }

   console.log(`слово изограмма - ${isIsogram("Dermatoglyphics")}`);
   console.log(`слово изограмма - ${isIsogram("aba")}`);
   console.log(`слово изограмма - ${isIsogram("moOse")}`);
}

/*Task 1.6 👨‍🏫 Считаем коды символов
+ Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. 
Поместите результат в переменную **`total1`**
+ Затем замените все числа `7` на число `1` и назовите это число **`total2`**
+ После верните разницу между суммой цифр **`total1`** и **`total2`**
> 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667*/

{
   const str = "ABC";

   //превратили каждый символ в код символа ASCII
   const strArr = [];
   for (let index = 0; index < str.split("").length; index++) {
      strArr.push((str.split("")[index]).charCodeAt());
   }
   console.log(strArr);

   //соединили их вместе и нашли второе значение
   const total1 = strArr.join("");
   console.log(total1);

   const total2 = total1.replaceAll(7, 1);
   console.log(total2);

   //нашли суммы цифр наших чисел
   let sum1Total1 = 0;
   let sum2Total2 = 0;

   for (let index = 0; index < total1.length; index++) {
      sum1Total1 += Number(total1[index]);
   }
   console.log(sum1Total1);

   for (let index = 0; index < total2.length; index++) {
      sum2Total2 += Number(total2[index]);
   }
   console.log(sum2Total2);

   //результат разницы
   let result = sum1Total1 - sum2Total2;
   console.log(result);
}

/*Task 1.7 Дубликаты
+ Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен 
**`(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, если этот символ 
встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.
   "din" => "((("
   "recede" => "()()()"
   "Success" => ")())())"
   "(( @" => "))(("
   */

{
   let word = "Success";
   let wordUp = word.toLowerCase();// регистр убрал так, что-то запутался и по другому уже не вижу как сделать
   let result = " ";
   for (let i = 0; i < wordUp.length; i++) {
      if (wordUp.split(wordUp[i]).length - 1 > 1) {
         result += ")";
      } else if (wordUp.split(wordUp[i]).length - 1 == 1) {
         result += "(";
      }
   }
   console.log(result);
}
