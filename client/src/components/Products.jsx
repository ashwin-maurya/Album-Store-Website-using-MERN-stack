import { React, useContext, useEffect } from "react";
import "../css/content.css";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/productContext";
import Loader from "./Loader";
export default function Products() {
  const context = useContext(ProductContext);
  const { fetchProduct, products } = context;
  useEffect(() => {
    fetchProduct(1);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>Popular Picks of the week:</h2>
      <h2>{products.length === 0 && "No Products Available."}</h2>
      {products.length === 0 && <Loader />}
      {products.map((product, index) => (
        <ProductCard product={product} index={index} key={index}></ProductCard>
      ))}
    </>
  );
}
