document.addEventListener("DOMContentLoaded", function () {
    const loggedUser = localStorage.getItem("loggedUser");

    const authButtons = document.getElementById("authButtons");
    const userBox = document.getElementById("userBox");
    const usernameDisplay = document.getElementById("usernameDisplay");

    if (loggedUser) {
        authButtons.classList.add("d-none");
        userBox.classList.remove("d-none");
        usernameDisplay.textContent = loggedUser;
    }
});

function logout() {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedIn");
    location.reload();
}
