// Function to toggle password visibility
function togglePassword() {
    let passwordField = document.getElementById("password");
    let icon = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.textContent = "🙈"; // Change icon
    } else {
        passwordField.type = "password";
        icon.textContent = "👁"; // Revert icon
    }
}