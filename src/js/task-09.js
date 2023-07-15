const changeColorBtn = document.querySelector(".change-color");
const colorNumb = document.querySelector(".color");

changeColorBtn.addEventListener("click", onClick);

function onClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNumb.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
