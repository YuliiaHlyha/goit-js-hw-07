const clickButton = document.querySelector(".change-color");
const color = document.querySelector("span.color");

clickButton.addEventListener("click", handleClick);
function handleClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
