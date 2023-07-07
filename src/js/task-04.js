const butDecr = document.querySelector("[data-action='decrement']");
const butIncr = document.querySelector("[data-action='increment']");
const num = document.querySelector("#value");

let counterValue = 0;
function incr() {
  counterValue += 1;
  num.textContent = counterValue;
}

function decr() {
  counterValue -= 1;
  num.textContent = counterValue;
}

butDecr.addEventListener("click", decr);
butIncr.addEventListener("click", incr);
