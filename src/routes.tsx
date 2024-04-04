import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { PageBase } from "./Pages/PageBase";
import { CategoryPage } from "./Pages/CategoryPage";
import { ProductDetail } from "./Pages/ProductDetail";
import { RenderCart } from "./Pages/RenderCart";

export function AppRouters(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="categoryPage" element={<CategoryPage />}></Route>
                    <Route path="productDetail" element={<ProductDetail />}></Route>
                    <Route path="renderCart" element={<RenderCart />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}