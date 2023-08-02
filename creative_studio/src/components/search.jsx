import React, { useState } from "react";
import "../css/search.css";
import { Link } from "react-router-dom";

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
const initialItems = [
  {
    productType: 1,
    platform: "osx",
    name: "b Item title",
    price: 11.99,
  },
  {
    productType: 2,
    platform: "windows",
    name: "New title",
    price: 9.99,
  },
  {
    productType: 2,
    platform: "windows",
    name: "ashwin",
    price: 7.99,
  },
];

const Search = () => {
  return (
    <div className="App">
      <div className="row1">
        <div className="leftcolumn1">
          <h1>Search Results based on ""</h1>

          <section className="results">
            {initialItems.map((item) => (
              <div className="card" key={item.name}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

                <div className="card-content">
                  <div className="card-head">
                    <h2>{item.name}</h2>
                    <h5>${item.price.toFixed(2)}</h5>
                  </div>
                  <h4>Type : {item.productType}</h4>
                  <h4>Platform : {item.platform}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem laborum cum ipsa totam dolores excepturi non,
                    architecto animi rem voluptates? Reiciendis impedit quo
                    ipsam esse a, fugiat excepturi nobis vitae?
                  </p>
                  <button className="home-slide-buttons">
                    <Link to="/product">BUY NOW</Link>
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
        <hr />
        <div className="rightcolumn1">
          <div className="slider">
            <h2>Categories:</h2>
            {Categories.map((item) => (
              <button className="home-slide-buttons" key={item.index}>
                <Link to={`/${item.categoryName}`}>{item.categoryName}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
