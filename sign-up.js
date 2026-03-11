const form = document.getElementById('signup-button').closest('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const passwordinput = document.getElementById('password').value;
  const confirmPasswordInput = document.getElementById('confirm-password');
  const errordisplay = document.getElementById('password-error');
  const emailErrorDisplay = document.getElementById('email-error');
  const confirmPasswordErrorDisplay = document.getElementById('confirm-password-error');

  errordisplay.textContent = "";
  emailErrorDisplay.textContent = "";
  confirmPasswordErrorDisplay.textContent = "";

  if (email === "") {
    emailErrorDisplay.textContent = "Email cannot be empty!";
    return;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailErrorDisplay.textContent = "Please enter a valid email address!";
    return;
  } else {
    emailErrorDisplay.textContent = "";
  }



  if (passwordinput === "") {
    errordisplay.textContent = "Password cannot be empty!";
    return;
  } else if (confirmPasswordInput.value === "") {
    confirmPasswordErrorDisplay.textContent = "Please confirm your password!";
    return;
  } else if (passwordinput !== confirmPasswordInput.value) {
    confirmPasswordErrorDisplay.textContent = "Passwords do not match!";
    return;
  } else (passwordinput === confirmPasswordInput.value)
        errordisplay.textContent = "";

  if (passwordinput.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  } else if (!/\d/.test(passwordinput)) {
    alert("Password must contain at least one number.");
    return;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordinput)) {
    alert("Password must contain at least one special character.");
    return;
  } else if (!/[A-Z]/.test(passwordinput)) {
    alert("Password must contain at least one uppercase letter.");
    return;
  } else if (!/[a-z]/.test(passwordinput)) {
    alert("Password must contain at least one lowercase letter.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  } 
  const storedEmail = localStorage.getItem("user");

if (email === storedEmail) {
  alert("This email is already registered.");
  return;
} else {
  localStorage.setItem("user", email); 
  alert("Registration successful!");
  window.location.href = "log in.html";
}const passwordField = document.getElementById("password");
    const toggleButton = document.getElementById("toggle-password");

    toggleButton.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleButton.textContent = "Hide Password";
        } else {
            passwordField.type = "password";
            toggleButton.textContent = "Show Password";
        }
    });

  localStorage.setItem('user', email);
  localStorage.setItem('password', passwordinput);

  console.log("Form submitted successfully!", { email, password });
});
