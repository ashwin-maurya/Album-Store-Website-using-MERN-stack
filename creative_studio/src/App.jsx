// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/body.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import Search from "./components/Search";
import ProductState from "./context/product/productState";

const App = () => {
  return (
    <ProductState>
      <Router>
        <div id="parent">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route exact path="/home" element={<Home></Home>} />
            <Route exact path="/product" element={<Product></Product>} />
            <Route exact path="/search" element={<Search></Search>} />
          </Routes>
        </div>
        <Scroll />
        <Footer />
      </Router>
    </ProductState>
  );
};

export default App;
