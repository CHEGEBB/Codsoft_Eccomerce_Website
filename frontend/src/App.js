import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import "./index.scss";
import Login from "./auth-pages/Login";
import SignUp from "./auth-pages/Signup";
import ProductPage from "./pages/ProductPage";
import Men from "./pages/categories/men";
import Women from "./pages/categories/women";
import Kids from "./pages/categories/kids";
import Accessories from "./pages/categories/accessories";
import Shoes from "./pages/categories/shoes";
import Flash from "./pages/categories/Flash";
import Checkout from "./pages/CheckoutPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path ="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/men" element={<Men />} />
        <Route path="/shop/women" element={<Women />} />
        <Route path="/shop/kids" element={<Kids />} />
        <Route path="/shop/accessories" element={<Accessories/>} />
        <Route path="/shop/shoes" element={<Shoes />} />
        <Route path="/shop/flash" element={<Flash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" component={ProductPage} />
        
      </Routes>
    </Router>
  );
}

export default App;
