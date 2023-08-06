import { React } from "react";
import "../css/content.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();

  const { product } = props;
  if (
    !product ||
    !product.name ||
    !product.price ||
    !product.category ||
    !product.desc ||
    !product.imageURL
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

  const handleBuyNow = () => {
    navigate("/productView", { state: { product } });
  };
  return (
    <>
      <div className="card">
        <img src={product.imageURL} alt={product.name} />

        <div className="card-content">
          <div className="card-head">
            <h2>
              {product.name.slice(0, 80) +
                (product.name.length > 80 ? "..." : "")}
            </h2>
            <h3>Rs.{product.price}</h3>
          </div>
          <div className="card-main">
            <div className="card-classification">
              <h4>{product.category}</h4>
              <h4>Size</h4>
              <h4>{product.category}</h4>
            </div>
            <p>
              {product.desc.slice(0, 250) +
                (product.desc.length > 250 ? "..." : "")}
            </p>
            <span className="date">
              <b>{formatUTCDate(product.date)}</b>
            </span>
          </div>
          <button className="home-slide-buttons" onClick={handleBuyNow}>
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
