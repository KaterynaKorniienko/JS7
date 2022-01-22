//Задание 1//

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);
totalCategories.forEach((element) => {
  let h2Name = element.querySelector("h2").textContent;
  let catNumber = element.querySelectorAll("li").length;
  console.log(`Категория: ${h2Name}`);
  console.log(`Количество элементов: ${catNumber}`);
});
