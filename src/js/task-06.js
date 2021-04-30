const input = document.querySelector("#validation-input");
const inputBorder = (event) => {
    input.classList.add('invalid');
    if (+(input.dataset.length) === input.value.length) {
        input.classList.replace("invalid", "valid");
    }
}
input.addEventListener('blur', inputBorder);



// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.


