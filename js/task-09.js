// const button = document.querySelector(".change-color");
// const color = document.querySelector(".color");

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = getRandomeHexColor();

//   color.textContent = getRandomHexColor();
// });
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = color.textContent;
  color.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
