
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
    top: 20px;
    right: 20px;
    background: #fff;
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
</style>
<body>
 <div class="container">
        <div id="product-detail">Đang tải...</div>
        </div>

     <footer>
			<div class="container">
				<div class="contact">
					<div class="about">
						<h3>Giới thiệu</h3>
						<p>Đức Toán Store-Chuỗi phân phối mỹ phẩm, thực phẩm</p>
						<ul class="info-contact">
                            <li><i class="fa-solid fa-phone"></i>0333777999</li>
                            <li><i class="fa-solid fa-envelope"></i>toan@gmail.com</li>
                            <li><i class="fa-solid fa-clock"></i>Giờ mở cửa: 8:30-22:00</li>
                            <li><i class="fa-solid fa-headphones"></i>Nhân viên tư vẫn phản hồi nhắn đến 24:00(Mỗi ngày)</li>
                        </ul>
					</div>
					<div class="address">
						<h3>Địa chỉ cửa hàng</h3>
                        <ul class= "info-address">
                            <li>
                                <h3>Hà Nội</h3>
						        <p><i class="fa-solid fa-location-dot"></i>Ngõ 59 Phạm Văn Đồng-Mai Dịch-Cầu Giấy-Hà Nội</p>
                            </li>
                            <li>
                                <h3>HỒ CHÍ MINH</h3>
						        <p><i class="fa-solid fa-location-dot"></i>297/3 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh</p>
                            </li>
                        </ul>
						
						
					</div>
					<div class="pay">
						<h3>Phương thức thanh toán</h3>
						<div class="ol-pay">
							<p>VNPAY</p>
							<p>COD</p>
							<p>	<i class="fa-brands fa-apple-pay"></i></p>
						</div>
		
					</div>
				</div>
				<h3>Bản quyền thuộc về Đức Toán Store</h3>
			</div>
	
			</footer>
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

            // Xử lý sự kiện tăng/giảm số lượng sản phẩm
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

           
            document.querySelector(".buy-card button").addEventListener("click", function () {
                let quantity = parseInt(document.querySelector(`.qty-input[data-id="${product.id}"]`).value);
            
                // Lưu sản phẩm vào localStorage dưới dạng đơn hàng riêng biệt
                localStorage.setItem("checkoutProduct", JSON.stringify([{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    quantity: quantity
                }]));
            
                // Chuyển hướng đến trang Checkout
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
        .catch(error => {
            console.error("Lỗi dữ liệu:", error);
            productDetailContainer.innerHTML = `<p class='text-danger text-center'>Lỗi: ${error.message}</p>`;
        });
}



function ProductDetailWithFetch(data) {
    setTimeout(() => fetchProductDetail(data.id), 0);
    return ProductDetail(data.id);
}

export default ProductDetailWithFetch;
