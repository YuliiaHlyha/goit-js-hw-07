const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const box = document.querySelector("div#boxes");
createBtn.addEventListener("click", handleCreateBoxes);
destroyBtn.addEventListener("click", handleDestroyBoxes);

function handleCreateBoxes(event) {
  const amount = Number(document.querySelector("input").value);
  document.querySelector("input").value = "";

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  box.innerHTML = "";
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }

  box.appendChild(fragment);

  console.log(amount);
}

function handleDestroyBoxes() {
  box.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
