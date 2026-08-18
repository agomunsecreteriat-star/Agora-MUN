const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // TEST LOGIN
    const correctEmail = "chair@agomun.org";
    const correctPassword = "AGOMUN2026";

    if (email === correctEmail && password === correctPassword) {

        errorMessage.style.display = "none";

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } else {

        errorMessage.textContent =
            "Invalid email or password.";

        errorMessage.style.display = "block";
    }
});
