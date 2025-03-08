import Header from "./Header";
import Footer from "./Footer";
import { SearchBar } from "../components/SearchBar";
function Layout(pageContent) {
    return `
        ${SearchBar()}
        ${Header()}  <!-- Hiển thị Header -->
       
        ${Footer()}  <!-- Hiển thị Footer -->
    `;
}

export default Layout;