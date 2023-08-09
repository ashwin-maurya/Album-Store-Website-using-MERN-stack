import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";

export default function Categories() {
  const { showAlert } = useAlert();

  const navigate = useNavigate();

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
  };
  return (
    <>
      <h2>Categories:</h2>
      <div className="categories" onClick={handleClickLink}>
        <button className="home-slide-buttons">
          <Link>ALBUM</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Wedding Album Psd</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>DM Wedding</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Pre Wedding psd</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Wedding Album Cover</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Birthday album PSD</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Font</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Clipart</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Death Frames</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Font</Link>
        </button>

        <button className="home-slide-buttons">
          <Link>Lightroom Preset</Link>
        </button>
      </div>
    </>
  );
}
