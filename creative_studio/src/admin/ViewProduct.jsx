import { React, useContext, useEffect, useState, useRef } from "react";
import "../css/modal.css";
import "../css/content.css";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/productContext";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";

export default function ViewProducts() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [isModalOpen, setModalOpen] = useState(false);
  const context = useContext(ProductContext);
  const { success, setSuccess, products, fetchProduct, updateProduct } =
    context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchProduct();
    } else {
      navigate("/admin/login");
    }
    // eslint-disable-next-line
  }, [navigate]);

  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      closeModal();
    }
  };
  const [product, setProduct] = useState({
    id: "",
    ucategory: "",
    uname: "",
    udesc: "",
    uprice: "",
    uimageURL: "",
  });

  const openModal = (currentProduct) => {
    setModalOpen(true);
    setProduct({
      id: currentProduct._id,
      ucategory: currentProduct.category,
      uname: currentProduct.name,
      udesc: currentProduct.desc,
      uprice: currentProduct.price,
      uimageURL: currentProduct.imageURL,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    updateProduct(
      product.id,
      product.ucategory,
      product.uname,
      product.udesc,
      product.uprice,
      product.uimageURL
    );

    setModalOpen(false);
  };

  useEffect(() => {
    if (success) {
      showAlert("Updated Successfully", "success");
    }
    setTimeout(() => {
      setSuccess(false);
    }, 10);
  }, [success]);
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <>
      {isModalOpen && (
        <div
          id="myModal"
          className="modal"
          ref={modalRef}
          onClick={handleOutsideClick}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <form action="" method="">
              <label htmlFor="category">Category:</label>
              <select
                id="ucategory"
                name="ucategory"
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
                id="uname"
                name="uname"
                onChange={onChange}
                value={product.uname}
              />
              <br />

              <label htmlFor="desc">Description:</label>
              <textarea
                id="udesc"
                name="udesc"
                rows="3"
                onChange={onChange}
                value={product.udesc}
              ></textarea>

              <br />
              <label htmlFor="price">PRICE:</label>
              <input
                type="number"
                id="uprice"
                name="uprice"
                onChange={onChange}
                value={product.uprice}
                minLength={1}
              />
              <br />

              <label htmlFor="name">Image URL:</label>
              <input
                type="text"
                id="uimageURL"
                name="uimageURL"
                onChange={onChange}
                value={product.uimageURL}
              />
              <br />
              <div className="col-xs-12">
                <button
                  type="submit"
                  value="Submit"
                  onClick={Submit}
                  disabled={
                    product.uname.length < 5 ||
                    product.udesc.length < 5 ||
                    product.uprice.length < 1 ||
                    product.uimageURL.length < 1
                  }
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h1>Available products:</h1>
      <h2>
        {products.length === 0 &&
          "No Products Available. Add a product to see."}
      </h2>
      {products.map((product, index) => (
        <ProductCard
          openModal={openModal}
          product={product}
          showAlert={showAlert}
          key={index}
        ></ProductCard>
      ))}
    </>
  );
}
