import { React, useContext, useEffect } from "react";
import "../css/content.css";
import ProductContext from "../context/product/productContext";
import { useAlert } from "../context/alert/AlertContext";

export default function ProductCard(props) {
  const { showAlert } = useAlert();
  const context = useContext(ProductContext);
  const { product, openModal, index } = props;
  const { success, setSuccess, deleteProduct } = context;

  useEffect(() => {
    if (success) {
      showAlert("Deleted Successfully", "success");
    }
    setTimeout(() => {
      setSuccess(false);
    }, 10);
  }, [success]);
  if (
    !product ||
    !product.name ||
    !product.price ||
    !product.size ||
    !product.category ||
    !product.desc ||
    !product.downloadUrl ||
    !product.imageURLs
  ) {
    return null; // or display a default/fallback content, or an error message
  }
  function formatUTCDate(utcDateString) {
    const date = new Date(utcDateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return date.toLocaleString("en-US", options);
  }

  return (
    <>
      <div className="card">
        <img src={product.imageURLs[0]} alt={product.name} />

        <div className="card-content">
          <div className="card-head">
            <h2>
              {index + 1 + ". "}
              {product.name.slice(0, 80) +
                (product.name.length > 80 ? "..." : "")}
            </h2>
            <h3>Rs.{product.price}</h3>
          </div>
          <div className="card-main">
            <div className="card-classification">
              <h4>Type: {product.category}</h4>
              <h4>Size: {product.size}</h4>
              <h4>Read: 1min</h4>
            </div>
            <p>
              {product.desc.slice(0, 250) +
                (product.desc.length > 250 ? "..." : "")}
            </p>
            <span className="date">
              <b>{formatUTCDate(product.date)}</b>
            </span>
          </div>

          <button
            className="home-slide-buttons"
            onClick={() => {
              openModal(product);
            }}
          >
            UPDATE
          </button>
          <button
            className="home-slide-buttons"
            onClick={() => {
              deleteProduct(product._id);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}
