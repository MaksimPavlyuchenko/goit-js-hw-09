const start = document.querySelector(['button[data-start]']);
const stop = document.querySelector(['button[data-stop]']);
const body = document.querySelector('body');

let bodyColor = body.style.backgroundColor;

start.addEventListener('click', () => {
  bodyColor = setInterval(changeColor, 1000);
  start.disabled = 'true';
});
stop.addEventListener('click', () => {
  clearInterval(bodyColor);
  start.disabled = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}
