let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.oninput = () => output.textContent = input.value || 'незнакомец';



// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.