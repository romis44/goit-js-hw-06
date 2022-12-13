const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  outputEl.textContent = event.currentTarget.value;
  if (inputEl.value === "") {
    return (outputEl.textContent = "Anonymous");
  }
  //   console.log(outputEl);
}
