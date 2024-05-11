document.addEventListener('DOMContentLoaded', function() {
    const registrationFormEn = document.getElementById('registrationForm');
    const fullNameInputEn = document.getElementById('full_name');
    const usernameInputEn = document.getElementById('username');
    const phoneInputEn = document.getElementById('phone');
    const addressInputEn = document.getElementById('address');
    const emailInputEn = document.getElementById('email');
    const passwordInputEn = document.getElementById('password');
    const confirmPasswordInputEn = document.getElementById('confirm_password');
    const userImageInputEn = document.getElementById('user_image');
    const birthdateInputEn = document.getElementById('birthdate');
    const imagePreviewEn = document.getElementById('imagePreview');

    const registrationFormAr = document.getElementById('registrationFormAr');
    const fullNameInputAr = document.getElementById('full_nameAr');
    const usernameInputAr = document.getElementById('usernameAr');
    const phoneInputAr = document.getElementById('phoneAr');
    const addressInputAr = document.getElementById('addressAr');
    const emailInputAr = document.getElementById('emailAr');
    const passwordInputAr = document.getElementById('passwordAr');
    const confirmPasswordInputAr = document.getElementById('confirm_passwordAr');
    const userImageInputAr = document.getElementById('user_image');
    const birthdateInputAr = document.getElementById('birthdateAr');
    const imagePreviewAr = document.getElementById('imagePreview');

    let registrationForm;
    let fullNameInput;
    let usernameInput;
    let phoneInput;
    let addressInput;
    let emailInput;
    let passwordInput;
    let confirmPasswordInput;
    let userImageInput;
    let birthdateInput;
    let imagePreview;

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
    userImageInput = userImageInputEn;
    birthdateInput = birthdateInputEn;
    imagePreview = imagePreviewEn;
} else if (registrationFormAr) {
    registrationForm = registrationFormAr;
    fullNameInput = fullNameInputAr;
    usernameInput = usernameInputAr;
    phoneInput = phoneInputAr;
    addressInput = addressInputAr;
    emailInput = emailInputAr;
    passwordInput = passwordInputAr;
    confirmPasswordInput = confirmPasswordInputAr;
    userImageInput = userImageInputAr;
    birthdateInput = birthdateInputAr;
    imagePreview = imagePreviewAr;
}



    // Add event listener to userImageInput for image preview
    userImageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgSrc = e.target.result;
                imagePreview.innerHTML = `<img src="${imgSrc}" alt="User Image">`;
                imagePreview.style.display = 'block'; // Show the image preview
            };

            reader.readAsDataURL(file); // Convert file to base64 URL
        }
    });

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission by default

        const fullName = fullNameInput.value.trim();
        const username = usernameInput.value.trim();
        const phone = phoneInput.value.trim();
        const address = addressInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const birthdate = birthdateInput.value.trim();

        // Validate all fields
        if (!fullName || !username || !phone || !address || !email || !password || !confirmPassword || !birthdate) {
            alert('All fields are required.');
            return; // Exit function if any field is empty
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return; // Exit function if passwords don't match
        }

        if (!validateEmail(email)) {
            alert('Invalid email format.');
            return; // Exit function if email is invalid
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
                    imagePreviewEn.style.display = 'none'; // Hide the image preview
                } else {
                    alert(data.message); // Display error message
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        } else{
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
                    imagePreviewAr.style.display = 'none'; // Hide the image preview
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

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


});





// //Arabic Page

// document.addEventListener('DOMContentLoaded', function() {
//     const registrationFormAr = document.getElementById('registrationFormAr');
//     const fullNameInputAr = document.getElementById('full_nameAr');
//     const usernameInputAr = document.getElementById('usernameAr');
//     const phoneInputAr = document.getElementById('phoneAr');
//     const addressInputAr = document.getElementById('addressAr');
//     const emailInputAr = document.getElementById('emailAr');
//     const passwordInputAr = document.getElementById('passwordAr');
//     const confirmPasswordInputAr = document.getElementById('confirm_passwordAr');
//     const userImageInputAr = document.getElementById('user_imageAr');
//     const birthdateInputAr = document.getElementById('birthdateAr');
//     const imagePreviewAr = document.getElementById('imagePreviewAr');

//     // Add event listener to userImageInput for image preview
//     userImageInputAr.addEventListener('change', function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();

//             reader.onload = function(e) {
//                 const imgSrc = e.target.result;
//                 imagePreviewAr.innerHTML = `<img src="${imgSrc}" alt="User Image">`;
//                 imagePreviewAr.style.display = 'block'; // Show the image preview
//             };

//             reader.readAsDataURL(file); // Convert file to base64 URL
//         }
//     });

//     registrationFormAr.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission by default

//         const fullName = fullNameInputAr.value.trim();
//         const username = usernameInputAr.value.trim();
//         const phone = phoneInputAr.value.trim();
//         const address = addressInputAr.value.trim();
//         const email = emailInputAr.value.trim();
//         const password = passwordInputAr.value.trim();
//         const confirmPassword = confirmPasswordInputAr.value.trim();
//         const birthdate = birthdateInputAr.value.trim();

//         // Validate all fields
//         if (!fullName || !username || !phone || !address || !email || !password || !confirmPassword || !birthdate) {
//             alert('All fields are required.');
//             return; // Exit function if any field is empty
//         }

//         if (password !== confirmPassword) {
//             alert('Passwords do not match.');
//             return; // Exit function if passwords don't match
//         }

//         if (!validateEmail(email)) {
//             alert('Invalid email format.');
//             return; // Exit function if email is invalid
//         }

//         // Set AJAX headers
//         const headers = new Headers();
//         headers.append('X-Requested-With', 'XMLHttpRequest');

//         // Send form data via AJAX
//         const formData = new FormData(registrationFormAr);

//         fetch('/registerAr', {
//             method: 'POST',
//             headers: headers,
//             body: formData
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.success) {
//                     alert('Registration successful!');
//                     registrationFormAr.reset(); // Reset the form
//                     imagePreviewAr.style.display = 'none'; // Hide the image preview
//                 } else {
//                     alert(data.message); // Display error message
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 alert('An error occurred. Please try again later.');
//             });
//     });

//     // Function to validate email format
//     function validateEmail(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }


// });
