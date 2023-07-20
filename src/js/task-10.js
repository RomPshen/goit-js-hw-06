const setting = document.querySelector("#controls");
const input = document.querySelector("input");
const butCreate = document.querySelector("[data-create]");
const butDestroy = document.querySelector("[data-destroy]");
const amount = input.value;

butCreate.addEventListener("click", createBoxes);
butDestroy.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  const initialSize = 30;
  const box = document.createDocumentFragment();

  for (let i = 0; i < amount; i = +1) {
    const size = initialSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: getRandomHexColor()`;
    box.appendChild(div);
  }

  setting.appendChild(box);
}
console.log(amount);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  input.value = "";
}
