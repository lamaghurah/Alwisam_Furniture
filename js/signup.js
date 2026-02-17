const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        showToast("This email is already registered", "error");
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedUser", username);
    localStorage.setItem("loggedIn", "true");

    showToast("Signup successful!", "success");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
});
