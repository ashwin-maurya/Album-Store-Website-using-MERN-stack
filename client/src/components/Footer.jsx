import React, { useEffect } from "react";
import "../css/Footer.css";
import logo from "../images/home/web-logo.png";
import { Link, useLocation } from "react-router-dom";
import SocialIconsHorizontal from "./SocialIconsHorizontal";
export default function Footer() {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <>
      <footer
        className={`site-footer ${
          location.pathname.includes("/admin") ? "hide" : ""
        }`}
      >
        <SocialIconsHorizontal />
        <div className="footer-wrap">
          <section id="intro">
            <img src={logo} alt="logo" className="main-logo" height="100px" />

            <header>
              <h2>ALBUM PIXEL PSD</h2>
            </header>
          </section>{" "}
          <div className="copyrights">
            <p className="copy">Copyright © 2023 ALBUM PIXEL PSD</p>
            <div className="copy-menu">
              <Link to="/home">Home</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms and Condition</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
