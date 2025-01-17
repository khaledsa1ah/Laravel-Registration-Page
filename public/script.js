document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const fullNameInput = document.getElementById('full_name');
    const usernameInput = document.getElementById('username');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const userImageInput = document.getElementById('user_image');
    const birthdateInput = document.getElementById('birthdate');
    const imagePreview = document.getElementById('imagePreview');


    // Add event listener to userImageInput for image preview
    userImageInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imgSrc = e.target.result;
                imagePreview.innerHTML = `<img src="${imgSrc}" alt="User Image">`;
                imagePreview.style.display = 'block'; // Show the image preview
            };

            reader.readAsDataURL(file); // Convert file to base64 URL
        }
    });

    // Function to update error messages
    const updateErrorMessage = (inputElement, errorMessageElement, message) => {
        if (!inputElement.value.trim()) {
            errorMessageElement.textContent = message;
        } else {
            errorMessageElement.textContent = ''; // Clear the error message if input is valid
        }
    };

    // Event listener for full name input
    fullNameInput.addEventListener('input', () => {
        const fullNameValue = fullNameInput.value.trim();
        const fullNameError = document.getElementById('full_name-error');

        if (!fullNameValue) {
            fullNameError.textContent = 'Full Name is required.';
        }
        else {
            fullNameError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for username input
    usernameInput.addEventListener('input', () => {
        const usernameValue = usernameInput.value.trim();
        const usernameError = document.getElementById('username-error');

        if (!usernameValue) {
            usernameError.textContent = 'Username is required.';
        } else if (/\s/.test(usernameValue)) {
            usernameError.textContent = 'Username cannot contain spaces.';
        } else {
            usernameError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for phone number input
    phoneInput.addEventListener('input', () => {
        const phoneValue = phoneInput.value.trim();
        const phoneError = document.getElementById('phone-error');

        if (!phoneValue) {
            phoneError.textContent = 'Phone number is required.';
        } else if (!/^(010|011|012|015)[0-9]{8}$/.test(phoneValue)) {
            phoneError.textContent = 'Enter a valid Egyptian mobile number (11 digits starting with 010, 011, 012, or 015).';
        } else {
            phoneError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for address input
    addressInput.addEventListener('input', () => {
        updateErrorMessage(addressInput, document.getElementById('address-error'), 'Address is required.');
    });

    // Event listener for email input
    emailInput.addEventListener('input', () => {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('email-error');

        if (!emailValue) {
            emailError.textContent = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailError.textContent = 'Enter a valid email address.';
        } else {
            emailError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for password input
    passwordInput.addEventListener('input', () => {
        const passwordValue = passwordInput.value.trim();
        const passwordError = document.getElementById('password-error');

        updateErrorMessage(passwordInput, passwordError, 'Password is required.');

        if (passwordValue && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/.test(passwordValue)) {
            passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
        }
    });

    confirmPasswordInput.addEventListener('input', () => {
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (!confirmPasswordValue) {
            document.getElementById('confirm_password-error').textContent = 'Confirm Password is required.';
        } else if (passwordInput.value.trim() !== confirmPasswordValue) {
            document.getElementById('confirm_password-error').textContent = 'Passwords do not match.';
        } else {
            document.getElementById('confirm_password-error').textContent = ''; // Clear the error message if input is valid
        }
    });

    userImageInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imgSrc = e.target.result;
                imagePreview.innerHTML = `<img src="${imgSrc}" alt="User Image">`;
                imagePreview.style.display = 'block'; // Show the image preview
            };

            reader.readAsDataURL(file); // Convert file to base64 URL
        }
    });

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission by default

        const fullName = fullNameInput.value.trim();
        const username = usernameInput.value.trim();
        const phone = phoneInput.value.trim();
        const address = addressInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const birthdate = birthdateInput.value.trim();

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

        // Validation flags
        let isValid = true;

        // Validate full name
        if (!fullName) {
            document.getElementById('full_name-error').textContent = 'Full Name is required.';
            isValid = false;
        }

        // Validate username
        if (!username) {
            document.getElementById('username-error').textContent = 'Username is required.';
            isValid = false;
        } else if (/\s/.test(username)) {
            document.getElementById('username-error').textContent = 'Username cannot contain spaces.';
            isValid = false;
        }

        // Validate phone number (basic validation)
        if (!phone) {
            document.getElementById('phone-error').textContent = 'Phone number is required.';
            isValid = false;
        } else if (!/^(010|011|012|015)[0-9]{8}$/.test(phone)) {
            document.getElementById('phone-error').textContent = 'Enter a valid mobile number.';
            isValid = false;
        }

        // Validate address
        if (!address) {
            document.getElementById('address-error').textContent = 'Address is required.';
            isValid = false;
        }

        // Validate email format
        if (!email) {
            document.getElementById('email-error').textContent = 'Email is required.';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('email-error').textContent = 'Enter a valid email address.';
            isValid = false;
        }

        // Validate password
        if (!password) {
            document.getElementById('password-error').textContent = 'Password is required.';
            isValid = false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/.test(password)) {
            document.getElementById('password-error').textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
            isValid = false;
        }

        // Validate confirm password
        if (!confirmPassword) {
            document.getElementById('confirm_password-error').textContent = 'Confirm Password is required.';
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('confirm_password-error').textContent = 'Passwords do not match.';
            isValid = false;
        }

        // Validate user image
        if (!userImageInput.value) {
            document.getElementById('user_image-error').textContent = 'User image is required.';
            isValid = false;
        }

        // Validate birthdate
        if (!birthdate) {
            document.getElementById('birthdate-error').textContent = 'Birthdate is required.';
            isValid = false;
        }

        if (!isValid) {
            alert('Please fix the errors in the form.');
            return;
        }

        // Set AJAX headers
        const headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');

        // Send form data via AJAX
        const formData = new FormData(registrationForm);

        console.log(formData)

        let fetchUrl = '/register';


        fetch(fetchUrl, {
            method: 'POST',
            headers: headers,
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Registration successful!');
                    registrationForm.reset(); // Reset the form
                    imagePreview.style.display = 'none'; // Hide the image preview
                } else {
                    alert(data.message); // Display error message
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
    });
});
