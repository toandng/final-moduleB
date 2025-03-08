import { SearchBar } from "../components/SearchBar";
import Footer from "../layouts/Footer";
function ProductsItem() {
    return(`
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

}
</style>
<body>  
    ${SearchBar()}

  
    ${Footer()}
    <script src="/src/app.js"></script>
    <script src="https://kit.fontawesome.com/f464ed5cf0.js" crossorigin="anonymous"></script>

</body>
</html>
    `)
}
document.addEventListener("DOMContentLoaded", function () {
	const params = new URLSearchParams(window.location.search);
	const keyword = params.get("search");

	if (keyword) {
		fetch(`http://localhost:3000/products?title_like=${keyword}`)
			.then(response => response.json())
			.then(data => displayProducts(data, keyword))
			.catch(error => console.error("Lỗi khi tìm kiếm:", error));
	}

	// Xử lý sự kiện tìm kiếm
	document.getElementById("searchButton").addEventListener("click", function () {
		let keyword = document.getElementById("searchInput").value.trim();
		if (!keyword) {
			alert("Vui lòng nhập từ khóa!");
			return;
		}
		window.location.href = `product-item?search=${encodeURIComponent(keyword)}`;
	});
});

function displayProducts(products, keyword) {
	let container = document.getElementById("productList");
	container.innerHTML = "";

	if (products.length === 0) {
		container.innerHTML = `<p class="text-center">Không tìm thấy sản phẩm cho từ khóa: <b>${keyword}</b></p>`;
		return;
	}

	products.forEach(product => {
		container.innerHTML += `
			<div class="product-card">
				<img src="${product.thumbnail}" alt="${product.title}">
				<h5>${product.title}</h5>
				<p>${product.price.toLocaleString()}₫</p>
                 <div class="buy-card">
                    <button id="add-to-cart-btn" data-id="${product.id}">Mua ngay</button>
                </div> 
				 <div class="add-card">
                    <button id="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>
                </div> 
			</div>
		`;
	});
  
}

export default ProductsItem;
