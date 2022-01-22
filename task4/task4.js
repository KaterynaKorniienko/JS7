// Задание 4//
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let button = {
  span: document.querySelector(`#value`),
  sub: document.querySelector(`[data-action="decrement"]`),
  plus: document.querySelector(`[data-action="increment"]`),
};
let counterValue = 0;
function increment() {
  counterValue += 1;
  button.span.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  button.span.textContent = counterValue;
}
button.plus.addEventListener("click", increment);
button.sub.addEventListener("click", decrement);
