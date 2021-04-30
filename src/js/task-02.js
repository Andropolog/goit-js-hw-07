const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientRef = document.querySelector("#ingredients")
const listItems = ingredients.map(ingredient => {
    const liItem = document.createElement("li");
    liItem.textContent = ingredient;
    return liItem;
})

ingredientRef.append(...listItems);
console.log(listItems);



// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.