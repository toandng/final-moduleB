// 🛒 Lấy phần tử
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const closeModal = document.querySelector(".close");
const cartItemsContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

// 🛒 Cập nhật số lượng giỏ hàng
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// 🛒 Hiển thị danh sách sản phẩm trong giỏ hàng
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
        
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="cart-item-info">
                <p>${item.title}</p>
                <p>${item.quantity} x ${item.price.toLocaleString()}đ</p>
            </div>
            <div class="quantity-container">
                <button class="qty-btn minus">−</button>
                <input type="number" class="qty-input" value="1" min="1">
                <button class="qty-btn plus">+</button>
            </div>
            <button class="remove" data-id="${item.id}">🗑</button>
            
        `;
        cartItemsContainer.appendChild(div);
    });

    // 🛒 Xóa sản phẩm khỏi giỏ hàng
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function () {
            removeFromCart(this.getAttribute("data-id"));
            updateCartUI();
            updateCartCount();
        });
    });
    document.querySelectorAll(".qty-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            let input = this.parentElement.querySelector(".qty-input");
            let value = parseInt(input.value);
    
            if (this.classList.contains("plus")) {
                input.value = value + 1;
            } else if (this.classList.contains("minus") && value > 1) {
                input.value = value - 1;
            }
        });
    });
    
    // 🛒 Cập nhật tổng tiền
    subtotalElement.textContent = subtotal.toLocaleString() + "đ";
    totalElement.textContent = subtotal.toLocaleString() + "đ";
}

// 🛒 Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// 🛒 Mở giỏ hàng khi click vào icon
cartIcon.addEventListener("click", function () {
    updateCartUI();
    cartModal.style.display = "flex";
});

// 🛒 Đóng modal khi click dấu X
closeModal.addEventListener("click", function () {
    cartModal.style.display = "none";
});

// 🛒 Cập nhật giỏ hàng khi tải trang
updateCartCount();

