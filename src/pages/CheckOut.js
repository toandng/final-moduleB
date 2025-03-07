function Checkout() {
    return `
        <div class="container checkout-container">
            <h2 class="text-center mb-4">Thanh Toán</h2>
            <div class="row">
                <div class="col-md-6" style="margin:50px;">
                    <h4>Thông Tin Giao Hàng</h4>
                    <form id="checkout-form">
                        <div class="mb-3">
                            <label for="fullname" class="form-label">Họ và tên</label>
                            <input type="text" class="form-control" id="fullname" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" id="phone" required>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Địa chỉ</label>
                            <textarea class="form-control" id="address" rows="2" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="payment" class="form-label">Phương thức thanh toán</label>
                            <select class="form-select" id="payment">
                                <option value="cod">Thanh toán khi nhận hàng (COD)</option>
                                <option value="vnpay">VNPay</option>
                                <option value="momo">Momo</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <h4>Đơn Hàng Của Bạn</h4>
                    <div id="order-summary"></div>
                    <button class="btn btn-primary w-100 mt-3" id="confirm-order">Xác Nhận Đặt Hàng</button>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const orderSummary = document.getElementById("order-summary");

    // Lấy sản phẩm từ Mua ngay hoặc giỏ hàng
    let cart = JSON.parse(localStorage.getItem("checkoutProduct")) || JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        orderSummary.innerHTML = "<p class='text-danger'>Không có sản phẩm nào trong đơn hàng!</p>";
    } else {
        let total = 0;
        orderSummary.innerHTML = cart.map(item => {
            total += item.price * item.quantity;
            return `<div class='order-item'>
                <p><strong>${item.title}</strong> x${item.quantity}</p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            </div>`;
        }).join('');
        orderSummary.innerHTML += `<hr><p><strong>Tổng cộng: $${total.toFixed(2)}</strong></p>`;
    }

    document.getElementById("confirm-order").addEventListener("click", function () {
        alert("Đơn hàng của bạn đã được xác nhận! Cảm ơn bạn đã mua sắm.");

        // Xóa chỉ mục checkoutProduct hoặc toàn bộ giỏ hàng nếu có
        localStorage.removeItem("checkoutProduct");
        localStorage.removeItem("cart");

        window.location.href = "/";
    });
});


export default Checkout;