import { router } from "../../main";
import "../../style.css";
function HomePage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My App</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<style>
.container{
    background: #000;
    width:100%;
}
.product-card {
    width: 24%;
    padding: 15px;
    border: 1px solid #ddd;
    margin: 10px auto;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-card:hover {
    transform: scale(1.05);
}

.product-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 5px;
}

.product-card h5 {
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
}

.product-card p {
    font-size: 18px;
    font-weight:600;
    display:block;
    justify-self: start;
    color: #000;
}

.description-product {
    font-size: 12px;
    color: #777;
    margin-bottom: 10px;
}

.product-card .button-group {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.product-card button {
    width: 100%;
    padding: 10px;
    margin: 2px 10px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

.product-card button:first-child {
    background-color: #ff5722;
    color: white;
}

.product-card button:first-child:hover {
    background-color: #e64a19;
}

.product-card button:last-child {
    background-color: #2196f3;
    color: white;
}

.product-card button:last-child:hover {
    background-color: #1976d2;
}


.slider-container {
            width: 100%;
            overflow: hidden;
            position: relative;
        }
        .slide-banner {
            display: flex;
            width: 300%;
            transition: transform 0.5s ease-in-out;
        }
        .slide-banner img {
            width: 100%;
            flex: 1;
            height: 600px;
        }
        .prev, .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
        .prev { left: 10px; }
        .next { right: 10px; }

        /* footer */
footer{
	background-color: #000;
    padding: 10px 30px;
margin: 10px auto;
}
.container{
color: #fff;
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
.product-card h5{
    color:#000;
}

/* media */
@media (max-width: 768px) {
    .product-card {
        width:48%;
    }
    .slide-banner img{
        width:20%;
        height: 200px;
    }
    .contact{
        display: block;
        
    }
}
</style>
<body>
   <div class="slider-container">
        <div class="slide-banner">
            <img src="https://topprint.vn/wp-content/uploads/2021/07/banner-my-pham-dep-12.png" alt="Banner 1">
            <img src="https://img3.thuthuatphanmem.vn/uploads/2019/09/16/banner-quang-cao-my-pham_083548926.jpg" alt="Banner 2">
            <img src="https://img3.thuthuatphanmem.vn/uploads/2019/09/16/anh-banner-quang-cao-my-pham-dep_083546254.jpg" alt="Banner 3">
        </div>
    <button class="prev">❮</button>
    <button class="next">❯</button>
</div>
  <div class="container">
      <h2 class="text-center my-4">Danh sách sản phẩm</h2>
      <div id="product-list" class="d-flex flex-wrap justify-content-center">Đang tải...</div>
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
</body>
</html>
  `;
}
// slide-banner
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector(".slide-banner");
    const totalSlides = document.querySelectorAll(".slide-banner img").length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function updateSlide() {
        let slideWidth = slides.children[0].offsetWidth; 
        slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    function nextSlide() {
        if (currentIndex === totalSlides - 1) {
            currentIndex = 0; 
        } else {
            currentIndex++;
        }
        updateSlide();
    }

    function prevSlide() {
        if (currentIndex === 0) {
            currentIndex = totalSlides - 1; 
        } else {
            currentIndex--;
        }
        updateSlide();
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 7000);
});

let productsData = []; 
let displayedCount = 8; 
function renderProducts() {
    const productsList = document.getElementById("product-list");
    productsList.innerHTML = productsData
        .slice(0, displayedCount)
        .map(product => `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}" 
                     class="view-detail" data-id="${product.id}">
                <h5>${product.title}</h5>
                <p class="product-price">${product.price}$</p>
            </div>
        `).join("");

    
    if (displayedCount < productsData.length) {
        productsList.innerHTML += `
            <div class="text-center w-100 mt-3">
                <button id="load-more" class="btn btn-primary">Xem thêm</button>
            </div>
        `;

        document.getElementById("load-more").addEventListener("click", () => {
            displayedCount += 4;
            renderProducts();
        });
    }

    addEventListeners(); 
}


function addEventListeners() {
    document.querySelectorAll(".view-detail").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            router.navigate(`/product/${id}`);
        });
    });

    // document.querySelectorAll(".buy-now").forEach(button => {
    //     button.addEventListener("click", (e) => {
    //         const id = e.target.getAttribute("data-id");
    //         router.navigate(`/product/${id}`);
    //     });
    // });
}

function fetchProducts() {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(products => {
            productsData = products; // Lưu toàn bộ danh sách sản phẩm
            renderProducts(); // Gọi hàm hiển thị sản phẩm
        })
        .catch(error => {
            console.log("Lỗi dữ liệu", error);
        });
}

document.addEventListener("DOMContentLoaded", fetchProducts);

export default HomePage;