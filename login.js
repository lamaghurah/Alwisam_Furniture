document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        localStorage.setItem("loggedUser", user.username);
        showToast("✅ Login successful!", "success");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        showToast("❌ Your email or password is incorrect.");
    }
});
