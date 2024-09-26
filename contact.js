
function validateForm() {
    let isValid = true;

    // Get form elements
    const firstName = document.getElementById('Firstname');
    const lastName = document.querySelector('input[name="Last name"]');
    const email = document.getElementById('email');
    const message = document.getElementById('Message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';

    // Validate First Name
    if (firstName.value.trim() === '') {
        nameError.textContent = 'First Name is required.';
        isValid = false;
    }

    // Validate Last Name
    if (lastName.value.trim() === '') {
        nameError.textContent = 'Last Name is required.';
        isValid = false;
    }

    // Validate Email Address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Message
    if (message.value.trim() === '') {
        // For this, you can add a custom error message if needed.
        // Example: document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
}

