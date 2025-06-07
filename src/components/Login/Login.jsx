import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import loginImage from "../../assets/bgForLogin.jpeg";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = ({ email, password }) => {
    if (email === "admin@admin.com" && password === "12345") {
      localStorage.setItem("jwt-token", "true");
      navigate(location.state?.from?.pathname || "/");
    } else {
      alert("Don't correct email or password");
    }
  };
  return (
    <div className="login">
      <div className="login-media">
        <img src={loginImage} alt="photo for login" className="login-image" />
      </div>
      <div className="login-content">
        <h2 className="login-title">Log in</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="login-label-email">Email</label>
          <input
            className="login-email"
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="login-error">email required</span>}
          <label className="login-label-password">Password</label>
          <input
            className="login-password"
            name="password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="login-error">password required</span>
          )}
          <button className="login-btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
