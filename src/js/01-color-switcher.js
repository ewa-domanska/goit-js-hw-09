let startButton = document.querySelector('[data-start]');
let stopButton = document.querySelector('[data-stop]');
let background = document.querySelector("body");
let intervalID;

startButton.addEventListener("click", evt => {
  intervalID = setInterval(() => {
      background.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopButton.addEventListener("click", evt => {
  clearInterval(intervalID);
  stopButton.disabled = true;
  startButton.disabled = false;
});
