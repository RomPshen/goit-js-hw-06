const inp = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inp.addEventListener("input", onTextSizeChange);

function onTextSizeChange() {
  textSize.style.fontSize = `${inp.value}px`;
}
