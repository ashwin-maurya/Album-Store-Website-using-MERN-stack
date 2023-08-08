import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate hooks
import "../css/search.css";

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
    <>
      {location.state?.searchText && (
        <h2>Search Results based on "{location.state.searchText}"</h2>
      )}
      {/* {searchResults.map((product) => (
        // <ProductCard key={product._id} product={product} />
      ))} */}
    </>
  );
}
