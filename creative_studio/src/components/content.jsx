import React from "react";
import "../css/content.css";
import { Link } from "react-router-dom";

export default function content() {
  return (
    <>
      <div className="row">
        <div className="leftcolumn">
          <h2>Popular Picks of the week:</h2>
          <div className="card">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

            <div className="card-content">
              <div className="card-head">
                <h2>Our Blogs</h2>
                <h5>Title description</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                laborum cum ipsa totam dolores excepturi non, architecto animi
                rem voluptates? Reiciendis impedit quo ipsam esse a, fugiat
                excepturi nobis vitae?
              </p>
              <button className="home-slide-buttons">
                <Link to="/product">BUY NOW</Link>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

            <div className="card-content">
              <div className="card-head">
                <h2>Our Blogs</h2>
                <h5>Title description</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                laborum cum ipsa totam dolores excepturi non, architecto animi
                rem voluptates? Reiciendis impedit quo ipsam esse a, fugiat
                excepturi nobis vitae?
              </p>
              <button className="home-slide-buttons">
                <Link to="/product">BUY NOW</Link>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

            <div className="card-content">
              <div className="card-head">
                <h2>Our Blogs</h2>
                <h5>Title description</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                laborum cum ipsa totam dolores excepturi non, architecto animi
                rem voluptates? Reiciendis impedit quo ipsam esse a, fugiat
                excepturi nobis vitae?
              </p>
              <button className="home-slide-buttons">
                <Link to="/product">BUY NOW</Link>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

            <div className="card-content">
              <div className="card-head">
                <h2>Our Blogs</h2>
                <h5>Title description</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                laborum cum ipsa totam dolores excepturi non, architecto animi
                rem voluptates? Reiciendis impedit quo ipsam esse a, fugiat
                excepturi nobis vitae?
              </p>
              <button className="home-slide-buttons">
                <Link to="/product">BUY NOW</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card-1">
            <img
              src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <div className="card-1-con">
              <h3>About me</h3>
              <p>
                Some text about me in culpa qui officia deserunt mollit anim..
              </p>
            </div>
          </div>
          <div className="card-2">
            <div className="p-head">
              <h3>Popular Post</h3>
            </div>
            <div id="p-list">
              <ul className="p-list">
                <hr />
                <li className="p-list-items">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Lh85m8FapdUJ3nb4uFN2nkBHsurugRjJ2g&usqp=CAU"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <div className="p-list-para">
                    <span>Lorem</span>
                    <span>Sed mattis nunc</span>
                  </div>
                </li>
                <hr />
                <li className="p-list-items">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Lh85m8FapdUJ3nb4uFN2nkBHsurugRjJ2g&usqp=CAU"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <div className="p-list-para">
                    <span>Lorem</span>
                    <span>Sed mattis nunc</span>
                  </div>
                </li>
                <hr />
                <li className="p-list-items">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Lh85m8FapdUJ3nb4uFN2nkBHsurugRjJ2g&usqp=CAU"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <div className="p-list-para">
                    <span>Lorem</span>
                    <span>Sed mattis nunc</span>
                  </div>
                </li>
                <hr />
                <li className="p-list-items">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Lh85m8FapdUJ3nb4uFN2nkBHsurugRjJ2g&usqp=CAU"
                    alt="Image"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <div className="p-list-para">
                    <span>Lorem</span>
                    <span>Sed mattis nunc</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
