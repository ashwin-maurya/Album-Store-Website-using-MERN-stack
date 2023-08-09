import React, { useEffect } from "react";
import "../css/product.css";
import { useLocation, useNavigate } from "react-router-dom";
import SocialIconsHorizontal from "./SocialIconsHorizontal";

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
            <SocialIconsHorizontal />

            <div className="info">
              {/* Display the product data here */}
              <div className="block published">
                <div className="mini-title">Published</div>
                {formatUTCDate(productData.date)}{" "}
              </div>
              <div className="block published">
                <div className="mini-title">Size</div>
                {productData.size}
              </div>
              <div className="block published">
                <div className="mini-title">Downloads</div>
                {productData.downloads}
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
                <center>
                  <a
                    className="download-buttons"
                    href={productData.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD
                  </a>
                </center>
                <p>{productData.desc}</p>
                {/* Display other product data here */}

                <div className="images">
                  {productData.imageURLs.slice(1).map((imageURL, index) => (
                    <img key={index} src={imageURL} alt={productData.name} />
                  ))}
                </div>
                <center>
                  <a
                    className="download-buttons"
                    href={productData.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD
                  </a>
                </center>
              </div>
            </div>
            <SocialIconsHorizontal />
          </div>
        </div>

        <div className="footer">
          <h2 style={{ textAlign: "center" }}>Please Note</h2>

          <div className="content">
            <div>
              All information on the Album Pixel PSD website -{" "}
              <a href="https://www.albumpixelpsd.com">
                https://www.albumpixelpsd.com
              </a>{" "}
              - is published in good faith and for general information purposes
              only. Album Pixel PSD does not provide any warranties regarding
              the completeness, reliability, and accuracy of this information.
            </div>
            <div>
              Any actions you undertake based on the information found on this
              website (Album Pixel PSD) are solely at your own risk. Album Pixel
              PSD will not be held liable for any losses and/or damages
              associated with the use of our website.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
