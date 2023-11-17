// Validate the signup form
function validateSignupForm() {
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
  
    if (name === '') {
      alert('Please enter your name.');
      return false;
    }
  
    if (email === '') {
      alert('Please enter your email address.');
      return false;
    }
  
    if (password === '') {
      alert('Please enter a password.');
      return false;
    }
  
    return true;
  }
  
  // Submit the signup form
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    if (validateSignupForm()) {
      this.submit();
    }
  });
  