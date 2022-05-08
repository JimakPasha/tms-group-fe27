"use strict";

/*Task 1*/

{
   let a ='true',
      b = false,
      c = 17,
      d = undefined,
      e = null;

   console.log(typeof a, typeof b, typeof c, typeof d, typeof e);
}

/*Task 2*/

{
   let height = 15;
   let width = 20;

   if (height > width) {
      console.log(height);
   }  else if (height < width) {
      console.log(width);
   } 
}

/* или так, посмотрел по видео
{
   if (height > width) {
      console.log(height);
   }  else {
      console.log(width);
   } 
}

/*Task 3*/

{
let i = 1;
   for (; i < 20; ++i) {
      if (i % 3) { 
         continue;
      }       
      console.log(i);
   }
}

/* или так, посмотрел по видео
{
   let i = 1;
   for (; i < 20; ++i) {
      if (i % 3 === 0) {        
         console.log(i);
      }
   }
}

/*Task 4*/

{
   let key = true,
      documents = true,
      pen = true,
      apple = false,
      orange = true,
      shouldGoToWork;

   if (key && documents && pen && orange || apple) {
      console.log(shouldGoToWork = "Мы поедем на работу с апельсином");
   } else if (key && documents && pen && !orange || apple) {
      console.log(shouldGoToWork = "Мы поедем на работу с яблоком");
   } else if (!key && documents && pen && orange || apple) {
      console.log(shouldGoToWork = "Что-то забыли - ищем ключи");
   } else if (key && !documents && pen && orange || apple) {
      console.log(shouldGoToWork = "Что-то забыли - ищем документы");
   } else if (key && documents && !pen && orange || apple) {
      console.log(shouldGoToWork = "Что-то забыли - ищем ручку");
   } 
}

/*Task 5*/

{
   let ask = prompt("Введите число", [0]);

   if (ask % 3 === 0 && ask % 5 === 0) {
      alert("FizBuz");
   } else if (ask % 5 === 0) {
      alert("Fiz");
   } else if (ask % 3 === 0) {
      alert("Buz");
   }
}

/*Task 6*/

{
   let age = prompt("Введите возраст", [18]);

   if (age >= 16 && age < 18) {
      alert("Можешь выкурить сигаретку, только маме не говори");
   } else if (age >= 18 == true) {
      alert("Попей пивка");
   } else if (age < 16 == true) {
      alert("Пей колу");
   }
}

/*Task 7*/

{
   let tour = prompt("Введите сторону света", ["юг, север, запад, восток"]);
   switch (tour) {
      case "юг":
         alert("на юг пойдешь счастье найдешь");
         break;
      case "север":
         alert("на север пойдешь много денег найдешь");
         break;
      case "запад":
         alert("на запад пойдешь верного друга найдешь");
         break;
      case "восток":
         alert("на восток пойдешь разработчиком станешь");
         break;
      default:
         alert("Попробуйте ещё раз");
   }
}

/*Task 1.1*/

/*Сразу сделал так. Этот метод делает только первую букву строки заглавной, остальные прописными,  
а как дальше делать понял только после просмотра видео
const hello = prompt("Ваше имя?", ["ИМЯ"]);
alert(`Привет, ${hello.charAt(0).toUpperCase() + hello.substring(1).toLowerCase()}!!!`);*/

{
   let usInfo = "пОлИнА нАбЕрЕжНаЯ";
   let usInfoLowC = usInfo.toLowerCase().split(" ");
   console.log(usInfoLowC);
   let usName = usInfoLowC[0].slice(0,1).toUpperCase() + usInfoLowC[0].slice(1);
   console.log(usName);
   let usLastName = usInfoLowC[1].slice(0,1).toUpperCase() + usInfoLowC[1].slice(1);
   console.log(usLastName);
   console.log(`Привет, ${usName} ${usLastName}!`);
}

/*Task 1.2*/

let p = +prompt("Первое число?");
let o = +prompt("Второе число - сколько отнять?");
let u = +prompt("Третье число - сколько прибавить?");
let y = +prompt("Четвертое число - на сколько умножить?");
let t = +prompt("Пятое число - на сколько разделить?");
let j = (((p - o) + u) * y) / t;

alert(`((((${p} - ${o}) + ${u}) * ${y}) / ${t}) = ${j}`);

/*Task 1.3*/

/*подсмотрел по видео, но смысл понял*/
{
   let triangle = "#";

   while (triangle.length < 7) {
      console.log(triangle + "");
      triangle = triangle + "#";
   }
}





