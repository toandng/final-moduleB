const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const closeModal = document.querySelector(".close");
const cartItemsContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartUI() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Giỏ hàng trống.</p>";
        subtotalElement.textContent = "0đ";
        totalElement.textContent = "0đ";
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        console.log(item);
        

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="cart-item-info">
                <p>${item.name}</p>
                <p>${item.quantity} x ${item.price.toLocaleString()}đ</p>
            </div>
            <div class="quantity-container">
                <button class="qty-btn minus" data-id="${item.id}">−</button>
                <input type="number" class="qty-input" value="${item.quantity}" min="1" data-id="${item.id}">
                <button class="qty-btn plus" data-id="${item.id}">+</button>
            </div>
            <button class="remove" data-id="${item.id}">🗑</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function () {
            removeFromCart(this.getAttribute("data-id"));
        });
    });

  
    document.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            let productId = this.getAttribute("data-id");
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let item = cart.find(item => item.id == productId);
            
            if (!item) return;

            if (this.classList.contains("plus")) {
                item.quantity += 1;
            } else if (this.classList.contains("minus") && item.quantity > 1) {
                item.quantity -= 1;
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
            updateCartCount();
        });
    });

    subtotalElement.textContent = subtotal.toLocaleString() + "đ";
    totalElement.textContent = subtotal.toLocaleString() + "đ";
}


function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartUI();
    updateCartCount();
}

cartIcon.addEventListener("click", function () {
    updateCartUI();
    cartModal.style.display = "flex";
});


closeModal.addEventListener("click", function () {
    cartModal.style.display = "none";
});

updateCartCount();
