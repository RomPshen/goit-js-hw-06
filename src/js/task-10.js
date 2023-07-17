const setting = document.getElementById("controls");
const butCreate = document.querySelector("[data-create]");
const butDestroy = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  const initialSize = 30;
  const box = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: getRandomHexColor()`;
    box.appendChild(div);
  }

  setting.appendChild(box);
}

function destroyBoxes() {
  setting.textContent = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

butCreate.addEventListener("click", createBoxes);
butDestroy.addEventListener("click", destroyBoxes);