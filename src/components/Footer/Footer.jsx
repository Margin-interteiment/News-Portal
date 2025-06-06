import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "../../assets/facebook.svg";
import pinterest from "../../assets/pinterest.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import behance from "../../assets/behance.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h2 className="footer-contact-title">Contact the Publisher</h2>
        <p className="footer-contact-email">mike@runo.com</p>
        <p className="footer-contact-tel">+944 450 904 505</p>
      </div>

      <div className="footer-links">
        <h2 className="footer-links-title">Explorate</h2>
        <ul className="footer-links-list">
          <li className="footer-links-item">
            <Link className="footer-link" to="/news">
              All News
            </Link>
          </li>
          <li className="footer-links-item">
            <Link className="footer-link" to="/profile">
              My Profile
            </Link>
          </li>
          <li className="footer-links-item">
            <Link className="footer-link" to="/weather">
              Weather
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-headquarter">
        <h2 className="footer-headquarter-title">Headquarter</h2>
        <p className="footer-headquarter-address">
          191 Middleville Road, NY 1001, Sydney, Australia
        </p>
      </div>

      <div className="footer-social">
        <h2 className="footer-social-title">Connections</h2>
        <ul className="footer-social-list">
          <li className="footer-social-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
          </li>
          <li className="footer-social-item">
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pinterest} alt="Pinterest" className="social-icon" />
            </a>
          </li>
          <li className="footer-social-item">
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="social-icon" />
            </a>
          </li>
          <li className="footer-social-item">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" className="social-icon" />
            </a>
          </li>
          <li className="footer-social-item">
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={behance} alt="Behance" className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
