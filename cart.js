const cartContainer = document.getElementById("cartContainer");
const totalPriceEl = document.getElementById("totalPrice");

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cart = getCart();
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty</p>";
        totalPriceEl.innerText = "0";
        return;
    }

    cart.forEach(item => {
        total += item.price * item.qty;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div class="cart-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>

                    <div class="qty">
                        <button onclick="changeQty(${item.id}, -1)">−</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>

                    <button class="remove-btn" onclick="removeItem(${item.id})">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });

    totalPriceEl.innerText = total;
}

function changeQty(id, change) {
    let cart = getCart();
    let item = cart.find(p => p.id === id);

    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    saveCart(cart);
}

function removeItem(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

renderCart();
