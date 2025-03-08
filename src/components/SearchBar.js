export function SearchBar() {
    let user = JSON.parse(localStorage.getItem("user"));

    return `
      <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light " style="position:fixed; z-index:2; background:#171c28; height:100px;top:0;">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<a href="/" class="home">Trang chủ</a>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown">Danh mục sản phẩm</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/cother">Quần Áo</a></li>
                    <li><a class="dropdown-item" href="/cosmetics">Mỹ Phẩm</a></li>
                  </ul>
                </li>
              </ul>

              <!-- Ô tìm kiếm -->
              <div class="form-search">
                <input type="text" id="searchInput" class="form-control" placeholder="Bạn cần tìm gì?">
                <button id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
      
              <div class="cart-icon" id="cart-icons">
                  <i class="fa-solid fa-cart-shopping"></i> <span id="cart-count">0</span>
              </div>

              <div id="cart-modal" class="cart-modal">
                <div class="cart-content">
                    <span class="close">&times;</span>
                    <h2>Giỏ Hàng</h2>
                    <div id="cart-items"></div>
                    <p>Tạm tính: <span id="subtotal">0đ</span></p>
                    <p>Tổng tiền: <span id="total">0đ</span></p>
                    <button id="checkout">Thanh toán</button>
               </div>
              </div>
              <div class="nav-item dropdown" id="user-menu" style="margin-right:150px; color:#000;">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" data-bs-toggle="dropdown">
                  <i class="fa-solid fa-user"></i> ${user ? user.name : ""}
                </a>
                <ul class="dropdown-menu" >
                  ${user ? `<li><a class="dropdown-item" href="#" id="logoutBtn">Đăng xuất</a></li>` : `
                    <li><a class="dropdown-item" href="/register">Register</a></li>
                    <li><a class="dropdown-item" href="/login">Login</a></li>
                  `}
                </ul>
              </div>

            </div>
          </div>
        </nav>
      </div>
    `;
}


document.addEventListener("DOMContentLoaded", function () {
	let logoutBtn = document.getElementById("logoutBtn");
	if (logoutBtn) {
		logoutBtn.addEventListener("click", function () {
			let confirmLogout = confirm("Bạn có chắc muốn đăng xuất?");
			if (confirmLogout) {
				localStorage.removeItem("user");
				window.location.reload();
			}
		});
	}
});

