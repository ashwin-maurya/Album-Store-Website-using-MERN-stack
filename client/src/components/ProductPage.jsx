import React, { useEffect } from "react";
import "../css/product.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const productData = location.state?.product;
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    if (!productData) {
      // Redirect to the last page if productData is not available
      navigate(-1);
    }
  }, [navigate, productData]);

  if (!productData) {
    return null;
  }
  function formatUTCDate(utcDateString) {
    const date = new Date(utcDateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleString("en-US", options);
  }

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="content">
            <div className="info">
              {/* Display the product data here */}
              <div className="block published">
                <div className="mini-title">Published</div>
                {formatUTCDate(productData.date)}{" "}
              </div>
              <div className="block published">
                <div className="mini-title">Views</div>
                12
              </div>
              <div className="block published">
                <div className="mini-title">Downloads</div>
                12
              </div>
              <div className="block published">
                <div className="mini-title">Total Read</div>1 min
              </div>
            </div>
            <div>
              <div className="words">
                <h1>{productData.name}</h1>
                <img
                  src={productData.imageURLs[0]}
                  alt="Product "
                  style={{ width: "100%" }}
                />
                <p>{productData.desc}</p>
                {/* Display other product data here */}
                <p>
                  Date: {productData.date} <br />
                </p>
                <div className="images">
                  {productData.imageURLs.slice(1).map((imageURL, index) => (
                    <img key={index} src={imageURL} alt={productData.name} />
                  ))}
                </div>
                <div className="buttons">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <h2 style={{ textAlign: "center" }}>Note</h2>

          <div className="content">
            <div>
              Our department website features a blog page that has been created
              for educational purposes. All of the blogs posted on the page have
              been carefully verified by the website's administrators to ensure
              that they do not contain any inappropriate content.
            </div>
            <div>
              Our aim is to provide readers with informative and engaging
              content that can help them learn and expand their knowledge on a
              variety of topics. We encourage users to take advantage of this
              resource and explore the different blog posts available on our
              website.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
