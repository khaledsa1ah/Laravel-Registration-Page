document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationFormAr');
    const fullNameInput = document.getElementById('full_nameAr');
    const usernameInput = document.getElementById('usernameAr');
    const phoneInput = document.getElementById('phoneAr');
    const addressInput = document.getElementById('addressAr');
    const emailInput = document.getElementById('emailAr');
    const passwordInput = document.getElementById('passwordAr');
    const confirmPasswordInput = document.getElementById('confirm_passwordAr');
    const userImageInput = document.getElementById('user_image');
    const birthdateInput = document.getElementById('birthdateAr');
    const imagePreview = document.getElementById('imagePreview');

    // Add event listener to userImageInput for image preview
    userImageInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imgSrc = e.target.result;
                imagePreview.innerHTML = `<img src="${imgSrc}" alt="صورة المستخدم">`;
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
        const fullNameError = document.getElementById('full_nameAr-error');

        if (!fullNameValue) {
            fullNameError.textContent = 'الاسم كامل مطلوب.';
        } else {
            fullNameError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for username input
    usernameInput.addEventListener('input', () => {
        const usernameValue = usernameInput.value.trim();
        const usernameError = document.getElementById('usernameAr-error');

        if (!usernameValue) {
            usernameError.textContent = 'اسم المستخدم مطلوب.';
        } else if (/\s/.test(usernameValue)) {
            usernameError.textContent = 'اسم المستخدم لا يمكن أن يحتوي على مسافات.';
        } else {
            usernameError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for phone number input
    phoneInput.addEventListener('input', () => {
        const phoneValue = phoneInput.value.trim();
        const phoneError = document.getElementById('phoneAr-error');

        if (!phoneValue) {
            phoneError.textContent = 'رقم الهاتف مطلوب.';
        } else if (!/^(010|011|012|015)[0-9]{8}$/.test(phoneValue)) {
            phoneError.textContent = 'ادخل رقم هاتف محمول مصري صحيح (11 رقم يبدأ بـ 010، 011، 012، أو 015).';
        } else {
            phoneError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for address input
    addressInput.addEventListener('input', () => {
        updateErrorMessage(addressInput, document.getElementById('addressAr-error'), 'العنوان مطلوب.');
    });

    // Event listener for email input
    emailInput.addEventListener('input', () => {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('emailAr-error');

        if (!emailValue) {
            emailError.textContent = 'البريد الإلكتروني مطلوب.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailError.textContent = 'ادخل عنوان بريد إلكتروني صحيح.';
        } else {
            emailError.textContent = ''; // Clear the error message if input is valid
        }
    });

    // Event listener for password input
    passwordInput.addEventListener('input', () => {
        const passwordValue = passwordInput.value.trim();
        const passwordError = document.getElementById('passwordAr-error');

        updateErrorMessage(passwordInput, passwordError, 'كلمة المرور مطلوبة.');

        if (passwordValue && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/.test(passwordValue)) {
            passwordError.textContent = 'يجب أن تكون كلمة المرور على الأقل 8 أحرف وتحتوي على حرف كبير وحرف صغير ورقم وحرف خاص واحد على الأقل.';
        }
    });

    confirmPasswordInput.addEventListener('input', () => {
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (!confirmPasswordValue) {
            document.getElementById('confirm_passwordAr-error').textContent = 'تأكيد كلمة المرور مطلوب.';
        } else if (passwordInput.value.trim() !== confirmPasswordValue) {
            document.getElementById('confirm_passwordAr-error').textContent = 'كلمات المرور غير متطابقة.';
        } else {
            document.getElementById('confirm_passwordAr-error').textContent = ''; // Clear the error message if input is valid
        }
    });

    birthdateInput.addEventListener('input', () => {
        updateErrorMessage(birthdateInput, document.getElementById('birthdateAr-error'), 'تاريخ الميلاد مطلوب.');
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
            document.getElementById('full_nameAr-error').textContent = 'الاسم كامل مطلوب.';
            isValid = false;
        }
        // Validate username
        if (!username) {
            document.getElementById('usernameAr-error').textContent = 'اسم المستخدم مطلوب.';
            isValid = false;
        } else if (/\s/.test(username)) {
            document.getElementById('usernameAr-error').textContent = 'اسم المستخدم لا يمكن أن يحتوي على مسافات.';
            isValid = false;
        }

        // Validate phone number (basic validation)
        if (!phone) {
            document.getElementById('phoneAr-error').textContent = 'رقم الهاتف مطلوب.';
            isValid = false;
        } else if (!/^(010|011|012|015)[0-9]{8}$/.test(phone)) {
            document.getElementById('phoneAr-error').textContent = 'ادخل رقم هاتف محمول مصري صحيح (11 رقم يبدأ بـ 010، 011، 012، أو 015).';
            isValid = false;
        }

        // Validate address
        if (!address) {
            document.getElementById('addressAr-error').textContent = 'العنوان مطلوب.';
            isValid = false;
        }

        // Validate email format
        if (!email) {
            document.getElementById('emailAr-error').textContent = 'البريد الإلكتروني مطلوب.';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailAr-error').textContent = 'ادخل عنوان بريد إلكتروني صحيح.';
            isValid = false;
        }

        // Validate password
        if (!password) {
            document.getElementById('passwordAr-error').textContent = 'كلمة المرور مطلوبة.';
            isValid = false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/.test(password)) {
            document.getElementById('passwordAr-error').textContent = 'يجب أن تكون كلمة المرور على الأقل 8 أحرف وتحتوي على حرف كبير وحرف صغير ورقم وحرف خاص واحد على الأقل.';
            isValid = false;
        }

        // Validate confirm password
        if (!confirmPassword) {
            document.getElementById('confirm_passwordAr-error').textContent = 'تأكيد كلمة المرور مطلوب.';
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('confirm_passwordAr-error').textContent = 'كلمات المرور غير متطابقة.';
            isValid = false;
        }

        // Validate user image
        if (!userImageInput.value) {
            document.getElementById('user_image-error').textContent = 'صورة المستخدم مطلوبة.';
            isValid = false;
        }

        // Validate birthdate
        if (!birthdate) {
            document.getElementById('birthdateAr-error').textContent = 'تاريخ الميلاد مطلوب.';
            isValid = false;
        }

        if (!isValid) {
            alert('الرجاء تصحيح الأخطاء في النموذج.');
            return;
        }

        // Set AJAX headers
        const headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');

        // Send form data via AJAX
        const formData = new FormData(registrationForm);



        let fetchUrl = '/registerAr';

        fetch(fetchUrl, {
            method: 'POST',
            headers: headers,
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('تم التسجيل بنجاح!');
                    registrationForm.reset(); // Reset the form
                    imagePreview.style.display = 'none'; // Hide the image preview
                } else {
                    alert(data.message); // Display error message
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('حدث خطأ. الرجاء المحاولة مرة أخرى لاحقًا.');
            });
    });
});

