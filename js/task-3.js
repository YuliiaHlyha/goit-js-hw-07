const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

function handleInput(event) {
  const nameTrim = nameInput.value.trim();
  if (nameTrim === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameTrim;
  }
}
nameInput.addEventListener("input", handleInput);
