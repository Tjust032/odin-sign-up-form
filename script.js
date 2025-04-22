
const form = document.getElementById('main-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('conf_password');

function validatePasswordsMatch() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

// Validate as user types
confirmPassword.addEventListener('input', validatePasswordsMatch);
password.addEventListener('input', validatePasswordsMatch);

// Also validate on submit
form.addEventListener('submit', function (e) {
    validatePasswordsMatch();
    if (!form.checkValidity()) {
        e.preventDefault(); // Prevent submit if invalid
    }
});
