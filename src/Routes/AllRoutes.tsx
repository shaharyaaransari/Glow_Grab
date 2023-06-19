import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import Cart from "../Cart/Cart";
import LoginPage from "../Pages/LoginPage";
import SignupCard from "../Pages/SignUpForm";




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:type" element={<ProductPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupCard />} />

    </Routes>
  );
};

export default AllRoutes;
