import { React, useContext, useState, useEffect } from "react";
import "../css/form.css";
import ProductContext from "../context/product/productContext";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";

export default function AddProduct() {
  const { showAlert } = useAlert();
  const context = useContext(ProductContext);

  const { success, setSuccess, addProduct } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const [product, setProduct] = useState({
    category: "general",
    name: "",
    desc: "",
    size: "",
    price: "",
    downloadUrl: "",
  });

  const [numImages, setNumImages] = useState(1);
  const [imageURLs, setImageURLs] = useState(Array(numImages).fill(""));

  const handleImageURLChange = (e, index) => {
    const updatedURLs = [...imageURLs];
    updatedURLs[index] = e.target.value;
    setImageURLs(updatedURLs);
  };
  const handleNumImagesChange = (e) => {
    const num = parseInt(e.target.value);
    if (!isNaN(num) && num >= 1 && num <= 10) {
      if (num > numImages) {
        setImageURLs((prevURLs) => [
          ...prevURLs,
          ...Array(num - numImages).fill(""),
        ]);
      } else {
        setImageURLs((prevURLs) => prevURLs.slice(0, num));
      }
      setNumImages(num);
    } else {
      setNumImages(1);
      setImageURLs(Array(1).fill(""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(
      product.category,
      product.name,
      product.desc,
      product.size,
      product.price,
      imageURLs,
      product.downloadUrl
    );
  };
  useEffect(() => {
    if (success) {
      showAlert("Added Successfully", "success");
      setImageURLs(Array(numImages).fill(""));
      setNumImages(1);

      setProduct({
        category: "general",
        name: "",
        desc: "",
        size: "",
        price: "",
        downloadUrl: "",
      });
    }
    setTimeout(() => {
      setSuccess(false);
    }, 10);
  }, [success, showAlert, numImages, setSuccess]);
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="uploadForm"
        style={{ paddingBottom: "50px" }}
      >
        <h2>Fill Product Details</h2>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          onChange={onChange}
          defaultValue="general"
        >
          <option value="general">General</option>
          <option value="Album">Album</option>
          <option value="Photoshop">Photoshop</option>
          <option value="Lightroom Preset">Lightroom Preset</option>
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
        <label htmlFor="name">Size:</label>
        <input
          type="text"
          id="size"
          name="size"
          onChange={onChange}
          value={product.size}
        />

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

        <label>
          Number of Images:
          <input
            type="number"
            value={numImages}
            onChange={handleNumImagesChange}
            max={10}
            min={1}
          />
        </label>
        <label htmlFor="">
          Note that 1st Image will be shown in the product card
        </label>
        {Array.from({ length: numImages }).map((_, index) => (
          <div key={index}>
            <label>
              Image {index + 1} URL:
              <input
                type="text"
                name="imageURL"
                value={imageURLs[index]}
                onChange={(e) => handleImageURLChange(e, index)}
              />
            </label>
          </div>
        ))}
        <br />
        <label htmlFor="price">Download URL:</label>
        <input
          type="text"
          id="downloadUrl"
          name="downloadUrl"
          onChange={onChange}
          value={product.downloadUrl}
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
              product.size.length < 0 ||
              product.price.length < 1 ||
              product.downloadUrl.length < 1 ||
              imageURLs.some((url) => url.length < 1)
            }
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}
