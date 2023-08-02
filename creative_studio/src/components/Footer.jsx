import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/home/web-logo.png";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
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
