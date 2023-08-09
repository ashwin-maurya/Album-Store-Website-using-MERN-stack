import React from "react";
import "../css/socialiconshorizontal.css";

export default function SocialIconsHorizontal() {
  return (
    <>
      <div className="icon-bar-horizontal">
        <a
          href="https://www.facebook.com/weddingpixelpsd/"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <i className="fa fa-facebook">
            {" "}
            <br />
            <span>Facebook</span>
          </i>
        </a>
        <a
          href="https://t.me/weddingpsdfile"
          target="_blank"
          className="telegram"
          rel="noreferrer"
        >
          <i className="fa fa-telegram">
            {" "}
            <br />
            <span>Telegram</span>
          </i>
        </a>
        <a
          href="https://t.me/weddingpsdfile"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <i className="fa fa-instagram">
            {" "}
            <br />
            <span>Instagram</span>
          </i>
        </a>
        <a
          href="https://t.me/weddingpsdfile"
          target="_blank"
          rel="noreferrer"
          className="youtube"
        >
          <i className="fa fa-youtube-play">
            {" "}
            <br /> <span>Youtube</span>
          </i>
        </a>
      </div>
    </>
  );
}
