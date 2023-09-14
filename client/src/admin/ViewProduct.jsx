import { React, useContext, useEffect, useState, useRef } from "react";
import "../css/modal.css";
import "../css/content.css";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/productContext";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";

export default function ViewProducts() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [searchText, setSearchText] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const context = useContext(ProductContext);
  const {
    success,
    setSuccess,
    updateProduct,
    fetchProduct,
    page,
    hasMore,
    setHasMore,
    products,
    totalPages,
  } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (page === 1) {
        fetchProduct(page);
      }
    } else {
      navigate("/admin/login");
    }
    // eslint-disable-next-line
  }, [navigate]);

  useEffect(() => {
    if (success) {
      showAlert("Updated Successfully", "success");
    }
    setTimeout(() => {
      setSuccess(false);
    }, 10);
  }, [success, setSuccess, showAlert]);

  const fetchMoreProducts = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      fetchProduct(nextPage);
    } else {
      setHasMore(false);
    }
  };

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
    usize: "",
    uprice: "",
    uimageURLs: [],
    udownloadUrl: "",
  });

  const openModal = (currentProduct) => {
    setModalOpen(true);
    setProduct({
      id: currentProduct._id,
      ucategory: currentProduct.category,
      uname: currentProduct.name,
      udesc: currentProduct.desc,
      usize: currentProduct.size,
      uprice: currentProduct.price,
      uimageURLs: currentProduct.imageURLs || [],
      udownloadUrl: currentProduct.downloadUrl,
    });
  };

  const handleImageURLChange = (e, index) => {
    const updatedURLs = [...product.uimageURLs]; // Updated property name to uimageURLs
    updatedURLs[index] = e.target.value;
    setProduct({ ...product, uimageURLs: updatedURLs }); // Updated property name to uimageURLs
  };

  const handleNumImagesChange = (e) => {
    const num = parseInt(e.target.value);
    if (!isNaN(num) && num >= 0 && num <= 10) {
      setProduct((prevProduct) => {
        const updatedURLs = [...prevProduct.uimageURLs];

        if (num > prevProduct.uimageURLs.length) {
          for (let i = prevProduct.uimageURLs.length; i < num; i++) {
            updatedURLs.push("");
          }
        } else {
          updatedURLs.splice(num); // Remove excess elements
        }

        return { ...prevProduct, uimageURLs: updatedURLs };
      });
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        uimageURLs: Array(1).fill(""),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct(
      product.id,
      product.ucategory,
      product.uname,
      product.udesc,
      product.usize,
      product.uprice,
      product.uimageURLs,
      product.udownloadUrl
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
  }, [success, setSuccess, showAlert]);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  //search

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
    search();
  };
  const search = async () => {
    try {
      const response = await fetch(`/api/product/search/?q=${searchText}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (Object.keys(json).length === 0) {
        showAlert("No search result found.", "failed");
      } else {
        setsearchResult(json);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.", "failed");
        } else {
          alert("An error occurred. Please try again later.", "failed");
        }
      } else {
        alert(
          "Network Error. Please check your internet connection.",
          "failed"
        );
      }
    }
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
            <form action="" method="" className="uploadForm">
              <label htmlFor="category">Category:</label>
              <select
                id="ucategory"
                name="ucategory"
                onChange={onChange}
                value={product.ucategory}
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
              <label htmlFor="usize">Size:</label>
              <input
                type="text"
                id="usize"
                name="usize"
                onChange={onChange}
                value={product.usize}
              />
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
              <label>
                Number of Images:
                <input
                  type="number"
                  value={product.uimageURLs.length}
                  onChange={handleNumImagesChange}
                  max={10}
                  min={1}
                />
              </label>
              {product.uimageURLs.map((url, index) => (
                <div key={index}>
                  <label>
                    Image {index + 1} URL:
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => handleImageURLChange(e, index)}
                    />
                  </label>
                </div>
              ))}
              <br />
              <label htmlFor="udownloadUrl">Download URL:</label>
              <input
                type="text"
                id="udownloadUrl"
                name="udownloadUrl"
                onChange={onChange}
                value={product.udownloadUrl}
              />
              <br />
              <div className="col-xs-12">
                <button
                  type="submit"
                  value="Submit"
                  onClick={handleSubmit}
                  disabled={
                    product.uname.length < 5 ||
                    product.udesc.length < 5 ||
                    product.uprice.length < 1 ||
                    product.usize.length < 0 ||
                    product.udownloadUrl.length < 1 ||
                    product.uimageURLs.some((url) => url.length < 1)
                  }
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <input
        placeholder="Search for products"
        type="text"
        name="searchText"
        onChange={onChangeSearch}
        style={{ marginTop: "20px", padding: "10px", width: "50%" }}
      />
      <h2>
        {products.length === 0 &&
          "No Products Available. Add a product to see."}
      </h2>
      <div className={`${searchText === "" ? "hide" : ""}`}>
        <h1>Seach results based on : {searchText}</h1>
        {searchResult.map((product, index) => (
          <ProductCard
            openModal={openModal}
            product={product}
            index={index}
            key={index}
          ></ProductCard>
        ))}
      </div>
      <div className={`${searchText !== "" ? "hide" : ""}`}>
        <h1>Available Products</h1>

        <InfiniteScroll
          dataLength={products.length}
          hasMore={hasMore}
          loader={<Loader />}
          next={fetchMoreProducts}
          endMessage={<h4>NO MORE PRODUCTS</h4>}
        >
          <div className="infinite-cards">
            {products.map((product, index) => (
              <ProductCard
                openModal={openModal}
                product={product}
                index={index}
                key={index}
              ></ProductCard>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
