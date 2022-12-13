const value = document.querySelector("#validation-input");
value.addEventListener("blur", onBlur);
function onBlur(event) {
  if (event.currentTarget.value.length === Number(value.dataset.length)) {
    value.classList.remove("invalid");
    value.classList.add("valid");
  } else {
    value.classList.remove("valid");
    value.classList.add("invalid");
  }
}
