import { React } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Content from "./Content";
import Categories from "./Categories";
export default function Home() {
  return (
    <>
      <div className="main-home-search">
        <div className="home-menu-content">
          <div className="logo">ALBUM PIXEL</div>

          <div className="search">
            <input placeholder="Search" type="text" />
            <div className="button">
              <button>
                <Link to="/search">SEARCH</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="button-slider">
        <div className="slider">
          <h2>Categories:</h2>
          <Categories></Categories>
        </div>
      </div>
      <Content></Content>
    </>
  );
}
