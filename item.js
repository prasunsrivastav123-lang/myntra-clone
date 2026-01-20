// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// CART LOGIC
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").innerText = count;
}

function addToCart(id, name, price, image) {
    let cart = getCart();
    let item = cart.find(p => p.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ id, name, price, image, qty: 1 });
    }

    setCart(cart);
    alert("Added to Bag");
}

updateCartCount();

function goToCart() {
    window.location.href = "cart.html";
}
