import React from "react";

import HomePage from '../Home/HomePage';
import ProductsPage from '../Products/ProductsPage';
import SingleProduct from '../SingleProductPage/SingleProduct';
import CartPage from '../CartPage/CartPage';
import MyOrdersPage from '../MyOrder/MyOrdersPage';
import LoginPage from '../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage';
import { Route, Routes } from "react-router-dom";


const Routing = () => {
    return(
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/singleProduct" element={<SingleProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<MyOrdersPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
    
}
export default Routing;
