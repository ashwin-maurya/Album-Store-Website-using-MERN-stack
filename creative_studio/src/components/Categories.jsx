import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import ProductContext from "../context/product/productContext";

export default function Categories() {
  const context = useContext(ProductContext);
  const { products, fetchProduct } = context;
  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2>Categories:</h2>

      {products.map((item, index) => (
        <button className="home-slide-buttons" key={index}>
          <Link to={`/${item.category}`}>{item.category}</Link>
        </button>
      ))}
      {products.map((item, index) => (
        <button className="home-slide-buttons" key={index}>
          <Link to={`/${item.name}`}>{item.name}</Link>
        </button>
      ))}
    </>
  );
}
