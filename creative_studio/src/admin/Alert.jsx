import React, { useState } from "react";
import "../css/alert.css";

export default function Alert(props) {
  return (
    <>
      {props.alert && (
        <div className={`alert ${props.alert.type}`}>{props.alert.msg}</div>
      )}
    </>
  );
}
