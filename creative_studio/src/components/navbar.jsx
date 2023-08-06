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
    if (element.tagName === "A") {
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
    if (event.target.tagName === "A") {
      const searchText = getCompleteSearchText(event.target);
      if (searchText !== "HOME") {
        search(searchText);
      }
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
            <img src={logo} alt="logo" className="main-logo" height="40px" />
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
            <Link>
              ALBUM
              <img src={arrowDown} alt="" />
            </Link>
            <ul>
              <li>
                <Link>
                  Wedding Album Psd design
                  <img src={arrowRight} alt="" />
                </Link>
                <ul>
                  <li>
                    <Link>Size 12×36</Link>
                  </li>
                  <li>
                    <Link>12×30</Link>
                  </li>
                  <li>
                    <Link>14×40</Link>
                  </li>
                  <li>
                    <Link>8×24</Link>
                  </li>
                  <li>
                    <Link>18×24</Link>
                  </li>
                  <li>
                    <Link>16×24</Link>
                  </li>
                  <li>
                    <Link>8×24</Link>
                  </li>
                  <li>
                    <Link>8×12</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>
                  DM Wedding <img src={arrowRight} alt="" />
                </Link>

                <ul>
                  <li>
                    <Link>Size 12×36</Link>
                  </li>
                  <li>
                    <Link>12×30</Link>
                  </li>
                  <li>
                    <Link>14×40</Link>
                  </li>
                  <li>
                    <Link>8×24</Link>
                  </li>
                  <li>
                    <Link>18×24</Link>
                  </li>
                  <li>
                    <Link>16×24</Link>
                  </li>
                  <li>
                    <Link>8×24</Link>
                  </li>
                  <li>
                    <Link>8×12</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>
                  Pre Wedding psd <img src={arrowRight} alt="" />
                </Link>
                <ul>
                  <li>
                    <Link>Size 12×36</Link>
                  </li>
                  <li>
                    <Link>14×40</Link>
                  </li>
                  <li>
                    <Link>18×24</Link>
                  </li>
                  <li>
                    <Link>16×24</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>
                  Wedding Album Cover <img src={arrowRight} alt="" />
                </Link>
                <ul>
                  <li>
                    <Link>Size 12×36</Link>
                  </li>
                  <li>
                    <Link>8×24</Link>
                  </li>
                  <li>
                    <Link>18×24</Link>
                  </li>
                  <li>
                    <Link>16×24</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>
                  Birthday album PSD
                  <img src={arrowRight} alt="" />
                </Link>
                <ul>
                  <li>
                    <Link>Size 12×36</Link>
                  </li>
                  <li>
                    <Link>12×30</Link>
                  </li>
                  <li>
                    <Link>14×40</Link>
                  </li>
                  <li>
                    <Link>8×24</Link>
                  </li>
                  <li>
                    <Link>18×24</Link>
                  </li>
                  <li>
                    <Link>16×24</Link>
                  </li>
                  <li>
                    <Link>8×24</Link>
                  </li>
                  <li>
                    <Link>8×12</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>
                  {" "}
                  Font
                  <img src={arrowRight} alt="" />
                </Link>
                <ul>
                  <li>
                    <Link>Haldi</Link>
                  </li>
                  <li>
                    <Link>Wedding</Link>
                  </li>
                  <li>
                    <Link>Pre wedding</Link>
                  </li>
                  <li>
                    <Link>Vidhi</Link>
                  </li>
                </ul>
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
                <Link>Clipart</Link>
              </li>
              <li>
                <Link>Death Frames</Link>
              </li>
              <li>
                <Link>Font</Link>
              </li>

              <li>
                <Link>Gradients</Link>
              </li>
              <li>
                <Link>Overlay</Link>
              </li>
              <li>
                <Link>Photo Color Luts</Link>
              </li>
              <li>
                <Link>Masks</Link>
              </li>
              <li>
                <Link>Mockup</Link>
              </li>

              <li>
                <Link>Invitation PSD</Link>
              </li>
              <li>
                <Link>Shapes</Link>
              </li>
              <li>
                <Link>Poster</Link>
              </li>
              <li>
                <Link>Font Text Style</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Lightroom Preset</Link>
          </li>
        </ul>

        <Link className="icon" onClick={myFunction}>
          <img src={menu} alt="menu bars" />
        </Link>
      </div>
      <div
        className={`contact-nav ${
          location.pathname.includes("/admin") ? "hide" : ""
        }`}
      >
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
