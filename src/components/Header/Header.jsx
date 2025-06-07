import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/mainLogo.png";
import searchIcon from "../../assets/searchIcon.svg";
import LogOutIcon from "../../assets/LogOutIcon.svg";

export default function Header({ setSearchTerm }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt-token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} alt="logo for news blog" />
      </div>

      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="I want to know..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          className="search-icon"
          src={searchIcon}
          alt="searchIcon for field"
        />
      </form>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Main Page
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">
              All News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/weather">
              Weather
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link logout-button" onClick={logout}>
              Log out
              <img className="logout-icon" src={LogOutIcon} alt="logout icon" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
