import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "../css/content.css";
import ProductCard from "./ProductCard";
import Categories from "./Categories";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]); // State to hold the search results
  const location = useLocation(); // Get the location object

  useEffect(() => {
    // When the component mounts or location state changes, extract the search results from the location state
    if (location.state && location.state.results) {
      setSearchResults(location.state.results);
    }
  }, [location.state.results]); // Add location.state.results to the dependency array

  return (
    <div className="App">
      <div className="row1">
        <div className="leftcolumn11">
          <h1>Search Results based on "{location.search}"</h1>
          {searchResults.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
        <hr />
        <div className="rightcolumn11">
          <div className="slider">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
