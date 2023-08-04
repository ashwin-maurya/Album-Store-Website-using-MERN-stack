import { React, useContext, useState, useEffect } from "react";
import "../css/form.css";
import ProductContext from "../context/product/productContext";
import { useNavigate } from "react-router-dom";

export default function AddProduct(props) {
  const navigate = useNavigate();

  const context = useContext(ProductContext);
  const { addProduct } = context;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
    }
  }, [navigate]);
  const [product, setProduct] = useState({
    category: "general",
    name: "",
    desc: "",
    price: "",
    imageURL: "",
  });

  const Submit = (e) => {
    e.preventDefault();
    addProduct(
      product.category,
      product.name,
      product.desc,
      product.price,
      product.imageURL
    );
    props.showAlert("Item Added Succesfully", "success");
    setProduct({
      category: "general",
      name: "",
      desc: "",
      price: "",
      imageURL: "",
    });
  };
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form action="" method="">
        <h2>Fill Product Details</h2>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          onChange={onChange}
          defaultValue="general"
        >
          <option value="general">General</option>
          <option value="album">Album</option>
          <option value="clipart">Clipart</option>
        </select>
        <br />
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChange}
          value={product.name}
        />
        <br />

        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          name="desc"
          rows="3"
          onChange={onChange}
          value={product.desc}
        ></textarea>

        <br />
        <label htmlFor="price">PRICE:</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={onChange}
          value={product.price}
        />
        <br />

        <label htmlFor="name">Image URL:</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          onChange={onChange}
          value={product.imageURL}
        />
        <br />
        <div className="col-xs-12">
          <button
            type="submit"
            name="submit"
            value="Submit"
            disabled={
              product.name.length < 5 ||
              product.desc.length < 5 ||
              product.price.length < 1 ||
              product.imageURL.length < 1
            }
            onClick={Submit}
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}
