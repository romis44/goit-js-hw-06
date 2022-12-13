const count = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
btnIncrement.addEventListener("click", add);
btnDecrement.addEventListener("click", remove);
let counterValue = 0;
function add() {
  counterValue += 1;
  count.textContent = counterValue;
}
function remove() {
  counterValue -= 1;
  count.textContent = counterValue;
}
