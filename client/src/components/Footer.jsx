import React, { useEffect } from "react";
import "../css/Footer.css";
import logo from "../images/home/web-logo.png";
import { Link, useLocation } from "react-router-dom";

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
        <div className="footer-wrap">
          <section id="intro">
            <img src={logo} alt="logo" className="main-logo" height="100px" />

            <header>
              <h2>ALBUM PIXEL PSD</h2>
            </header>
          </section>{" "}
          <ul className="social-list">
            <div className="shareon">
              <a className="facebook"></a>
              <a className="linkedin"></a>
              <a className="telegram"></a>
              <a className="pinterest"></a>
              <a className="whatsapp"></a>
            </div>
          </ul>
          <p className="copyrights">Copyright © 2023 ALBUM PIXEL.</p>
        </div>
      </footer>
    </>
  );
}
