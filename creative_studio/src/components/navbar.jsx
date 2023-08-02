import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import menu from "../images/icons/menu.svg";
import arrowDown from "../images/icons/chevron-down.svg";
import arrowRight from "../images/icons/chevron-right.svg";
import logo from "../images/home/web-logo.png";

export default function Navbar() {
  const [isResponsive, setResponsive] = useState(false);
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  function myFunction() {
    setResponsive((prevResponsive) => !prevResponsive);
  }
  return (
    <>
      <div
        className={`topnav ${isResponsive ? "responsive" : ""}`}
        id="myTopnav"
      >
        <ul className="dropdown">
          <img src={logo} alt="logo" className="main-logo" height="40px" />
          <li>
            <Link
              to="/home"
              className={`${location.pathname === "/home" ? "active" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link>
              ALBUM COVERS
              <img src={arrowDown} alt="" />
            </Link>
            <ul>
              <li>
                <Link to="/">
                  Wedding Album Psd design
                  <img src={arrowRight} alt="" />
                </Link>
                <ul>
                  <li>
                    <Link to="/">Size 12×40</Link>
                  </li>
                  <li>
                    <Link to="/">12×18</Link>
                  </li>
                  <li>
                    <Link to="/">14×36</Link>
                  </li>
                  <li>
                    <Link to="/">15×30</Link>
                  </li>
                  <li>
                    <Link to="/">12×30</Link>
                  </li>
                  <li>
                    <Link to="/">18×24</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">DM Wedding</Link>
              </li>
              <li>
                <Link>Pre Wedding psd</Link>
              </li>
              <li>
                <Link to="/">Wedding Album Cover</Link>
              </li>
              <li>
                <Link to="/">Birthday album PSD </Link>
              </li>
              <li>
                <Link to="/"> Vidhi Font</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              PHOTOSHOP
              <img src={arrowDown} alt="" />
            </Link>

            <ul>
              <li>
                <Link to="/">Dvd Sticker</Link>
              </li>
              <li>
                <Link to="/">Clipart</Link>
              </li>
              <li>
                <Link to="/">Death Frames</Link>
              </li>
              <li>
                <Link to="/">Font</Link>
              </li>
              <li>
                <Link to="/">Lightroom Preset</Link>
              </li>
              <li>
                <Link to="/">Gradients</Link>
              </li>
              <li>
                <Link to="/">Overlay</Link>
              </li>
              <li>
                <Link to="/">Photo Color Luts</Link>
              </li>
              <li>
                <Link to="/">Masks</Link>
              </li>
              <li>
                <Link to="/">Mockup</Link>
              </li>
              <li>
                <Link to="/">Photoshop Action</Link>
              </li>
              <li>
                <Link to="/">Invitation PSD</Link>
              </li>
              <li>
                <Link to="/">Shapes</Link>
              </li>
              <li>
                <Link to="/">Poster</Link>
              </li>
              <li>
                <Link to="/">Font Text Style</Link>
              </li>
            </ul>
          </li>
        </ul>

        <Link className="icon" onClick={myFunction}>
          <img src={menu} alt="menu bars" />
        </Link>
      </div>
      <div className="contact-nav">
        <div className="left-nav-contact">
          <div className="shareon">
            <Link className="facebook"></Link>
            <Link className="telegram">JOIN GROUP</Link>
          </div>
        </div>
        <div className="right-nav-contact">
          <div className="shareon">
            <Link className="whatsapp">BUY NOW</Link>
          </div>
        </div>
      </div>
    </>
  );
}
