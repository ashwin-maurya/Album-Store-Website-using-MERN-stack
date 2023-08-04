import { React, useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Content from "./Products";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  const search = async (e) => {
    e.preventDefault();
    console.log(searchText);
    const response = await fetch(`/api/product/search/?q=${searchText}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (Object.keys(json).length === 0) {
      props.showAlert("No search result found.", "failed");
    } else {
      navigate("/search", { state: { results: json }, replace: true });
    }
  };

  return (
    <>
      <div className="main-home-search">
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
              <button onClick={search}>
                <Link>SEARCH</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <Content></Content>
        </div>
        <div className="rightcolumn">
          <Categories></Categories>
        </div>
      </div>
    </>
  );
}
