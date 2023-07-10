function validateForm(event) {
    event.preventDefault();

    // Reset error messages
    clearErrors();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var date = document.getElementById('date').value;
    var color = document.getElementById('color').value;

    // Validate name
    if (!name) {
      showError('name', 'Name is required');
    }

    // Validate email
    if (!email) {
      showError('email', 'Email is required');
    } else if (!validateEmail(email)) {
      showError('email', 'Invalid email format');
    }

    // Validate phone number
    if (!phone) {
      showError('phone', 'Phone number is required');
    }

    // Validate password
    if (!password) {
      showError('password', 'Password is required');
    }

    // Validate age
    if (!age) {
      showError('age', 'Age is required');
    } else if (age < 1 || age > 150) {
      showError('age', 'Invalid age');
    }

    // Validate gender
    if (!gender) {
      showError('gender', 'Gender is required');
    }

    // Validate date
    if (!date) {
      showError('date', 'Date is required');
    }

    // Validate color
    if (!color) {
      showError('color', 'Color is required');
    }

    // If there are no errors, submit the form
    if (!document.getElementsByClassName('error').length) {
      document.getElementById('myForm').submit();
    }
  }

  // Helper function to validate email using regular expression
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Helper function to show error message
  function showError(field, message) {
    var errorElement = document.getElementById(field + 'Error');
    errorElement.textContent = message;
  }

  // Helper function to clear error messages
  function clearErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  }