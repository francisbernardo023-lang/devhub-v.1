const email = document.getElementById('email');
const emailErrorDisplay = document.getElementById('email-error');
email.addEventListener('input', function() {
    const emailValue = email.value;
    if (emailValue === "") {
        emailErrorDisplay.textContent = "Email cannot be empty!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailErrorDisplay.textContent = "Please enter a valid email address!";
    } else {
        emailErrorDisplay.textContent = "";
    }           
});