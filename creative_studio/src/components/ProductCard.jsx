import { React } from "react";
import "../css/content.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;
  return (
    <>
      <div className="card">
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="card-demo"
        />

        <div className="card-content">
          <div className="card-head">
            <h2>{product.name}</h2>
            <h5>{product.price}</h5>
          </div>
          <h5>{product.category}</h5>
          <p>{product.desc}</p>
          <button className="home-slide-buttons">
            <Link to="/product">BUY NOW</Link>
          </button>
        </div>
      </div>
    </>
  );
}
