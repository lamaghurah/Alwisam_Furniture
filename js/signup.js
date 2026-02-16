const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        showToast("❌ This email is already registered");
        return;
    }

    users.push({ username, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    showToast("✅ Signup successful!");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});

console.log("signup.js loaded");
