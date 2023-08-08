import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate hooks
import "../css/search.css";
import ProductCard from "./ProductCard";
import Categories from "./Categories";

export default function Search() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (!searchResults) {
      // Redirect to the last page if productData is not available
      navigate(-1);
    }
  }, [navigate]);
  useEffect(() => {
    if (location.state?.results) {
      setSearchResults(location.state.results);
    }
  }, [location.state]);

  return (
    <div className="App">
      <div className="row1">
        <div className="leftcolumn11">
          {location.state?.searchText && (
            <h2>Search Results based on "{location.state.searchText}"</h2>
          )}
          {searchResults.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="rightcolumn11">
          <div className="slider">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
