// Задание 6//

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let input = document.querySelector("#validation-input");
let inputNum = Number(input.getAttribute("data-length"));
input.addEventListener(`focus`, (event) => {
  event.target.classList.remove("valid");
  event.target.classList.remove("invalid");
});
input.addEventListener(`blur`, (event) => {
  if (input.value.length === inputNum) {
    event.target.classList.add("valid");
  } else {
    event.target.classList.add("invalid");
  }
});
