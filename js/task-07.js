const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
  textRef.style.fontSize = `${fontSize}px`;
});
