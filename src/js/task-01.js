const liItems = document.querySelectorAll("li.item");
console.log(`В списке ${liItems.length} категории.`);

liItems.forEach((liItem) => {
    const h2 = liItem.querySelector("h2").textContent;
    const ul = liItem.querySelectorAll("li").length;
    console.log(`Категория: ${h2}\nКоличество элементов: ${ul}`);
});



// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4