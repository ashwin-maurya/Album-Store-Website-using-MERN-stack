import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alert/AlertContext";

export default function Signup() {
  const { showAlert } = useAlert();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const loginAuth = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authToken);
        navigate("/admin");
        showAlert("Login Successful", "success");
      } else {
        showAlert("User exists", "failed");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.", "failed");
        } else {
          alert("An error occurred. Please try again later.", "failed");
        }
      } else {
        alert(
          "Network Error. Please check your internet connection.",
          "failed"
        );
      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="login-from">
        <form onSubmit={loginAuth}>
          <h1>SignUP </h1>
          <p>ONLY FOR ADMIN.</p>
          <hr />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={credentials.name}
            onChange={onChange}
            required
            minLength={5}
          />
          <br />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
            minLength={5}
          />
          <br />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
            minLength={5}
          />

          <br />
          <div className="col-xs-12">
            <button type="submit" name="submit">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
