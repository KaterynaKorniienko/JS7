// Задание 5//
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
let input = document.getElementById("name-input");
let output = document.getElementById("name-output");
input.onclick = function () {
  if (input.value === " ") {
    output.innerHTML = "Незнакомец";
  } else {
    output.innerHTML = input.value;
  }
};
