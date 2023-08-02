// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./css/body.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Product from "./components/product";
import Footer from "./components/Footer";
import Scroll from "./components/scroll";
import Search from "./components/search";

const App = () => {
  return (
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
  );
};

export default App;
