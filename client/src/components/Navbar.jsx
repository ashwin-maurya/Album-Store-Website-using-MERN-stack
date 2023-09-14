import React, { useState } from "react";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import menu from "../images/icons/menu.svg";
import arrowDown from "../images/icons/chevron-down.svg";
import arrowRight from "../images/icons/chevron-right.svg";
import logo from "../images/home/web-logo.png";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";

export default function Navbar() {
  const { showAlert } = useAlert();

  const navigate = useNavigate();

  const [isResponsive, setResponsive] = useState(false);
  let location = useLocation();

  function myFunction() {
    setResponsive((prevResponsive) => !prevResponsive);
  }

  const getCompleteSearchText = (element) => {
    if (element.tagName === "SPAN") {
      const nestedUl = element.querySelector("ul");
      if (nestedUl) {
        return element.textContent.trim();
      } else {
        let searchText = element.textContent;
        let parentElement = element.parentElement;
        while (parentElement) {
          if (
            parentElement.tagName === "UL" &&
            parentElement.previousElementSibling
          ) {
            searchText =
              parentElement.previousElementSibling.textContent +
              " " +
              searchText;
          }
          parentElement = parentElement.parentElement;
        }
        return searchText;
      }
    }
    return "";
  };

  const handleClickLink = (event) => {
    event.stopPropagation(); // Stop event propagation
    if (event.target.tagName === "SPAN") {
      const searchText = getCompleteSearchText(event.target);
      search(searchText);
    }
  };

  const search = async (searchText) => {
    try {
      const response = await fetch(`/api/product/search/?q=${searchText}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (Object.keys(json).length === 0) {
        showAlert("No search result found.", "failed");
      } else {
        navigate("/search", {
          state: { results: json, searchText: searchText },
          replace: true,
        });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.", "failed");
        } else {
          alert("An error occurred. Please try again later.", "failed");
        }
      } else {
        alert(
          "Network Error. Please check your internet connection.",
          "failed"
        );
      }
    }
  };
  return (
    <>
      <div
        className={`topnav ${isResponsive ? "responsive" : ""} ${
          location.pathname.includes("/admin") ? "hide" : ""
        }`}
        id="myTopnav"
      >
        <ul className="dropdown" onClick={handleClickLink}>
          <li>
            <img src={logo} alt="logo" className="main-logo" height="38px" />
          </li>
          <li>
            <Link
              to="/home"
              className={`${location.pathname === "/home" ? "active" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <span>
              ALBUM
              <img src={arrowDown} alt="" />
            </span>
            <ul>
              <li>
                <span>
                  Wedding Album Psd design
                  <img src={arrowRight} alt="" />
                </span>
                <ul>
                  <li>
                    <span>Size 12×36</span>
                  </li>
                  <li>
                    <span>12×30</span>
                  </li>
                  <li>
                    <span>14×40</span>
                  </li>
                  <li>
                    <span>8×24</span>
                  </li>
                  <li>
                    <span>18×24</span>
                  </li>
                  <li>
                    <span>16×24</span>
                  </li>
                  <li>
                    <span>8×24</span>
                  </li>
                  <li>
                    <span>8×12</span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  DM Wedding <img src={arrowRight} alt="" />
                </span>

                <ul>
                  <li>
                    <span>Size 12×36</span>
                  </li>
                  <li>
                    <span>12×30</span>
                  </li>
                  <li>
                    <span>14×40</span>
                  </li>
                  <li>
                    <span>8×24</span>
                  </li>
                  <li>
                    <span>18×24</span>
                  </li>
                  <li>
                    <span>16×24</span>
                  </li>
                  <li>
                    <span>8×24</span>
                  </li>
                  <li>
                    <span>8×12</span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  Pre Wedding psd <img src={arrowRight} alt="" />
                </span>
                <ul>
                  <li>
                    <span>Size 12×36</span>
                  </li>
                  <li>
                    <span>14×40</span>
                  </li>
                  <li>
                    <span>18×24</span>
                  </li>
                  <li>
                    <span>16×24</span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  Wedding Album Cover <img src={arrowRight} alt="" />
                </span>
                <ul>
                  <li>
                    <span>Size 12×36</span>
                  </li>
                  <li>
                    <span>8×24</span>
                  </li>
                  <li>
                    <span>18×24</span>
                  </li>
                  <li>
                    <span>16×24</span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  Birthday album PSD
                  <img src={arrowRight} alt="" />
                </span>
                <ul>
                  <li>
                    <span>Size 12×36</span>
                  </li>
                  <li>
                    <span>12×30</span>
                  </li>
                  <li>
                    <span>14×40</span>
                  </li>
                  <li>
                    <span>8×24</span>
                  </li>
                  <li>
                    <span>18×24</span>
                  </li>
                  <li>
                    <span>16×24</span>
                  </li>
                  <li>
                    <span>8×24</span>
                  </li>
                  <li>
                    <span>8×12</span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  {" "}
                  Font
                  <img src={arrowRight} alt="" />
                </span>
                <ul>
                  <li>
                    <span>Haldi</span>
                  </li>
                  <li>
                    <span>Wedding</span>
                  </li>
                  <li>
                    <span>Pre wedding</span>
                  </li>
                  <li>
                    <span>Vidhi</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span>
              PHOTOSHOP
              <img src={arrowDown} alt="" />
            </span>

            <ul>
              <li>
                <span>Clipart</span>
              </li>

              <li>
                <span>Font</span>
              </li>

              <li>
                <span>Gradients</span>
              </li>
              <li>
                <span>Overlay</span>
              </li>
              <li>
                <span>Photo Color Luts</span>
              </li>
              <li>
                <span>Masks</span>
              </li>
              <li>
                <span>Mockup</span>
              </li>

              <li>
                <span>Invitation PSD</span>
              </li>
              <li>
                <span>Shapes</span>
              </li>
              <li>
                <span>Poster</span>
              </li>
              <li>
                <span>Font Text Style</span>
              </li>
            </ul>
          </li>
          <li>
            <span>LIGHTROOM PRESET</span>
          </li>
        </ul>

        <span className="icon" onClick={myFunction}>
          <img src={menu} alt="menu bars" />
        </span>
      </div>
      <div
        className={`contact-nav ${
          location.pathname.includes("/admin") ? "hide" : ""
        }`}
      >
        <div className="left-nav-contact">
          <div className="shareon">
            <a
              href="https://www.facebook.com/weddingpixelpsd/"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              Follow
            </a>
            <a
              href="https://t.me/weddingpsdfile"
              target="_blank"
              rel="noreferrer"
              className="telegram"
            >
              JOIN GROUP
            </a>
          </div>
        </div>
        <div className="right-nav-contact">
          <div className="icon-bar-horizontal">
            <a
              href="https://www.instagram.com/albumpixelpsd/"
              target="_blank"
              rel="noreferrer"
              className="instagram"
              style={{ padding: "10px 20px" }}
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@WeDDinGPiXeLPSD?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="youtube"
              style={{ padding: "10px 20px" }}
            >
              <i className="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
