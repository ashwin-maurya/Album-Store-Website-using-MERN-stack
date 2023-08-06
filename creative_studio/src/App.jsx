// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/body.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/ProductPage";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import Search from "./components/Search";
import ProductState from "./context/product/productState";
import Login from "./admin/Login";
import Admin from "./admin/Admin";
import { AlertProvider } from "./context/alert/AlertContext"; // Import AlertProvider
import Signup from "./admin/Signup";
import Alert from "./admin/Alert"; // Import the Alert component
import SocialIcons from "./components/SocialIcons";
const App = () => {
  return (
    <ProductState>
      <Router>
        <AlertProvider>
          {" "}
          {/* Wrap the entire app with AlertProvider */}
          <div id="parent">
            <Navbar />
            <Alert /> {/* Use the Alert component */}
            <SocialIcons></SocialIcons>
            <Routes>
              <Route exact path="/" element={<Home></Home>} />
              <Route exact path="/home" element={<Home></Home>} />
              <Route exact path="/productView" element={<Product></Product>} />
              <Route exact path="/search" element={<Search></Search>} />
              <Route exact path="/search" element={<Search></Search>} />
              <Route exact path="/admin/login" element={<Login></Login>} />
              <Route exact path="/admin/signup" element={<Signup></Signup>} />
              <Route exact path="/admin/*" element={<Admin> </Admin>} />
            </Routes>
            <Footer />
          </div>
        </AlertProvider>
        <Scroll />
      </Router>
    </ProductState>
  );
};

export default App;
