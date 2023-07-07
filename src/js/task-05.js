const user = document.querySelector("#name-output");
const inputField = document.querySelector("#name-input");

inputField.addEventListener("input", onInputChange);

function onInputChange(evt) {
  user.textContent = evt.currentTarget.value;
}
