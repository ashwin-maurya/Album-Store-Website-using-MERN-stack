import React, { useEffect } from "react";
import Sidemenu from "./Sidemenu";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../css/admin.css";
import { useNavigate } from "react-router-dom";
export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="cont">
        <div className="left">
          <Sidemenu></Sidemenu>
        </div>
        <div className="right">
          <Routes>
            <Route exact path="/" element={<ViewProduct></ViewProduct>} />{" "}
            <Route
              exact
              path="/viewProduct"
              element={<ViewProduct></ViewProduct>}
            />{" "}
            <Route
              exact
              path="/addProduct"
              element={<AddProduct></AddProduct>}
            />{" "}
          </Routes>
        </div>
      </div>
    </>
  );
}
