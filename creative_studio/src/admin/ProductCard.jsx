import { React, useContext } from "react";
import "../css/content.css";
import ProductContext from "../context/product/productContext";

export default function ProductCard(props) {
  const context = useContext(ProductContext);
  const { deleteProduct } = context;

  const { product, openModal } = props;
  return (
    <>
      <div className="card">
        <img src={product.imageURL} alt={product.name} />

        <div className="card-content">
          <div className="card-head">
            <h2>{product.name}</h2>
            <h5>{product.price}</h5>
          </div>
          <h5>{product.category}</h5>
          <p>{product.desc}</p>

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
              props.showAlert("Deleted Successfully", "success");
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}
