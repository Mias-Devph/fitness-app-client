import React, { useState } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useNavigate } from "react-router-dom";

const notyf = new Notyf();

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      notyf.error("Passwords do not match");
      return;
    }

    // Prepare payload without confirmPassword
    const { confirmPassword, ...payload } = form;

    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        notyf.success("Registered successfully!");
        navigate("/login");
      } else {
        notyf.error(data.message || "Registration failed");
      }
    } catch (err) {
      notyf.error("Network error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="mobileNo"
          placeholder="Mobile Number"
          value={form.mobileNo}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="form-control my-2"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <button className="btn btn-dark w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
