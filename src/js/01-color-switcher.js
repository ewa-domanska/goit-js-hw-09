let startButton = document.querySelector('[data-start]');
let stopButton = document.querySelector('[data-stop]');
let background = document.querySelector("body");

startButton.addEventListener("click", evt => {
  setInterval(() => {
    background.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// function () {
//
// }
//
//
// () => {
//
// }