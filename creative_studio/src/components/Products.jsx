import { React, useContext, useEffect } from "react";
import "../css/content.css";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/productContext";

export default function Products() {
  const context = useContext(ProductContext);
  const { products, fetchProduct } = context;
  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2>Popular Picks of the week:</h2>
      <div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
}
