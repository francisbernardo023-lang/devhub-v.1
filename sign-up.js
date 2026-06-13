const form = document.getElementById('signup-button').closest('form');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN_LENGTH = 8;

function isValidEmail(email) {
  return email && EMAIL_REGEX.test(email);
}

function validatePassword(password) {
  if (!password) return 'Password cannot be empty!';
  if (password.length < PASSWORD_MIN_LENGTH) return 'Password must be at least 8 characters long.';
  if (!/\d/.test(password)) return 'Password must contain at least one number.';
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return 'Password must contain at least one special character.';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
  if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter.';
  return null;
}

function clearErrors() {
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  document.getElementById('confirm-password-error').textContent = '';
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  clearErrors();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');

  // Validate email
  if (!email) {
    emailError.textContent = 'Email cannot be empty!';
    return;
  }
  if (!isValidEmail(email)) {
    emailError.textContent = 'Please enter a valid email address!';
    return;
  }

  // Validate password
  const passwordValidation = validatePassword(password);
  if (passwordValidation) {
    passwordError.textContent = passwordValidation;
    return;
  }

  // Validate confirm password
  if (!confirmPassword) {
    confirmPasswordError.textContent = 'Please confirm your password!';
    return;
  }
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match!';
    return;
  }

  // Check if email already registered
  try {
    const storedEmail = localStorage.getItem('user');
    if (email === storedEmail) {
      emailError.textContent = 'This email is already registered.';
      return;
    }

    localStorage.setItem('user', email);
    localStorage.setItem('password', password);
    alert('Registration successful!');
    window.location.href = 'log in.html';
  } catch (error) {
    alert('An error occurred during registration. Please try again.');
    console.error('Registration error:', error);
  }
});
