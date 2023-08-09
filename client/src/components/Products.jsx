import { React, useContext, useEffect } from "react";
import "../css/content.css";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/productContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
export default function Products() {
  const context = useContext(ProductContext);
  const { fetchProduct, page, hasMore, setHasMore, products, totalPages } =
    context;
  useEffect(() => {
    // Fetch products only if the page is 1 (first time loading the component)
    if (page === 1) {
      fetchProduct(page);
    }
    // eslint-disable-next-line
  }, []);

  const fetchMoreProducts = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      fetchProduct(nextPage);
    } else {
      setHasMore(false); // Set hasMore to false if there are no more pages to fetch
    }
  };

  return (
    <>
      <h2>Popular Picks of the week:</h2>
      <h2>
        {products.length === 0 &&
          "No Products Available. Add a product to see."}
      </h2>
      <InfiniteScroll
        dataLength={products.length}
        hasMore={hasMore}
        loader={<Loader />}
        next={fetchMoreProducts}
      >
        <div className="infinite-cards">
          {products.map((product, index) => (
            <ProductCard
              product={product}
              index={index}
              key={index}
            ></ProductCard>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
