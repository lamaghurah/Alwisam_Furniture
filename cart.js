document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartBadge() {
        const badge = document.querySelector('.navbar .badge');
        if (badge) badge.textContent = cart.length;
    }

    function formatNumber(num) {
        return num.toLocaleString();
    }

    function updateCartPage() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        if (!cartItems || !cartTotal) return;

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'mb-2 d-flex justify-content-between align-items-center';
            li.innerHTML = `<span>${item.name} - $${formatNumber(item.price)}</span>`;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'btn-remove';
            removeBtn.innerHTML = '❌';

            removeBtn.addEventListener('click', () => {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartPage();
                updateCartBadge();
                showNotification(`${item.name} removed from cart!`);
            });

            li.appendChild(removeBtn);
            cartItems.appendChild(li);
            total += Number(item.price);
        });

        cartTotal.textContent = `Total: $${formatNumber(total)}`;
    }

    function showNotification(message) {
        const notif = document.getElementById('cart-notification');
        if (!notif) return;

        notif.textContent = message;
        notif.style.display = 'block';
        notif.style.opacity = 1;

        setTimeout(() => {
            notif.style.opacity = 0;
            setTimeout(() => { notif.style.display = 'none'; }, 500);
        }, 2000);
    }

    const buttons = document.querySelectorAll('.add-to-cart, .btn-add-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            // ✅ التحقق من تسجيل الدخول
            const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

            if (!isLoggedIn) {
                showNotification('Please login first!');
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1000);
                return;
            }

            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);

            cart.push({ name, price });
            localStorage.setItem('cart', JSON.stringify(cart));

            updateCartBadge();
            updateCartPage();
            showNotification(`${name} added to cart!`);
        });
    });

    updateCartBadge();
    updateCartPage();
});
