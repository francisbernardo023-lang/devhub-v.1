const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password");
    const emailErrorDisplay = document.getElementById("email-error");
    const passwordErrorDisplay = document.getElementById("password-error");

    emailErrorDisplay.textContent = "";
    passwordErrorDisplay.textContent = "";

    if (emailInput === "") {
        emailErrorDisplay.style.display = "block";
        emailErrorDisplay.textContent = "Email cannot be empty!";
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
        emailErrorDisplay.style.display = "block";
        emailErrorDisplay.textContent = "Please enter a valid email address!";
        return;
    } else {
        emailErrorDisplay.style.display = "none";
    }
    
    if (passwordInput.value === "") {
        passwordErrorDisplay.style.display = "block";
        passwordErrorDisplay.textContent = "Password cannot be empty!";
        return;
    } else {
        passwordErrorDisplay.style.display = "none";
    }

    const storedEmail = localStorage.getItem("user");
    const storedPassword = localStorage.getItem("password");
    if (emailInput !== storedEmail || passwordInput.value !== storedPassword) {
        emailErrorDisplay.style.display = "block";
        passwordErrorDisplay.style.display = "block";
        emailErrorDisplay.textContent = "Invalid email or password!";
        passwordErrorDisplay.textContent = "Invalid email or password!";
        return;
    } else if (emailInput === storedEmail && passwordInput.value === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html"; 
    } else {
        emailErrorDisplay.style.display = "block";
        passwordErrorDisplay.style.display = "block"; 
    }
    const passwordField = document.getElementById("password");
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

    localStorage.setItem('user', emailInput);
    localStorage.setItem('password', passwordInput.value);
});
