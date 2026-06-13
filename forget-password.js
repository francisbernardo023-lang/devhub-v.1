const resetForm = document.getElementById('forgot-password-form');
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  return email && EMAIL_REGEX.test(email);
}

function generateTempPassword() {
  return Math.random().toString(36).slice(-10);
}

resetForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('reset-email').value.trim();
  const emailError = document.getElementById('email-error');
  emailError.textContent = '';

  // Validate email
  if (!email) {
    emailError.textContent = 'Email cannot be empty!';
    emailError.style.display = 'block';
    return;
  }

  if (!isValidEmail(email)) {
    emailError.textContent = 'Please enter a valid email address!';
    emailError.style.display = 'block';
    return;
  }

  try {
    const storedEmail = localStorage.getItem('user');

    if (email !== storedEmail) {
      emailError.textContent = 'Email not found in our system!';
      emailError.style.display = 'block';
      return;
    }

    const tempPassword = generateTempPassword();
    localStorage.setItem('password', tempPassword);

    alert(`Password reset successful!\n\nYour temporary password is:\n${tempPassword}\n\nYou can change it after logging in.`);
    window.location.href = 'log in.html';
  } catch (error) {
    emailError.textContent = 'An error occurred. Please try again.';
    emailError.style.display = 'block';
    console.error('Password reset error:', error);
  }
});