import React from "react";
import "../css/search.css";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
const Search = () => {
  return (
    <div className="App">
      <div className="row1">
        <div className="leftcolumn1">
          <h1>Search Results based on ""</h1>

          <section className="results">
            <ProductCard></ProductCard>
          </section>
        </div>
        <hr />
        <div className="rightcolumn1">
          <div className="slider">
            <h2>Categories:</h2>
            <Categories></Categories>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
