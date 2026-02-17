document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        showToast("Invalid email or password", "error");
        return;
    }

    localStorage.setItem("loggedUser", user.username);
    localStorage.setItem("loggedIn", "true");

    showToast("Login successful!", "success");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
});
