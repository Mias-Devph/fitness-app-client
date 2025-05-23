import React, { useState, useContext } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const notyf = new Notyf();

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
		const data = await res.json();
		if (res.ok) {
		  await login(data.access);  // Just pass the token, context will fetch user
		  notyf.success("Login successful!");
		  navigate("/");
		} else {
		  notyf.error(data.message || "Login failed");
		}
    } catch (err) {
      notyf.error("Network error");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="form-control my-2" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
