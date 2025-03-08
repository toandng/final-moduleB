import "../../style.css";
import { SearchBar } from "../components/SearchBar";
import Footer from "../layouts/Footer";
function ProductDetail(id) {
    return `
        
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My App</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <link rel="stylesheet" href="styles.css">
   
</head>
<style>

.card{
    width:50%;
}
.btn-primary{
    float:right;
}
.add-card{
    float:right;
}
.product-cart{
    display: flex;
}
.cart-icon {
    position: fixed;
    top: -23px;
    right: 20px;
    padding: 15px;
	margin-top: 50px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-size: 24px;
}

.cart-icon span {
    position: absolute;
    top: 5px;
    right: 5px;
    background: red;
    color: white;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 50%;
}
.card-body{
    position: relative;
    top: 100px;
}
.card-body i{
     color: rgb(212, 212, 60);
}
    .card-text {
        font-weight:700;
        font-size:20px;
    }
.card-title{
    font-size:24px;
    font-weight:700;
}
#app{
    position:relative;
    top:100px;
}
    .add-card button{
        margin: 0px 10px;
        padding: 12px 20px;
        background: #000;
        color: #fff;
          border-radius: 5px;
        text-transform: uppercase;
    }
     .add-card button:hover{
        background: #fff;
        color:#000;
        border: 1px solid #000;
        border-radius: 5px;
        text-transform: uppercase;
     }
            .buy-card button{
        margin: 0px 0px;
        padding: 12px 20px;
        background: #000;
        color: #fff;
          border-radius: 5px;
        text-transform: uppercase;
    }
     .buy-card button:hover{
        background: #fff;
        color:#000;
        border: 1px solid #000;
        border-radius: 5px;
        text-transform: uppercase;
     }
#product-info{
    width: 30%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}
    #reviews{
        width: 30%;
        display: block;
        margin: 30px 0px;
    }

.review i{
    color: rgb(212, 212, 60);
}
#product-info h5{
    text-align: center;
    color: #333;
}
#product-info p{
    margin: 8px 0;
    line-height: 1.5;
    display: block;
        justify-self: start;
}
    #product-info .label{
     font-weight: bold;
    color: #444;
     
    }
#product-info .return-policy{
    display: flex;
    flex-direction: column;
}
#product-info .tags{
  margin-top: 10px;
    font-style: italic;
    color: #666;
}
footer{
	background-color: #333;
    padding: 10px 30px;
margin: 10px auto;
color:#fff;
}
.container{

    opacity: 0.9;
}
.contact{
	display: flex;
	justify-content: space-between;
	padding: 20px 20px;
	margin-top: 20px;
}
     h3{
        font-size: 24px;
    font-weight:700;
    }
.info-contact li{
    display:block;
    justify-self: start;
    margin: 0px 5px;
}
    .info-contact i{
        margin: 0px 5px;
    }
.info-address {
  list-style: none;
}
.info-address li > h3{
    display:block;
    justify-self: start;
  
}
.info-address li > p{
    display:block;
    justify-self: start;
}
    .info-address i {
        margin: 0px 5px;
    }
.about  {
	cursor: pointer;
	margin: 0px 5px;
	padding: 0px 10px;
}
.about h3{
    font-size: 20px;
    font-weight:700;
}
.about p{
font-size: 18px;
    font-weight:700;
}
.address h3{  
    font-size: 20px;
    font-weight:700;
}
    .pay h3{
      font-size: 20px;
    font-weight:700;
    }
.ol-pay{
	display: flex;
	justify-content: space-around;
}
.product-brand{
    font-weight:700;
}
#app{
    background: #f5f5f5;
}
#product-detail{
    padding:50px 40px;
}
.buy-modal{
    display:flex;
}
@media (max-width: 768px) {
    .product-cart {
        display:block;
    }
   .card{
        background: #f5f5f5;
        border:none;
   }
   .buy-modal{
    display:block;
   }
    .nav-tabs{
        margin:100px auto;
    }
        #product-info{
            width:100%;

    }
            #reviews{
                width:100%;
            }
    .buy-card button{
    margin: 0px -15px;
    padding: 12px 49px;
    width:300px;
    }
    .add-card button {
        margin: 9px -30px;
        padding: 12px 6px;
        width:300px;
    }
    .quantity-container {
        width: 300px;
        margin: 0px -18px;
    }
    .contact{
        display:block;

    }

}
    @media (min-width: 768px) {
   .card{
        background: #f5f5f5;
        border:none;
   }
   .buy-modal{
    display:flex;
    margin:50px auto;
   }
    .nav-tabs{
        margin:100px auto;
    }
    .buy-card button{
           margin: 8px 7px;
        padding: 12px 49px;
        width: 200px;
    }
    .add-card button {
                margin: 9px 7px;
        padding: 12px 6px;
        width: 200px;
    }
    .quantity-container {
        width: 200px;
        margin: 7px 16px;
    }
.cart-modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}
.cart-content {
    text-align: center;
}
.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 10px;
}
.cart-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
}
.remove {
    background: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
}

}
</style>
<body>  
    ${SearchBar()}

    <div class="container">
        <div id="product-detail">Đang tải...</div>
    </div>
    

    ${Footer()}
    <script src="/src/app.js"></script>
    <script src="https://kit.fontawesome.com/f464ed5cf0.js" crossorigin="anonymous"></script>

</body>
</html>
    `;
}

function fetchProductDetail(id) {
    const productDetailContainer = document.getElementById("product-detail");
    if (!productDetailContainer) return;

    if (!id || id === ":id") {
        productDetailContainer.innerHTML = `<p class='text-danger text-center'>ID sản phẩm không hợp lệ</p>`;
        return;
    }

    fetch(`http://localhost:3000/products/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Không tìm thấy sản phẩm với ID ${id}`);
            }
            return response.json();
        })
        .then(product => {
            const tags = product.tags?.length ? product.tags.join(', ') : "Không có tag";
            const reviewsHTML = product.reviews?.length 
                ? product.reviews.map(review => `
                    <div class="review">
                        <p><strong>${review.reviewerName}</strong> - <i class="fa-solid fa-star"></i> ${review.rating}/5</p>
                        <p>${review.comment}</p>
                        <small>${new Date(review.date).toLocaleDateString()}</small>
                    </div>
                `).join('')
                : "<p>Chưa có đánh giá nào.</p>";

            productDetailContainer.innerHTML = `
                <div class="product-cart">
                    <div class="card">
                        <div class="card-img"><img src="${product.thumbnail}" alt="${product.title}"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="product-brand">Loại: ${product.brand} </p>
                        <p><i class="fa-solid fa-star"></i> ${product.rating}</p>
                        <p class="card-text">Giá: $${product.price}</p>
                    <div class="buy-modal">
                          <div class="quantity-container">
                            <button class="qty-btn minus" data-id="${product.id}">−</button>
                            <input type="number" class="qty-input" value="1" min="1" data-id="${product.id}">
                            <button class="qty-btn plus" data-id="${product.id}">+</button>
                        </div>
                        <div class="add-card">
                            <button id="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>
                        </div> 
                        <div class="buy-card">
                            <button id="add-to-cart-btn" data-id="${product.id}">Mua ngay</button>
                        </div> 
                    </div> 
                    </div>
                </div>
                
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" id="product-tab" href="#">Chi tiết sản phẩm</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="review-tab" href="#">Đánh giá</a>
                    </li>
                </ul>
    
                <div id="product-info">
                    <h5>Tên sản phẩm: ${product.title}</h5>
                    <p><span class="label">Mô tả:</span> ${product.description}</p>
                    <p><span class="label">Danh mục:</span> ${product.category}</p>
                    <p><span class="label">Thương hiệu:</span> ${product.brand}</p>
                    <p><span class="label">Tồn kho:</span> ${product.stock}</p>
                    <p class="return-policy">
                        <span class="label">Chính sách trả lại:</span> ${product.returnPolicy}<br>
                        <span class="label">Số lượng tối thiểu:</span> ${product.minimumOrderQuantity}
                    </p>
                    <p class="tags"><span class="label">Tags:</span> ${tags}</p>
                </div>
                <div id="reviews" style="display: none;">
                    <h5>Đánh giá sản phẩm</h5>
                    ${reviewsHTML}
                </div>
            `;

                // index count
                document.querySelectorAll(".qty-btn").forEach(btn => {
                    btn.addEventListener("click", function () {
                        let input = document.querySelector(`.qty-input[data-id="${product.id}"]`);
                        let currentQuantity = parseInt(input.value);
                        
                        if (this.classList.contains("plus")) {
                            input.value = currentQuantity + 1;
                        } else if (this.classList.contains("minus") && currentQuantity > 1) {
                            input.value = currentQuantity - 1;
                        }
                    });
                });
    
                document.getElementById("add-to-cart-btn").addEventListener("click", function (e) {
                    e.preventDefault();
                    
                    let quantity = parseInt(document.querySelector(`.qty-input[data-id="${product.id}"]`).value);
                    
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    let existingProduct = cart.find(item => item.id === product.id);
    
                    if (existingProduct) {
                        existingProduct.quantity += quantity;
                    } else {
                        cart.push({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            thumbnail: product.thumbnail,
                            quantity: quantity
                        });
                    }
    
                    localStorage.setItem("cart", JSON.stringify(cart));
    
                    alert("Sản phẩm đã được thêm vào giỏ hàng!");
                    updateCartCount();
                });
                function updateCartCount() {
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    let cartCount = document.getElementById("cart-count");
                
                    if (cartCount) {
                        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
                    }
                }
                document.addEventListener("DOMContentLoaded", function () {
                    const cartIcon = document.getElementById("cart-icons");
                    const cartModal = document.getElementById("cart-modal");
                    const closeModal = document.querySelector(".close");
                    const cartItemsContainer = document.getElementById("cart-items");
                    const subtotalElement = document.getElementById("subtotal");
                    const totalElement = document.getElementById("total");
                    const cartCount = document.getElementById("cart-count");
                
                    let cart = [];
                
                    // Hiển thị modal giỏ hàng khi click vào icon giỏ hàng
                    cartIcon.addEventListener("click", function () {
                        cartModal.style.display = "block";
                        updateCartUI();
                    });
                
                    // Đóng modal khi click vào dấu X
                    closeModal.addEventListener("click", function () {
                        cartModal.style.display = "none";
                    });
                
                    // Đóng modal khi click ra ngoài
                    window.addEventListener("click", function (event) {
                        if (event.target === cartModal) {
                            cartModal.style.display = "none";
                        }
                    });
                
                    // Hàm thêm sản phẩm vào giỏ hàng
                    function addToCart(product) {
                        const existingItem = cart.find((item) => item.id === product.id);
                        if (existingItem) {
                            existingItem.quantity += 1;
                        } else {
                            cart.push({ ...product, quantity: 1 });
                        }
                        updateCartUI();
                    }
                
                    // Hàm cập nhật giao diện giỏ hàng
                    function updateCartUI() {
                        cartItemsContainer.innerHTML = "";
                        let subtotal = 0;
                
                        cart.forEach((item, index) => {
                            subtotal += item.price * item.quantity;
                
                            const cartItem = document.createElement("div");
                            cartItem.classList.add("cart-item");
                            cartItem.innerHTML = `
                                <p>${item.name} - ${item.price.toLocaleString()}đ x ${item.quantity}</p>
                                <button class="remove" data-index="${index}">Xóa</button>
                            `;
                            cartItemsContainer.appendChild(cartItem);
                        });
                
                        subtotalElement.textContent = `${subtotal.toLocaleString()}đ`;
                        totalElement.textContent = `${subtotal.toLocaleString()}đ`;
                        cartCount.textContent = cart.length;
                
        
                        document.querySelectorAll(".remove").forEach((btn) => {
                            btn.addEventListener("click", function () {
                                const index = this.getAttribute("data-index");
                                cart.splice(index, 1);
                                updateCartUI();
                            });
                        });
                    }
                    document.querySelectorAll(".add-to-cart").forEach((button) => {
                        button.addEventListener("click", function () {
                            const product = {
                                id: this.getAttribute("data-id"),
                                name: this.getAttribute("data-name"),
                                price: parseInt(this.getAttribute("data-price")),
                            };
                            addToCart(product);
                        });
                    });
                });
                
                
                
                
               
                document.querySelector(".buy-card button").addEventListener("click", function () {
                    let quantity = parseInt(document.querySelector(`.qty-input[data-id="${product.id}"]`).value);
                
                  
                    localStorage.setItem("checkoutProduct", JSON.stringify([{
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        thumbnail: product.thumbnail,
                        quantity: quantity
                    }]));
                
                    
                    window.location.href = "/checkout";
                });
                
                
                document.getElementById("product-tab").addEventListener("click", function (e) {
                    e.preventDefault();
                    document.getElementById("product-info").style.display = "block";
                    document.getElementById("reviews").style.display = "none";
                    this.classList.add("active");
                    document.getElementById("review-tab").classList.remove("active");
                });
    
                document.getElementById("review-tab").addEventListener("click", function (e) {
                    e.preventDefault();
                    document.getElementById("product-info").style.display = "none";
                    document.getElementById("reviews").style.display = "block";
                    this.classList.add("active");
                    document.getElementById("product-tab").classList.remove("active");
                });
            })
                // search
                document.getElementById("searchButton").addEventListener("click", function () {
                let keyword = document.getElementById("searchInput").value.trim();

                if (keyword === "") {
                document.getElementById("productList").innerHTML = "<p>Vui lòng nhập từ khóa tìm kiếm.</p>";
                return;
                }

                searchProducts(keyword);
                })

            // .catch(error => {
            //     console.error("Lỗi dữ liệu:", error);
            //     productDetailContainer.innerHTML = `<p class='text-danger text-center'>Lỗi: ${error.message}</p>`;
            // });
}



function ProductDetailWithFetch(data) {
    setTimeout(() => fetchProductDetail(data.id), 0);
    return ProductDetail(data.id);
}

export default ProductDetailWithFetch;


