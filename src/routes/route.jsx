import {
  BrowserRouter,
  Navigate,
  Route as ReactRoute,
  Routes,
} from "react-router-dom";
import { ListProducts } from "../view/list-products";
import { NotFound } from "../view/not-found";
import { ProductDetail } from "../view/product-detail";

export function Route() {
  return (
    <BrowserRouter>
      <Routes>
        <ReactRoute path="/" element={<Navigate to="/productos" />} />
        <ReactRoute path="/productos" element={<ListProducts />} />
        <ReactRoute path="producto/:id" element={<ProductDetail />} />
        <ReactRoute path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
