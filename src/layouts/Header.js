function Header() {
    return(
        `
        
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
		</div>
        `
    )
}


export default Header;

