import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/mainLogo.png";
import searchIcon from "../../assets/searchIcon.svg";

export default function Header() {
  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} alt="logo for news blog" />
      </div>

      <form className="search-form">
        <input
          type="text"
          placeholder="I want to know..."
          className="search-input"
          onChange={(e) => {}}
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
            <Link className="nav-link" to="/logout">
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
