import React, { useEffect } from "react";
import "../css/Footer.css";
import logo from "../images/home/web-logo.png";
import myAd from "../images/home/my-ad.png";
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
            <div className="foot-head">
              <img src={logo} alt="logo" className="main-logo" height="100px" />

              <header>
                <h2>ALBUM PIXEL PSD</h2>
                <p>
                  All information on the Album Pixel PSD website -{" "}
                  <a href="https://www.albumpixelpsd.com">
                    https://www.albumpixelpsd.com
                  </a>{" "}
                  - is published in good faith and for general information
                  purposes only. Album Pixel PSD does not provide any warranties
                  regarding the completeness, reliability, and accuracy of this
                  information.
                </p>
              </header>
            </div>
            <div className="ad-card">
              <a
                href="https://www.fiverr.com/ashwin_maurya"
                target="_blank"
                rel="noreferrer"
              >
                <img src={myAd} width="100%" alt="" />
              </a>
              <div className="social-links">
                <a
                  href="https://api.whatsapp.com/send/?phone=9175150023"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashwin-maurya/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </section>
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
