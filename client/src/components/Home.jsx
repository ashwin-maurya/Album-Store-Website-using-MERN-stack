import { React, useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Products from "./Products";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";
import logo from "../images/home/web-logo.png";

export default function Home() {
  const { showAlert } = useAlert();

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
        console.log(json);
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
        <div className="home-menu-content">
          <div className="logo">
            <img src={logo} alt="logo" className="main-logo" height="150px" />
            ALBUM PIXEL
            <img src={logo} alt="logo" className="main-logo" height="150px" />
          </div>

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
