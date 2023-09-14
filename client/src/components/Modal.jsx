import React from "react";
import "../css/followmodal.css";
import { useLocation } from "react-router-dom";
import logo from "../images/home/web-logo.png";

export default function Modal(props) {
  let location = useLocation();

  const { closeModal } = props;
  return (
    <>
      <div
        className={`followmodal ${
          location.pathname.includes("/admin") ? "hide" : ""
        }`}
      >
        <div className="followmodal-content">
          <img src={logo} alt="logo" className="main-logo" height="80px" />
          <p>
            FOLLOW US ON YOUTUBE AND TELEGRAM TO GET DAILY UPDATES AND SPECIAL
            OFFERS
          </p>
        </div>
        <div className="follow-us-modal">
          <a
            href="https://t.me/weddingpsdfile"
            className="telegram modal-icons"
            onClick={() => {
              closeModal();
            }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-telegram">
              <br />
              <span>Join Channel</span>
            </i>
          </a>

          <a
            href="https://www.youtube.com/@WeDDinGPiXeLPSD?sub_confirmation=1"
            className="youtube modal-icons"
            onClick={() => {
              closeModal();
            }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-youtube-play">
              <br />
              <span>Subscribe</span>
            </i>
          </a>
        </div>
      </div>
    </>
  );
}
