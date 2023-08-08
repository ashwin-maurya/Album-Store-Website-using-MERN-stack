import React from "react";
import "../css/socialicons.css";
import { Link, useLocation } from "react-router-dom";

export default function SocialIcons() {
  let location = useLocation();

  return (
    <>
      <div
        className={`icon-bar ${
          location.pathname.includes("/admin") ? "hide" : ""
        }`}
      >
        <Link to="/" className="whatsapp">
          <i className="fa fa-whatsapp"></i>
        </Link>
        <Link to="/" className="facebook">
          <i className="fa fa-facebook"></i>
        </Link>
        <Link to="/" className="twitter">
          <i className="fa fa-telegram"></i>
        </Link>
        <Link to="/" className="instagram">
          <i className="fa fa-instagram"></i>
        </Link>
        <Link to="/" className="youtube">
          <i className="fa fa-youtube-play"></i>
        </Link>
      </div>
    </>
  );
}
