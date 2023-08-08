import React from "react";
import "../css/sidemenu.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/home/web-logo.png";
import { useNavigate } from "react-router-dom";

export default function Sidemenu() {
  const navigate = useNavigate();

  let location = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };
  return (
    <>
      <div
        className={`sidebar ${
          location.pathname === "/admin/login" ? "hide" : ""
        }`}
      >
        <ul className="side-item">
          <h2>
            <img src={logo} alt="logo" className="main-logo" height="60px" />
            Welcome, Admin
          </h2>
          <li>
            <Link
              to="/admin/viewProduct"
              className={`${
                location.pathname === "/admin/viewProduct" ? "active" : ""
              }`}
            >
              View Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/addProduct"
              className={`${
                location.pathname === "/admin/addProduct" ? "active" : ""
              }`}
            >
              Add Products
            </Link>
          </li>
        </ul>
        <ul className="side-item">
          <li onClick={logout}>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
