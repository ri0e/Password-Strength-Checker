const input = document.querySelector(".input");
const strengthEl = document.getElementById("strength");
const bar = document.querySelector(".bar-fill");

input.addEventListener("input", check);

function check() {
  const password = input.value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  if (password.length >= 12) strength++;

  if (/password|123456|qwerty/i.test(password)) {
    strength = 1;
  }

  let color = "red";
  let message = "Weak Password";
  let width = "30%";

  if (strength <= 2) {
    color = "red";
    message = "Weak Password";
    width = "30%";
  } else if (strength <= 4) {
    color = "yellow";
    message = "Medium Password";
    width = "60%";
  } else {
    color = "mediumspringgreen";
    message = "Strong Password";
    width = "100%";
  }

  input.style.borderColor = color;
  input.style.color = color;
  strengthEl.innerText = message;
  strengthEl.style.color = color;
  bar.style.width = width;
  bar.style.background = color;

  if (password.length === 0) {
    strengthEl.innerText = "Type a password...";
    bar.style.width = "0%";
    input.style.borderColor = "mediumspringgreen";
    input.style.color = "mediumspringgreen";
  }
}
