import Navigo from "navigo";
import "./style.css";

import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import HomePage from "./src/pages/HomePage";
import afterLogin from "./src/features/auth/afterLogin";
import afterRegister from "./src/features/auth/afterRegister";
import ProductDetailWithFetch from "./src/pages/ProductDetail";
import ProductClother from "./src/pages/CheckOut";
import Cosmetis from "./src/pages/CosmeticsPage";
// import NotFoundPage from "./src/pages/NotFoundPage";
// import Header from "./layouts/Header";


const app = document.querySelector("#app");

export const router = new Navigo("/", { linksSelector: "a" });

function render(content, params = {}, beforeHandler = null, afterHandler = null) {
    beforeHandler && beforeHandler();
    app.innerHTML = content(params); 
    afterHandler && afterHandler();
}

router
    .on({
        "/": () => render(HomePage),
        "/login": () => render(Login, null, afterLogin),
        "/register": () => render(Register, null, afterRegister),
        "/product/:id": ({ data }) => {
            console.log("ID sản phẩm:", data.id);
            render(() => ProductDetailWithFetch(data));
        },
        "/checkout": () => render(ProductClother, null),
        "/cosmetics": () => render(Cosmetis, null)
    })
    .notFound(() => render(NotFoundPage));

router.resolve();
