"use strict";

/*Task 1 
Дан массив. Выведите в консоль его длину. */

{
   const colors = ["red", "green", "blue",];

   console.log(colors.length);
}

/*Task 2
Дан массив. Выведите в консоль его последний элемент вне зависимости от его длинны. */
{
   const animals = ["monkey", "dog", "cat",];

   console.log(animals[animals.length - 1]);
}

/*Task 3 
Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат.*/

{
   const numbers = [5, 43, 63, 23, 90,];
   numbers.length = 0;
   console.log(numbers);

   const numbers1 = [5, 43, 63, 23, 90,];
   numbers1.splice(0, numbers1.length);
   console.log(numbers1);
}

/*Task 4
Дан массив. 
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль.*/

{
   const students = ["Polina", "Dasha", "Masha",];
   console.log(students);

   students.pop();
   console.log(students);
   students.push("Borya");
   console.log(students);

   students.shift();
   console.log(students);
   students.unshift("Andrey");
   console.log(students);
}

/*Task 5
Дан массив. Выведите в консоль все элементы массива. 
Сначала через цикл **`for`**, затем **`for of`**. */
{
   const cats = ["Gachito", "Tom", "Batman",];

   for (let i = 0; i < cats.length; i++) {
      console.log(cats[i]);
   }

   const cats2 = ["Gachito", "Tom", "Batman",];

   for (let items of cats2) {
      console.log(items);
   }
}

/*Task 6
Даны массивы. 
+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`***/

{
   const evenNumbers = [2, 4, 6, 8, 10,];
   const oddNumbers = [1, 3, 5, 7, 9,];

   const arrNew = evenNumbers.concat(oddNumbers);
   console.log(arrNew);

   console.log(arrNew.indexOf(8));
}

/*Task 7
Дан массив. 
+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.*/

{
   const binary = [0, 0, 0, 0,];

   const binaryNew = binary.join("1");
   console.log(binaryNew);
   console.log(typeof (binaryNew));
}

/*Task 1.1
Реализуйте функцию которая будет проверять, является ли слово палиндромом.*/

//1.join()- объединяет все элементы массива в строку
//2.toLowerCase()- преобразовывает в нижний регистр
//3.replace(/\s+/g, '')- убираем пробелы
//4.split("")- делаем массив с отдельными элементами
//5.reverse()- переворачиваем эементы внутри массива
//6.join()- объединяет все элементы массива в строку для проверки между собой

{
   let word = ["Лёша на полке клопа нашёл"];
   let wordReverse = word.join().toLowerCase().replace(/\s+/g, '').split("").reverse().join();
   //   console.log(wordReverse);
   let wordUser = word.join().toLowerCase().replace(/\s+/g, '').split("").join();
   //   console.log(wordUser);

   if (wordUser == wordReverse) {
      console.log(`${word} - палиндром`);
   } else if (wordUser != wordReverse) {
      console.log(`${word} - не является палиндромом`);
   }
}

/*Task 1.2
Выведите в консоль среднее значение чисел в многомерном массиве.*/
//[].concat.apply([], matrix) объединяет несколько массивов в массиве и выводит новый массив
{
   const matrix = [
      [12, 98, 78, 65, 23,],
      [54, 76, 98, 43, 65,],
      [13, 324, 65, 312,],
      [9092, 22, 45, 90000,],
   ];
   //console.log(matrix);

   const merged = [].concat.apply([], matrix);
   //console.log(merged);

   let sum = 0;
   function resultSum() {
      for (i = 0; i < merged.length; i++) {
         sum += merged[i];
      }
      return sum;
   }

   console.log(resultSum() / merged.length);
}

/*Task 1.3
Дан массив. Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
Оба массива затем выведите в консоль. */

{
   const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4,];

   let result = mixedNumbers.filter(function (item) {
      if (item >= 0) {
         return true;
      } else {
         return false;
      }
   });

   console.log(result);

   let result2 = mixedNumbers.filter(function (item) {
      if (item < 0) {
         return true;
      } else {
         return false;
      }
   });

   console.log(result2);
}

//Решил так, не нашел/не понял можно ли сделать, что бы одним условием вывести сразу 2 массива

/*Task 1.4
Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и 
записывает в новый массив. В конце вывести оба массива в консоль.*/

//Math.random()   рандомное число
//Math.floor()    округляет аргумент до ближайшего меньшего целого
{
   const randomArr = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
   ];
   console.log(randomArr);

   const randomArrPow = [];
   for (let item of randomArr) {
      randomArrPow.push(Math.pow(item, 3));
   }

   console.log(randomArrPow);
}