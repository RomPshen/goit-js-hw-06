const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", onInputBlur);
console.log(inputField.value.length);
console.log(inputField.dataset.length);

function onInputBlur() {
  if (inputField.dataset.length === inputField.value.length) {
    inputField.classList.add("valid");
  } else {
    inputField.classList.add("invalid");
  }
}
