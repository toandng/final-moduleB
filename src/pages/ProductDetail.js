
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

#app{
    position:relative;
    top:100px;
}
#product-info{
    width: 30%;
    display: block;
    margin: 30px 0px;
}
    #reviews{
        width: 30%;
        display: block;
        margin: 30px 0px;
    }
</style>
<body>
 <div class="container">
        <div id="product-detail">Đang tải...</div>
        </div>
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
                <a href="/" class="btn btn-primary" style="position:relative; top: 100px">Trang chủ</a>
                <div class="product-cart">
                    <div class="card">
                        <div class="card-img"><img src="${product.thumbnail}" alt="${product.title}"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p><i class="fa-solid fa-star"></i> ${product.rating}</p>
                        <p class="card-text">Giá: $${product.price}</p>
                        <div class="add-card">
                            <button>Thêm vào giỏ hàng</button>
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
                    <h5>${product.title}</h5>
                    <p>${product.description}</p>
                      <p>Danh mục: ${product.category}</p>
                    <p>Thương hiệu: ${product.brand}</p>
                    <p>Tồn kho: ${product.stock}</p>
                    <p>Chính sách trả lại: ${product.returnPolicy}, Số lượng tối thiểu: ${product.minimumOrderQuantity}</p>
                    <p>Tags: ${tags}</p>
                </div>
                <div id="reviews" style="display: none;">
                    <h5>Đánh giá sản phẩm</h5>
                    ${reviewsHTML}
                </div>
            `;
        
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

            // add cartử
document.querySelector(".add-card button").addEventListener("click", function (e) {
    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    updateCartCount();
});
        });
        
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
