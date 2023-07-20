const user = document.querySelector("#name-output");
const inputField = document.querySelector("#name-input");

inputField.addEventListener("input", onInputChange);

function onInputChange(evt) {
    if (evt.currentTarget.value !== "") {
      user.textContent = evt.currentTarget.value;
  }
   else {user.textContent = "Anonymous";}
};
