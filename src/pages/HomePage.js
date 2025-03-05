import { router } from "../../main";
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
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
}

.product-card h5 {
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
}

.product-card p {
    font-size: 14px;
    color: #555;
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


</style>
<body>
  <div class="container">
      <h2 class="text-center my-4">Danh sách sản phẩm</h2>
      <div id="product-list" class="d-flex flex-wrap justify-content-center">Đang tải...</div>
  </div>
  <script src="/src/app.js"></script>
</body>
</html>
  `;
}

let productsData = []; // Lưu trữ toàn bộ sản phẩm
let displayedCount = 4; // Số lượng sản phẩm ban đầu

function renderProducts() {
    const productsList = document.getElementById("product-list");
    productsList.innerHTML = productsData
        .slice(0, displayedCount)
        .map(product => `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h5>${product.title}</h5>
                <p>Giá: $${product.price}</p>
                <p class="description-product">Mô tả: ${product.description}</p>
                <div class="button-group">
                    <button data-id="${product.id}" class="buy-now">Mua ngay</button>
                    <button data-id="${product.id}" class="view-detail">Chi tiết sản phẩm</button>
                </div>
            </div>
        `).join("");

    // Kiểm tra nếu còn sản phẩm để hiển thị, thêm nút "Xem thêm"
    if (displayedCount < productsData.length) {
        productsList.innerHTML += `
            <div class="text-center w-100 mt-3">
                <button id="load-more" class="btn btn-primary">Xem thêm</button>
            </div>
        `;

        document.getElementById("load-more").addEventListener("click", () => {
            displayedCount += 4; // Tăng số lượng sản phẩm hiển thị lên 4
            renderProducts(); // Cập nhật lại danh sách
        });
    }

    addEventListeners(); // Gán sự kiện click cho các nút trong danh sách
}

function addEventListeners() {
    document.querySelectorAll(".view-detail").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            router.navigate(`/product/${id}`);
        });
    });

    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            router.navigate(`/product/${id}`);
        });
    });
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