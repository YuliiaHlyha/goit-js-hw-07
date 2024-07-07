const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
nameInput.addEventListener("input", handleInput);
function handleInput(event) {
  const nameTrim = nameInput.value.trim();
  if (nameTrim === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameTrim;
  }
  console.log(event.currentTarget.value);
}
