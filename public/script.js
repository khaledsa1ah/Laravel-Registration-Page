document.addEventListener('DOMContentLoaded', function() {
    const registrationFormEn = document.getElementById('registrationForm');
    const fullNameInputEn = document.getElementById('full_name');
    const usernameInputEn = document.getElementById('username');
    const phoneInputEn = document.getElementById('phone');
    const addressInputEn = document.getElementById('address');
    const emailInputEn = document.getElementById('email');
    const passwordInputEn = document.getElementById('password');
    const confirmPasswordInputEn = document.getElementById('confirm_password');
    const birthdateInputEn = document.getElementById('birthdate');

    const registrationFormAr = document.getElementById('registrationFormAr');
    const fullNameInputAr = document.getElementById('full_nameAr');
    const usernameInputAr = document.getElementById('usernameAr');
    const phoneInputAr = document.getElementById('phoneAr');
    const addressInputAr = document.getElementById('addressAr');
    const emailInputAr = document.getElementById('emailAr');
    const passwordInputAr = document.getElementById('passwordAr');
    const confirmPasswordInputAr = document.getElementById('confirm_passwordAr');
    const birthdateInputAr = document.getElementById('birthdateAr');

    let registrationForm;
    let fullNameInput;
    let usernameInput;
    let phoneInput;
    let addressInput;
    let emailInput;
    let passwordInput;
    let confirmPasswordInput;
    let birthdateInput;

    // Check which form exists and assign corresponding elements to the variables
    if (registrationFormEn) {
        registrationForm = registrationFormEn;
        fullNameInput = fullNameInputEn;
        usernameInput = usernameInputEn;
        phoneInput = phoneInputEn;
        addressInput = addressInputEn;
        emailInput = emailInputEn;
        passwordInput = passwordInputEn;
        confirmPasswordInput = confirmPasswordInputEn;
        birthdateInput = birthdateInputEn;
    } else if (registrationFormAr) {
        registrationForm = registrationFormAr;
        fullNameInput = fullNameInputAr;
        usernameInput = usernameInputAr;
        phoneInput = phoneInputAr;
        addressInput = addressInputAr;
        emailInput = emailInputAr;
        passwordInput = passwordInputAr;
        confirmPasswordInput = confirmPasswordInputAr;
        birthdateInput = birthdateInputAr;
    }

    // Function to add warning message next to input fields
    function addWarningMessage(inputElement, message) {
        const parent = inputElement.parentElement;
        let warning = parent.querySelector('.input-warning');
        if (!warning) {
            warning = document.createElement('span');
            warning.classList.add('input-warning');
            parent.appendChild(warning);
        }
        warning.textContent = message;
    }

    // Function to remove warning message
    function removeWarningMessage(inputElement) {
        const parent = inputElement.parentElement;
        const warning = parent.querySelector('.input-warning');
        if (warning) {
            parent.removeChild(warning);
        }
    }

    // Event listeners for input fields to validate live
    fullNameInput.addEventListener('input', function() {
        const fullName = fullNameInput.value.trim();
        if (!fullName) {
            addWarningMessage(fullNameInput, 'Full name is required.');
        } else {
            removeWarningMessage(fullNameInput);
        }
    });

    usernameInput.addEventListener('input', function() {
        const username = usernameInput.value.trim();
        if (!username) {
            addWarningMessage(usernameInput, 'Username is required.');
        } else {
            removeWarningMessage(usernameInput);
        }
    });

    phoneInput.addEventListener('input', function() {
        const phone = phoneInput.value.trim();
        if (!phone || !validatePhoneNumber(phone)) {
            addWarningMessage(phoneInput, 'Invalid phone number format.');
        } else {
            removeWarningMessage(phoneInput);
        }
    });

    addressInput.addEventListener('input', function() {
        const address = addressInput.value.trim();
        if (!address) {
            addWarningMessage(addressInput, 'Address is required.');
        } else {
            removeWarningMessage(addressInput);
        }
    });

    emailInput.addEventListener('input', function() {
        const email = emailInput.value.trim();
        if (!email || !validateEmail(email)) {
            addWarningMessage(emailInput, 'Invalid email format.');
        } else {
            removeWarningMessage(emailInput);
        }
    });

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value.trim();
        if (!password) {
            addWarningMessage(passwordInput, 'Password is required.');
        } else {
            removeWarningMessage(passwordInput);
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        const confirmPassword = confirmPasswordInput.value.trim();
        const password = passwordInput.value.trim();
        if (!confirmPassword || confirmPassword !== password) {
            addWarningMessage(confirmPasswordInput, 'Passwords do not match.');
        } else {
            removeWarningMessage(confirmPasswordInput);
        }
    });

    birthdateInput.addEventListener('input', function() {
        const birthdate = birthdateInput.value.trim();
        if (!birthdate) {
            addWarningMessage(birthdateInput, 'Birthdate is required.');
        } else {
            removeWarningMessage(birthdateInput);
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number format
    function validatePhoneNumber(phone) {
        // This regex allows numbers and a few common characters like spaces, dashes, and parentheses.
        const phoneRegex = /^[\d\s()-]+$/;
        return phoneRegex.test(phone);
    }

    // Form submission event listener
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission by default

        // Validate all fields before submission
        const fullName = fullNameInput.value.trim();
        const username = usernameInput.value.trim();
        const phone = phoneInput.value.trim();
        const address = addressInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const birthdate = birthdateInput.value.trim();

        // Check for empty fields and display warnings
        if (!fullName) {
            addWarningMessage(fullNameInput, 'Full name is required.');
        }
        if (!username) {
            addWarningMessage(usernameInput, 'Username is required.');
        }
        if (!phone || !validatePhoneNumber(phone)) {
            addWarningMessage(phoneInput, 'Invalid phone number format.');
        }
        if (!address) {
            addWarningMessage(addressInput, 'Address is required.');
        }
        if (!email || !validateEmail(email)) {
            addWarningMessage(emailInput, 'Invalid email format.');
        }
        if (!password) {
            addWarningMessage(passwordInput, 'Password is required.');
        }
        if (!confirmPassword || confirmPassword !== password) {
            addWarningMessage(confirmPasswordInput, 'Passwords do not match.');
        }
        if (!birthdate) {
            addWarningMessage(birthdateInput, 'Birthdate is required.');
        }

        // If any field is invalid, stop form submission
        if (registrationForm.querySelector('.input-warning')) {
            return;
        }

        // Set AJAX headers
        const headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');

        // Send form data via AJAX
        const formData = new FormData(registrationForm);

        if (registrationFormEn) {
            fetch('/register', {
                method: 'POST',
                headers: headers,
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Registration successful!');
                        registrationFormEn.reset(); // Reset the form
                    } else {
                        alert(data.message); // Display error message
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again later.');
                });
        } else {
            fetch('/registerAr', {
                method: 'POST',
                headers: headers,
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Registration successful!');
                        registrationFormAr.reset(); // Reset the form
                    } else {
                        alert(data.message); // Display error message
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again later.');
                });
        }
    });
});
