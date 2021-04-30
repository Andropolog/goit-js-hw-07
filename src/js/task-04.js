const button = {
  decBtn: document.querySelector("[data-action='decrement']"),
  incBtn: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"),
};

let counterValue = +button.span.textContent;
const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};

button.decBtn.addEventListener("click", decrement);
button.incBtn.addEventListener("click", increment);



// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.
// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса