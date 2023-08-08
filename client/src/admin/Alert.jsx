import React from "react";
import "../css/alert.css";
import { useAlert } from "../context/alert/AlertContext";

export default function Alert() {
  const { alert } = useAlert();

  return (
    <>{alert && <div className={`alert ${alert.type}`}>{alert.msg}</div>}</>
  );
}
