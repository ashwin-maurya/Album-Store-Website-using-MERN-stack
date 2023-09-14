import React from "react";
import "../css/socialicons.css";
import { useLocation } from "react-router-dom";

export default function SocialIcons() {
  let location = useLocation();

  return (
    <>
      <div
        className={`icon-bar ${
          location.pathname.includes("/admin") ? "hide" : ""
        }`}
      >
        <a
          href="https://www.facebook.com/weddingpixelpsd/"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://t.me/weddingpsdfile"
          target="_blank"
          rel="noreferrer"
          className="telegram"
        >
          <i className="fa fa-telegram"></i>
        </a>
        <a
          href="https://www.instagram.com/albumpixelpsd/"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@WeDDinGPiXeLPSD?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
          className="youtube"
        >
          <i className="fa fa-youtube-play"></i>
        </a>
      </div>
    </>
  );
}
