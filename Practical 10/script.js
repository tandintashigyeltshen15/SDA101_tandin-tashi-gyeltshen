// Get elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Regex rules
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

function validateForm() {
  let valid = true;

  // Username
  if (username.value.trim().length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long";
    username.classList.add("invalid-input");
    username.classList.remove("valid-input");
    valid = false;
  } else {
    usernameError.textContent = "";
    username.classList.add("valid-input");
    username.classList.remove("invalid-input");
  }

  // Email
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Enter a valid email (e.g., someone@example.com)";
    email.classList.add("invalid-input");
    email.classList.remove("valid-input");
    valid = false;
  } else {
    emailError.textContent = "";
    email.classList.add("valid-input");
    email.classList.remove("invalid-input");
  }

  // Password
  if (!passwordRegex.test(password.value)) {
    passwordError.textContent =
      "Password must be 8+ chars, include uppercase, lowercase, and a special character";
    password.classList.add("invalid-input");
    password.classList.remove("valid-input");
    valid = false;
  } else {
    passwordError.textContent = "";
    password.classList.add("valid-input");
    password.classList.remove("invalid-input");
  }

  // Confirm Password
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPassword.classList.add("invalid-input");
    confirmPassword.classList.remove("valid-input");
    valid = false;
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.add("valid-input");
    confirmPassword.classList.remove("invalid-input");
  }

  // Enable button only when all fields are valid
  submitBtn.disabled = !valid;
}

// Real-time validation
username.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
