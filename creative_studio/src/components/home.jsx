import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Content from "../components/content";

const Categories = [
  {
    index: 1,
    categoryName: "Dvd Sticker",
  },
  {
    index: 2,
    categoryName: "Clipart",
  },
  {
    index: 3,
    categoryName: "Death Frames",
  },
  {
    index: 4,
    categoryName: "Font",
  },
  {
    index: 5,
    categoryName: "Lightroom Preset",
  },
  {
    index: 6,
    categoryName: "Gradients",
  },
  {
    index: 7,
    categoryName: "Overlay",
  },
  {
    index: 8,
    categoryName: "Photo Color Luts",
  },
  {
    index: 9,
    categoryName: "Masks",
  },
  {
    index: 10,
    categoryName: "Mockup",
  },
  {
    index: 11,
    categoryName: "Photoshop Action",
  },
  {
    index: 12,
    categoryName: "Invitation PSD",
  },
  {
    index: 13,
    categoryName: "Shapes",
  },
  {
    index: 14,
    categoryName: "Poster",
  },
  {
    index: 15,
    categoryName: "Font Text Style",
  },
  {
    index: 16,
    categoryName: "Wedding Album Psd design",
  },
  {
    index: 17,
    categoryName: "DM Wedding",
  },
  {
    index: 18,
    categoryName: "Pre Wedding psd",
  },
  {
    index: 19,
    categoryName: "Wedding Album Cover",
  },
  {
    index: 20,
    categoryName: "Birthday album PSD",
  },
  {
    index: 21,
    categoryName: "Vidhi Font",
  },
  {
    index: 22,
    categoryName: "Flex Banner",
  },
  {
    index: 23,
    categoryName: "Business Card",
  },
  {
    index: 24,
    categoryName: "Wedding Card",
  },
  {
    index: 25,
    categoryName: "Wedding Card Layout",
  },
  {
    index: 26,
    categoryName: "Calendar",
  },
];

export default function home() {
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
          {Categories.map((item) => (
            <button className="home-slide-buttons" key={item.index}>
              <Link to={`/${item.categoryName}`}>{item.categoryName}</Link>
            </button>
          ))}
        </div>
      </div>
      <Content></Content>
    </>
  );
}
