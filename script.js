let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function filterMenu() {
    const filter = document.getElementById('categoryFilter').value;
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        if (filter === 'all' || section.getAttribute('data-category') === filter) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.onscroll = function() {
    const cart = document.getElementById('cart');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        cart.classList.add('active');
    } else {
        cart.classList.remove('active');
    }
};

window.onload = function() {
    filterMenu();
};