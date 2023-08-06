const changeColorBtn = document.querySelector(".change-color");
const colorNumb = document.querySelector(".color");

changeColorBtn.addEventListener("click", onClick);


function onClick() {
  var currentColor = getRandomHexColor();
   
document.body.style.backgroundColor = currentColor;
  colorNumb.textContent = currentColor;
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

