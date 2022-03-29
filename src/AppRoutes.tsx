import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products-listing" element={<ProductListing />} />
    </Routes>
  );
};

export default AppRoutes;
