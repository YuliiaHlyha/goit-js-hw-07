const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const emailTrim = elements.email.value.trim();
  const passwordTrim = elements.password.value.trim();
  if (emailTrim === "" || passwordTrim === "") {
    alert("All form fields must be filled in");
  } else {
    const info = {
      email: emailTrim,
      password: passwordTrim,
    };

    console.log(info);
  }
  event.currentTarget.reset();
}
