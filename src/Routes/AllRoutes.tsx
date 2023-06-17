import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import Cart from "../Cart/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:type" element={<ProductPage />} />
      {/* <Route path="/women" element={<ProductPage type="women" />} />
      <Route path="/kids" element={<ProductPage type="kids" />} />
      <Route path="/sneakers" element={<ProductPage type="sneakers" />} /> */}
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
