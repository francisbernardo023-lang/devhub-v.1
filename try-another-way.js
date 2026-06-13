const emailBtn = document.querySelector('.email-btn');
const phoneBtn = document.querySelector('.phone-btn');
const socialBtns = document.querySelectorAll('.social-btn');

const emailModal = document.getElementById('email-modal');
const phoneModal = document.getElementById('phone-modal');
const emailSigninForm = document.getElementById('email-signin-form');
const phoneSigninForm = document.getElementById('phone-signin-form');

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function() {
    emailModal.style.display = 'none';
    phoneModal.style.display = 'none';
  });
});

// Email sign-in
emailBtn.addEventListener('click', function() {
  emailModal.style.display = 'block';
});

emailSigninForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('signin-email').value.trim();
  const emailError = document.getElementById('email-error');

  if (!email) {
    emailError.textContent = 'Email cannot be empty!';
    emailError.style.display = 'block';
    return;
  }

  const storedEmail = localStorage.getItem('user');
  if (email !== storedEmail) {
    emailError.textContent = 'Email not found in our system!';
    emailError.style.display = 'block';
    return;
  }

  alert('Email verification code sent! Check your email.');
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'dashboard.html';
});

// Phone sign-in
phoneBtn.addEventListener('click', function() {
  phoneModal.style.display = 'block';
});

phoneSigninForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const phone = document.getElementById('signin-phone').value.trim();
  const phoneError = document.getElementById('phone-error');

  if (!phone) {
    phoneError.textContent = 'Phone number cannot be empty!';
    phoneError.style.display = 'block';
    return;
  }

  const phoneRegex = /^[\d\-\+\(\)\s]{10,}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = 'Please enter a valid phone number!';
    phoneError.style.display = 'block';
    return;
  }

  alert('SMS verification code sent to your phone!');
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'dashboard.html';
});

// Social sign-in functions
function loginWithGoogle() {
  alert('Google login would redirect to Google OAuth');
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'dashboard.html';
}

function loginWithFacebook() {
  alert('Facebook login would redirect to Facebook OAuth');
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'dashboard.html';
}

function loginWithApple() {
  alert('Apple login would redirect to Apple OAuth');
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'dashboard.html';
}

// Add event listeners for social buttons
socialBtns.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    if (btn.textContent.includes('Google')) {
      loginWithGoogle();
    } else if (btn.textContent.includes('Facebook')) {
      loginWithFacebook();
    } else if (btn.textContent.includes('Apple')) {
      loginWithApple();
    }
  });
});
