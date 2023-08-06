import React from "react";
import "../css/socialicons.css";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <>
      <div className="icon-bar">
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
