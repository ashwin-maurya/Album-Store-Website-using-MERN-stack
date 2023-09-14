import { React, useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Products from "./Products";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";
import logo from "../images/home/web-logo.png";
import SocialIconsHorizontal from "./SocialIconsHorizontal";

export default function Home() {
  const { showAlert } = useAlert();
  console.log("HOME");
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  const search = async (e) => {
    e.preventDefault();
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
        setSearchText("");
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
      <div className="main-home-search">
        <img
          src={logo}
          alt="logo"
          className="main-logo-bannner"
          style={{ float: "left" }}
        />
        <div className="home-menu-content">
          <div className="logo">ALBUM PIXEL</div>

          <div className="search">
            <input
              placeholder="Search"
              type="text"
              name="searchText"
              onChange={onChange}
            />
            <div className="button">
              <button onClick={search} disabled={searchText.length < 1}>
                <Link>SEARCH</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SocialIconsHorizontal />
      <div className="row">
        <div className="leftcolumn">
          <Products></Products>
        </div>
        <div className="rightcolumn">
          <Categories></Categories>
        </div>
      </div>
    </>
  );
}
