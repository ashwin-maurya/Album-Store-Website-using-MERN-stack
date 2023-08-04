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
import Alert from "./admin/Alert";
import Signup from "./admin/Signup";
const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <ProductState>
      <Router>
        <div id="parent">
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home showAlert={showAlert}></Home>}
            />
            <Route
              exact
              path="/home"
              element={<Home showAlert={showAlert}></Home>}
            />
            <Route exact path="/product" element={<Product></Product>} />
            <Route exact path="/search" element={<Search></Search>} />
            <Route exact path="/search" element={<Search></Search>} />
            <Route
              exact
              path="/admin/login"
              element={<Login showAlert={showAlert}></Login>}
            />
            <Route
              exact
              path="/admin/signup"
              element={<Signup showAlert={showAlert}></Signup>}
            />
            <Route
              exact
              path="/admin/*"
              element={<Admin showAlert={showAlert}> </Admin>}
            />
          </Routes>
          <Footer />
        </div>
        <Scroll />
      </Router>
    </ProductState>
  );
};

export default App;
